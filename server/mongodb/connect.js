import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true); // opcion que sirve para la funcionalidad de las busquedas
    mongoose.connect(url)
        .then(() => console.log('MongoDB connected')) // conectar a la base de datos
        .catch(err => console.log(err));

}
export default connectDB;