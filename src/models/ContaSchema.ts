import { model, Schema } from "mongoose";
import PixSchema from "./PixSchema";

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
            required: [true, "Digite o CPF"]
        },
        telefone: {
            type: String,
            required: [true, "Digite o TELEFONE"]
        },
        saldo: {
            type: Number,
            default: 0
        },
        chavepix: [PixSchema],

    },
    {
        timestamps: true,
    }
);

export default model("contas", contaSchema);