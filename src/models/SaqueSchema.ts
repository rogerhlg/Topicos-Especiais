import  {model, Schema} from "mongoose";

const saqueSchema = new Schema(
    {
        valor:{
            type: Number,
            required: [true,"O valor para o saque é obrigatório!"],
            min: [1, "valor mínimo de R$1,00"]
        },
        chavepix: {
            type: String,
            required: [true, "A chavepix é obrigatória!"]
        }
    },
    {
        timestamps:true,
    }
);

//export { saqueSchema };
export default model("saque",saqueSchema); //apenas quando exportamos um schema essa sintaxe