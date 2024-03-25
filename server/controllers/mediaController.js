const { MediaModel } = require("../models/mediaModel");

const getAllMedia = async (req, res) => {
    const filter = req.body;
    try {
        const media = await MediaModel.find({filter});
        res.status(200).send({"media": media});
    } catch (error) {
        res.status(400).send({"err": error})
    }
} 

const getMedia = async (req, res) => {
    const {id} = req.params;
    try {
        const media = await MediaModel.findOne({_id: id});
        if(media){
            res.status(200).send({"media": media});
        }else{
            res.status(200).send({"msg": "No media found"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
} 

const createMedia = async (req, res) => {
    const {title, type, file } = req.body;
    try {
        const media = new MediaModel({title, file, type});
        await media.save();
        res.status(201).send({"media": media, success: true});
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

const updateMedia = async (req, res) => {
    const {id} = req.params;
    try {
        const media = await MediaModel.findByIdAndUpdate({_id: id}, req.body);
        if(media){
            res.status(200).send({"msg": "Media has been updated", success: true});
        }else{
            res.status(200).send({"msg": "No media found"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

const deleteMedia = async (req, res) => {
    const {id} = req.params;
    try {
        const media = await MediaModel.findByIdAndDelete({_id: id});
        if(media){
            res.status(200).send({"msg": "Media has been deleted", success: true});
        }else{
            res.status(200).send({"msg": "No media found"});
        }
    } catch (error) {
        res.status(400).send({"err": error})
    }
}

module.exports = {
    getAllMedia,
    getMedia,
    createMedia,
    updateMedia,
    deleteMedia
}