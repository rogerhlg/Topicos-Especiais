import * as mongoose from "mongoose";

const Schema: any = mongoose.Schema;

export const ContaSchema: any = new Schema({
    primeiroNome: {
        type: String,
        required: "Digite o primeiro NOME"
    },
    sobreNome: {
        type: String,
        required: "Digite o SOBRENOME"
    },
    CPF: {
        type: String,
        required: "Digite o CPF"
    },
    telefone: {
        type: String,
        required: "Digite o TELEFONE"
    }
});