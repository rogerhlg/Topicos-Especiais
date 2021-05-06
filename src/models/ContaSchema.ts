import { model, Schema } from "mongoose";

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
        }
    },
    {
        timestamps: true,
    }
);

export default model("contas", ContaSchema);