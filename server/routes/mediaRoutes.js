const express = require("express");
const { getAllMedia, getMedia, createMedia, updateMedia, deleteMedia } = require("../controllers/mediaController");
const { adminCheck } = require("../middleware/adminCheck.middleware");

const mediaRouter = express.Router();

mediaRouter.get("/", getAllMedia);
mediaRouter.get("/:id", getMedia);
mediaRouter.post("/create", adminCheck, createMedia);
mediaRouter.patch("/update/:id", adminCheck, updateMedia);
mediaRouter.delete("/delete/:id", adminCheck, deleteMedia);

module.exports = {
    mediaRouter
}