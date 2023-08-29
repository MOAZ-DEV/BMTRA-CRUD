import { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { AmountInput, DatePickerInput, DropDownInput, RegularInput } from "../elements-components/input.tsx"
import "../styling/AddTransaction.scss";

interface ANI {
    AN: Function;
}
export const AddTransaction: FC<ANI> = (props) => {

    const
        { AN } = props,
        [data, setData] = useState({
            date: new Date().toLocaleDateString('fr-FR'),
            amount: "",
            type: "",
            description: ""
        }),
        dispatch = useDispatch();
    const saveTransaction = () => {
        dispatch({
            type: "ADD_TRANSACTION",
            payload: {
                Date: data.date,
                Amount: data.amount,
                Type: data.type,
                Description: data.description,
            }
        });
    };


    return <>
        <div className="AddTransaction">
            <div className="lableBar">
                <span className="lable">New Transaction</span>
            </div>
            <div className="inputsWraper">


                <DatePickerInput placeholder=""
                    valueSet={(value: any) => setData({ ...data, date: value.value })} />
                <AmountInput placeholder="Set Amount"
                    valueSet={(value: any) => setData({ ...data, amount: value.value })} />
                <DropDownInput placeholder="Use Type" dropList={["Income", "Exepense", "Saving", "Dept"]}
                    valueSet={(value: any) => setData({ ...data, type: value.value })} />
                <RegularInput placeholder="description"
                    valueSet={(value: any) => setData({ ...data, description: value.value })} />

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

