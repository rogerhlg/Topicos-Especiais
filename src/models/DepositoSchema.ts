import  {model, Schema} from "mongoose";

const depositoSchema = new Schema(
    {
        valor:{
            type: Number,
            required: [true,"É obrigatório!"],
            min: [1, "Valor mínimo de R$ 1,00"],
        },
        conta: {
            type: Boolean,
            required:[true,"A conta alvo para o depósito é obrigatória!"],
        },
        status:{
            type: String,
            enum: ["EFETUADO","AGENDADO","PENDENTE"],
            uppercase: true
          }

    },
    {
        timestamps:true,
    }
);

export default model("deposito",depositoSchema); //apenas quando exportamos um schema essa sintaxe