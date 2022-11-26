import { Schema } from 'mongoose';
import mongoose from 'mongoose';

const CarModel = new Schema({
    marca: String,
    modelo: String,
    versao: String,
    ano: Number,
    quilometragem: Number,
    cambioAutomatico: Boolean,
    precoVenda: Number
},
{
timestamps:true,
})

export default mongoose.model('Car', CarModel);

