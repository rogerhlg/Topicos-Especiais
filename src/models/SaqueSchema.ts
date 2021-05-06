import  {model, Schema} from "mongoose";

const saqueSchema = new Schema(
    {
        valor:{
            type: Number,
            required: [true,"O valor para o saque é obrigatório!"],
        },

    },
    {
        timestamps:true,
    }
);

export default model("saque",saqueSchema); //apenas quando exportamos um schema essa sintaxe