import { model, Schema } from "mongoose";

const pixSchema = new Schema(
    {
        tipoChave: {
            type: String,
            enum:  ["CPF","RG","CELULAR"],
            uppercase: true
        },
        chave: {
            type: String,
            required: [true, "O campo CHAVE do PIX é obrigatório!"]
        }
    },
    {
        timestamps: true,
    }
);

export default model("pixes", pixSchema);