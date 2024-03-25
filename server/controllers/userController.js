const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userModel");
const { BlacklistModel } = require("../models/blacklistModel");
const { sendEmail } = require('../utils/sendEmail');
const { TokenModel } = require('../models/userToken');
const crypto = require("crypto");

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find();
        res.status(200).send({"users": users});
    } catch (error) {
        res.status(400).send({"error": error})
    }
}

const register = async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const isUser = await UserModel.findOne({email});
        if(isUser){
            res.status(200).send({"msg": "User already exists"});
        }else{
            bcrypt.hash(password, 8, async (err, hash) => {
                if(err){
                    res.status(200).send({"err": "Something went wrong while hashing"});
                }else{
                    const user = new UserModel({email, username, password: hash});
                    await user.save();
                    const token = await new TokenModel({
                        userId: user._id,
                        token: crypto.randomBytes(32).toString("hex")
                    }).save();

                    const url = `${process.env.BASE_URL}user/${user._id}/verify/${token.token}`;
                    const message = `Click here to verify -> ${url}`

                    await sendEmail(user.email, "Verify Email", message);
                    
                    res.status(201).send({"msg": "An Email sent to your account please verify ", "user": user});
                }
            })
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

const login = async (req, res) => {
    const { email, password} = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(user){
            if(!user.verified){
                const token = await new TokenModel({
                    userId: user._id,
                    token: crypto.randomBytes(32).toString("hex")
                }).save();
                const url = `${process.env.BASE_URL}user/${user._id}/verify/${token.token}`;
                const message = `Click here to verify -> ${url}`
                
                await sendEmail(user.email, "Verify Email", message);
                res.status(200).send({"msg": "An Email sent to your account please verify ", "user": user});
            }else{                
                bcrypt.compare(password, user.password, (err, hash) => {
                    if(hash){
                        const token = jwt.sign({user: user}, "secret", { expiresIn: "5hr"});
                        res.status(200).send({
                            "msg": "Login successful",
                            "token": token
                        });
                    }else{
                        res.status(200).send({"msg": "Wrong Password"});
                    }
                })
            }
        }else{
            res.status(200).send({"msg": "No user found"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

const verifyUser = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.params.id });
        if (user){
            const token = await TokenModel.findOne({
                userId: user._id,
                token: req.params.token
            })
            if(token){
                await UserModel.findByIdAndUpdate({ _id: user._id}, {verified: true});
                await TokenModel.findByIdAndDelete({ _id: token._id })

                res.status(200).send({"msg": "Email verified successfully"})
            }else{
                res.status(400).send({"msg": "Invalid Link"});
            }
        }else{
            res.status(400).send({"msg": "Invalid Link"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

const logout = async (req, res) => {
    const token = req.headers.authorization;
    try {
        if(token){
            const blacklist = new BlacklistModel({token});
            await blacklist.save();
            res.status(200).send({"msg": "User has been logged out"});
        }else{
            res.status(400).send({"err": "Give a token to logout"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

const changePassword = async (req, res) => {
    const { email, password, newPassword } = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(user){
            if(password == newPassword){
                res.status(400).send({"msg": "Same password cannot be set"})
            }else{
                bcrypt.compare(password, user.password, async (err, hash) => {
                    if(hash){
                        bcrypt.hash(newPassword, 8, async (err, hash) => {
                            if(err){
                                res.status(400).send({"err": "Something went wrong while hashing"});
                            }else{
                                const newUser = await UserModel.findByIdAndUpdate({_id: user._id}, {password: hash});
                                res.status(200).send({"msg": "User has been updated", "user": newUser, success: true});
                            }
                        })
                    }else{
                        res.status(200).send({"msg": "Wrong Password"});
                    }
                })
            }
        }else{
            res.status(200).send({"msg": "No user found"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

const deleteUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({email});
        if(user){
            bcrypt.compare(password, user.password, async (err, hash) => {
                if(hash){
                    await UserModel.findByIdAndDelete({_id: user._id});
                    res.status(200).send({"msg": "User has been deleted"});
                }else{
                    res.status(200).send({"msg": "Wrong Password"});
                }
            })
        }else{
            res.status(200).send({"msg": "No user found"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

// const subscribeUser = async (req, res) => {
//     const {id} = req.body.user;
//     try {
//         const user = await UserModel.findByIdAndUpdate({_id: id}, {subscription: true});
//     } catch (error) {
//         res.status(400).send({"err": error})
//     }
// }


module.exports = {
    register,
    login,
    logout,
    changePassword,
    deleteUser,
    getAllUsers,
    verifyUser
}