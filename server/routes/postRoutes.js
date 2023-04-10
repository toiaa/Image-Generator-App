import express from 'express';
import * as dotenv from 'dotenv';
import { v2 as cloudinary } from 'cloudinary';
import Post from '../mongodb/models/post.js';



dotenv.config()
const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

/* // Configuration 
cloudinary.config({
    cloud_name: "ddzj4noji",
    api_key: "642433337833965",
    api_secret: "GnTCc7DdDFFIfEm_sgWdFyIrubw"
}); */

//GET ALL POSTS
router.route('/').get(async (req, res) => {
    try {
        const posts = await Post.find({});
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message })
    }
});
//CREATE POST
router.route('/').post(async (req, res) => {
    try {
        const { name, prompt, photo } = req.body; // aca recibo los datos del front
        const photoUrl = await cloudinary.uploader.upload(photo); // aca subo la foto a cloudinary store nos retorna la url
        const newPost = await Post.create({
            name,
            prompt,
            photo: photoUrl.secure_url
        }) //aca creo el post en la base de datos mongodb con el schema Post , la url de cloudinary y los datos que me llegaron del front
        res.status(201).json({ success: true, data: newPost }); // aca envio la respuesta al front
    } catch (error) {
        res.status(500).json({ success: false, message: error.message }) // aca si hay un error envio la respuesta al front
    }
});

export default router;
