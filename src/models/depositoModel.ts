import  {model, Schema} from "mongoose";

const depositoSchema = new Schema(
    {
        valor:{
            type: Number,
            required: [true,"É obrigatório!"],
        },
        conta: {
            type: Boolean,
            required:[true,"A conta alvo para o depósito é obrigatória!"],
        },

    },
    {
        timestamps:true,
    }
);

export default model("deposito",depositoSchema); //apenas quando exportamos um schema essa sintaxe