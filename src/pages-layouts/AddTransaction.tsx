import { FC, useState } from "react";
import { useDispatch } from "react-redux";

import { AmountInput, DatePickerInput, DropDownInput, RegularInput } from "../elements-components/input.tsx"
import "../styling/AddTransaction.scss";
import { TLI } from "../database.type.tsx";

interface ANI {
    AN: Function;
}
export const AddTransaction: FC<ANI> = (props) => {

    const
        { AN } = props,
        [data, setData] = useState<TLI>({
            Date: null,
            Amount: "",
            Type: "" as "Dept" | "Income" | "Expense" | "Saving",
            Description: "",
        }),
        dispatch = useDispatch();
    const saveTransaction = () => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                Date: data.Date,
                Amount: data.Amount,
                Type: data.Type,
                Description: data.Description,
            }
        });
        console.dir(data)
    };


    return <>
        <div className="AddTransaction">
            <div className="lableBar">
                <span className="lable">New Transaction</span>
            </div>
            <div className="inputsWraper">


                <DatePickerInput placeholder=""
                    valueSet={(value: any) => setData({ ...data, Date: value })} />
                <AmountInput placeholder="Set Amount"
                    valueSet={(value: any) => setData({ ...data, Amount: value })} />
                <DropDownInput placeholder="Use Type" dropList={["Income", "Exepense", "Saving", "Dept"]}
                    valueSet={(value: any) => setData({ ...data, Type: value })} />
                <RegularInput placeholder="description"
                    valueSet={(value: any) => setData({ ...data, Description: value.value })} />

            </div>

            <div className="lableBar">
                <div className="wraper">
                    <button className="lessPriortyBtn" onClick={() => AN(false)}>Cancel</button>
                    <button className="saveBtn" onClick={() => { saveTransaction(); AN(false) }}>Save</button>
                </div>
            </div>
        </div >
    </>
}

