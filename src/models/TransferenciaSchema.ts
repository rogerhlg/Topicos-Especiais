import  {model, Schema} from "mongoose";

const transferenciaSchema = new Schema(
    {
        valor:{
            type: Number,
            required: [true,"O valor para a transferência é obrigatório!"],
            min: [1, "valor mínimo de R$1,00"]
        },
        chavepix: {
            type: String,
            required: [true, "A chavepix é obrigatória!"]
        },
        pixDestino: {
            type: String,
            required: [true, "A chavepix de destino é obrigatória!"]
        }
    },
    {
        timestamps:true,
    }
);

export default model("transferência", transferenciaSchema); //apenas quando exportamos um schema essa sintaxe