import { model, Schema } from "mongoose";

const contaSchema = new Schema(
    {
        primeiroNome: {
            type: String,
            required: [true, "Digite o primeiro NOME"]
        },
        sobrenome: {
            type: String,
            required: [true, "Digite o SOBRENOME"]
        },
        CPF: {
            type: String,
            required: [true, "Digite o CPF"],
            unique: true 
        },
        telefone: {
            type: String,
            required: [true, "Digite o TELEFONE"]
        },
        saldo: {
            type: Number,
            default: 0
        },
        PIX: {
            type: String,
            required: [true, "Digite o PIX"]
        }
    },
    {
        timestamps: true,
    }
);

export default model("contas", contaSchema);