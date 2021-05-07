import  {model, Schema} from "mongoose";
import PixSchema from "./PixSchema";

const transferenciaSchema = new Schema(
    {
        valor:{
            type: Number,
            required: [true,"O valor para a transferência é obrigatório!"],
            min: [1, "valor mínimo de R$1,00"]
        },
        chavepix: [PixSchema],

    },
    {
        timestamps:true,
    }
);

export { transferenciaSchema };
//export default model("transferência",transferenciaSchema); //apenas quando exportamos um schema essa sintaxe