import  {model, Schema} from "mongoose";
import { depositoSchema } from "./DepositoSchema";
import { saqueSchema } from "./SaqueSchema";
import { transferenciaSchema } from "./TransferenciaSchema";


const extratoSchema = new Schema(
    {
        saques: [saqueSchema],
        depósitos: [depositoSchema],
        transferências: [transferenciaSchema]
    },
    {
        timestamps:true,
    }
);

export default model("extratos", extratoSchema);