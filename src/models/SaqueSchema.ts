import  {model, Schema} from "mongoose";
<<<<<<< HEAD
import PixSchema from "./PixSchema";
=======
import  {pixSchema}  from "./PixSchema";
>>>>>>> 5605ae796f91e1e0425374c8a2a7ea5c57e59ba2

const saqueSchema = new Schema(
    {
        valor:{
            type: Number,
            required: [true,"O valor para o saque é obrigatório!"],
            min: [1, "valor mínimo de R$1,00"]
        },
        chavepix: [PixSchema],

    },
    {
        timestamps:true,
    }
);

//export { saqueSchema };
export default model("saque",saqueSchema); //apenas quando exportamos um schema essa sintaxe