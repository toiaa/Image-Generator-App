import express from 'express';
import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';


dotenv.config()
const router = express.Router();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

router.route('/').get((req, res) => {
    res.send("hi dall-e")
})

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;
        const aiResponse = await openai.createImage({
            prompt, // prompt de la imagen, max 1000 caracteres (requerido)
            n: 1, // numero de imagenes a generar
            size: '1024x1024', // tamaño de la imagen
            response_format: 'b64_json' // formato de la respuesta
        })
        const img = aiResponse.data.data[0].b64_json; // imagen en base64
        res.status(200).json({ photo: img }) // enviamos la imagen en base64 al front, codigo 200 (respuesta exitosa)
    } catch (error) {
        console.log(error)
        res.status(500).send(error?.response?.data?.error?.message) // enviamos el error al front con codigo 500 (error en el servidor)
    }
})

export default router;