import { model } from "mongoose";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pixSchema = Schema(
    {   
        chave: {
            type: String,
            required: [true, "O campo CHAVE do PIX é obrigatório!"]
        }
    },
    {
        timestamps: true,
    }
);

export default model("pix", pixSchema);