import  {model, Schema} from "mongoose";
import {pixSchema} from "./PixSchema";

const transferenciaSchema = new Schema(
    {
        valor:{
            type: Number,
            required: [true,"O valor para a transferência é obrigatório!"],
            min: [1, "valor mínimo de R$1,00"]
        },
        chavepix: [pixSchema],

    },
    {
        timestamps:true,
    }
);

export { transferenciaSchema };
//export default model("transferência",transferenciaSchema); //apenas quando exportamos um schema essa sintaxe