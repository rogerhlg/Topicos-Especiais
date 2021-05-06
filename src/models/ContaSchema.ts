import { model, Schema } from "mongoose";
import { pixSchema } from "./PixSchema";

const ContaSchema = new Schema(
    {
        primeiroNome: {
            type: String,
            required: [true, "Digite o primeiro NOME"]
        },
        sobreNome: {
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
        chavepix: [pixSchema],

    },
    {
        timestamps: true,
    }
);

export default model("contas", ContaSchema);