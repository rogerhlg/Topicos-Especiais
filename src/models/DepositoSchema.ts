import  { model, Schema } from "mongoose";
import { pixSchema } from "./PixSchema";

const depositoSchema = new Schema(
    {
        valor:{
            type: Number,
            required: [true,"É obrigatório!"],
            min: [1, "valor mínimo de R$1,00"]
        },
        chavepix: [pixSchema],

    },
    {
        timestamps:true,
    }
);

export { depositoSchema };
//export default model("deposito",depositoSchema); //apenas quando exportamos um schema essa sintaxe