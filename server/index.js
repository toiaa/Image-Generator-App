import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongodb/connect.js';
import postRoutes from './routes/postRoutes.js';
import dalleRoutes from './routes/dalleRoutes.js';


const app = express();
// iniciamos nuestra app express
// agregamos middlewares:
app.use(cors());
app.use(express.json({ limit: '50mb' }));
// creamos endpoints de la api que podemos usar en el front para connectar aca
app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.get('/', async (req, res) => { // 1 route
    res.send('hi dall-e')
})

const startServer = async () => {
    try {
        connectDB(process.env.MONGO_URL); // conexion con mongodb atlas cluster con url especificada en .env
        app.listen(process.env.PORT, () => {
            console.log(`Server running on port ${process.env.PORT}`);
        });
    } catch (error) {
        console.log(`Error connecting to database: ${error} `);
    }
}
startServer();