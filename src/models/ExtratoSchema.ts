import  {model, Schema} from "mongoose";
import DepositoSchema from "./DepositoSchema";
import SaqueSchema from "./SaqueSchema";
import { transferenciaSchema } from "./TransferenciaSchema";


const extratoSchema = new Schema(
    {
        saques: [SaqueSchema],
        depósitos: [DepositoSchema],
        transferências: [transferenciaSchema]
    },
    {
        timestamps:true,
    }
);

export default model("extratos", extratoSchema);