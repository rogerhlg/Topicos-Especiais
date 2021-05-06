import { Schema } from "mongoose";

const pixSchema = new Schema(
    {
        tipoChave: {
            type: String,
            enum:  ["CPF","RG","CELULAR"],
            uppercase: true
        },
        chave: {
            type: String,
            required: [true, "O campo CHAVE do pix é obrigatório!"]
        }
    },
    {
        timestamps: true,
    }
);

export { pixSchema };