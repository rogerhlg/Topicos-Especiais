import  {model, Schema} from "mongoose";
import DepositoSchema from "./DepositoSchema";
import SaqueSchema from "./SaqueSchema";
import TransferenciaSchema from "./TransferenciaSchema";


const extratoSchema = new Schema(
    {
        conta:[{ type: Schema.Types.ObjectId, ref: 'contas'}],
        saques: [{ type: Schema.Types.ObjectId, ref: 'saque' }],
        depositos: [{ type: Schema.Types.ObjectId, ref: 'deposito' }],
        transferĂȘncias: [{ type: Schema.Types.ObjectId, ref: 'tranferĂȘncia' }]
    },
    {
        timestamps:true,
    }
);

export default model("extratos", extratoSchema);