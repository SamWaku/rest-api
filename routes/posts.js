const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

//gets back all the posts
router.get('/', async (req,res) =>{
    try {
        const posts = await Post.find();
        res.json(posts);
    } catch(err){
        res.json({message:err});
    }
});

//submits a post
router.post('/', async (req,res)=>{
    const post = new Post({
        username: req.body.username,
        password: req.body.password
    });

// saving to database
   try {
   const savedPost = await post.save();
   res.json(savedPost);
   } catch (err) {
       res.json({message:err});
   }
});

//specific post
router.get('/:postId', async (req,res) =>{
    try{
    const post = await Post.findById(req.params.postId);
    res.json(post);
    }catch(err){
        res.json({message:err});
    }
});

//Delete post
router.delete('/:postId', async (req,res) =>{
    try{
         const removedPost = await Post.remove({_id: req.params.postId});
         res.json(removedPost);
    }catch(err){
        res.json({message:err});
    }
});
module.exports = router;
