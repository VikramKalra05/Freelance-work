const express = require("express");
const { register, login, logout, deleteUser, changePassword, getAllUsers, verifyUser } = require("../controllers/userController");
const { auth } = require("../middleware/auth.middleware");

const userRouter = express.Router();

userRouter.get("/", getAllUsers);
userRouter.post("/register", register);
userRouter.post("/login", login);
userRouter.get("/logout", auth, logout);
userRouter.patch("/change-password", auth, changePassword);
userRouter.delete("/delete", auth, deleteUser);
userRouter.get("/:id/verify/:token", verifyUser);

module.exports = {
    userRouter
}