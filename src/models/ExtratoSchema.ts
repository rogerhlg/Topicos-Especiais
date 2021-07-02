import  {model, Schema} from "mongoose";
import DepositoSchema from "./DepositoSchema";
import SaqueSchema from "./SaqueSchema";
import TransferenciaSchema from "./TransferenciaSchema";


const extratoSchema = new Schema(
    {
        conta:[{ type: Schema.Types.ObjectId, ref: 'contas'}],
        saques: [{ type: Schema.Types.ObjectId, ref: 'saque' }],
        depositos: [{ type: Schema.Types.ObjectId, ref: 'deposito' }],
        transferências: [{ type: Schema.Types.ObjectId, ref: 'tranferência' }]
    },
    {
        timestamps:true,
    }
);

export default model("extratos", extratoSchema);