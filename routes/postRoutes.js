const express = require("express");
const mongoose = require("mongoose");

const PostMessages = require("../model/post");

const router = express.Router();

router.get('/getPosts', async(req, res) => {
    try {
        const postMessage = await PostMessages.find();

        res.status(200).json(postMessage);
    } catch (error) {
        res.status(400).json({message : error.message});
    }
});

router.post('/post', async(req, res) => {
    const {title, creater, tags, message, selectedFile} = req.body;

    const newPostMessage = new PostMessages({title, creater, tags, message, selectedFile});
    try {
        await newPostMessage.save();
        
        res.status(201).json(newPostMessage);
    } catch (error) {
        res.status(409).json({message : error.message});
    }
});

router.patch('/update/:id', async(req, res) => {
    const {id} = req.params;
    const {title, creater, tags, message, selectedFile} = req.body;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No post with that ${id}`);
        }

        const updatedPost = {title, creater, tags, message, selectedFile, _id : id};

        await PostMessages.findByIdAndUpdate(id, updatedPost, {new : true});

        res.json(updatedPost);
    } catch (error) {
        console.log(error);
    }
});

router.delete('/delete/:id', async(req, res) => {
    const {id} = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No post with that ${id}`);
        }

        await PostMessages.findByIdAndRemove(id);

        res.json({message : 'Post deleted successfully.'});
    } catch (error) {
        console.log(error);
    }
});

router.patch('/like/:id', async(req, res) => {
    const {id} = req.params;

    try {
        if(!mongoose.Types.ObjectId.isValid(id)) {
            return res.status(404).send(`No post with that ${id}`);
        }

        const Post = await PostMessages.findById(id);

        const updatedPost = await PostMessages.findByIdAndUpdate(id, {likeCount : Post.likeCount + 1}, {new : true});

        res.json(updatedPost);
    } catch (error) {
        console.log(error);
    }
});

module.exports = router;
