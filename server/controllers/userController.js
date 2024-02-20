const bcrypt = require('bcrypt');
const jwt = require("jsonwebtoken");
const { UserModel } = require("../models/userModel");
const { BlacklistModel } = require("../models/blacklistModel");

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
                    const user = new UserModel({email, username, password: hash, subscription: false});
                    await user.save();
                    res.status(201).send({"msg": "User registered successfuly", "user": user});
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
        }else{
            res.status(200).send({"msg": "No user found"});
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
        console.log(error);
        res.status(400).send({"err": error})
    }
}

const deleteUser = async (req, res) => {
    const { email, password} = req.body;
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


module.exports = {
    register,
    login,
    logout,
    changePassword,
    deleteUser,
    getAllUsers
}