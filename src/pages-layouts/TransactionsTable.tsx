import { FC } from "react";
import { useDispatch } from "react-redux";
import "../styling/TransactionsTable.scss"
interface TTI {
    TL: Array<any>;
    AND: boolean;
    AN: Function;
}
const TransactionsTable: FC<TTI> = (props) => {

    const { AN, AND, TL } = props,
        dispatch = useDispatch();

    return <div className="TransactionsTable" id={AND ? "isAdding" : ""}>

        <div className="lableBar">
            <span className="lable">Transactions</span>

            {AND ? <button
                className="addNewBtn active"
                onClick={() => { AN(true); }}>
                <span>+</span>Add New
            </button> : ""}
        </div>
        <span className="br"></span>
        <div className="tableWrap">
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Type</th>
                        <th>Description</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                    {TL.length> 0 ? TL.map(data => <>
                        <tr>
                            <td id="date">{data.Date || "Unset"}</td>
                            <td id="amount">{`$ ${data.Amount}` || "Unset"}</td>
                            <td id="tag">{data.Type || "Unset"}</td>
                            <td id="description">{data.Description || "Unset"}</td>
                            <td id="edit"><button onClick={() => {
                                dispatch({
                                    type: "DELETE_TRANSACTION",
                                    payload: {
                                        Date: data.Date,
                                        Amount: data.Amount,
                                        Type: data.Type,
                                        Description: data.Description,
                                    }
                                });
                            }}>Delete</button></td>
                        </tr>
                        <span className="br"></span>
                    </>) :
                        <tr>
                            <td id="date">Add your first transaction!</td>

                        </tr>
                    }
                </tbody>
            </table>
        </div>
    </div>;
}
export default TransactionsTable;