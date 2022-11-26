import express from 'express'
import mongoose from 'mongoose';
import router from './routes';
import CarController from './controllers/CarController'

const app = express();

app.use(express.json());
app.use(router)

mongoose.connect('mongodb+srv://miguelvgd:Cation-7@cluster0.rpan11b.mongodb.net/?retryWrites=true&w=majority')

.then((data) => {
    console.log("Sucesso na conexão com o MongoDB")
})

.catch((error) => {
    console.log("Falha ao conectar com MongoDB: ", error.message)
})

app.get('/', (req, res) => {
    return res.send([CarController.index])
})

app.listen(8181)



