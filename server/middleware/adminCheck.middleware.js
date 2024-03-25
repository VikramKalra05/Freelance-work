const { BlacklistModel } = require("../models/blacklistModel");
const jwt = require("jsonwebtoken")

const adminCheck = async (req, res, next) => {
    const token = req.headers.authorization;
    try {
        if(token){
            const blacklist = await BlacklistModel.findOne({token});
            if(blacklist){
                res.status(400).send({"msg": "Login again"})
            }else{
                jwt.verify(token, "secret", (err, decoded) => {
                    if(err){
                        res.status(400).send({"msg": "Invalid token"})
                    }else{
                        if(decoded.admin){
                            next();
                        }else{
                            res.status(400).send({"msg": "You are not authorized for this route"})
                        }
                    }
                })
            }
        }else{
            res.status(400).send({"msg": "No token found"})
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

module.exports = {
    adminCheck
}