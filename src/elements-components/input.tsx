import React, { FC, useState, useRef } from "react";
import "../styling/inputs.scss"

interface input {
    placeholder?: string | "";
    dropList?: Array<string> | [];
    amount?: string;
    valueSet?: (value: any) => {} | void;
};
export const
    RegularInput: FC<input> = (props) => {
        return <div className="regularInput">
            <input placeholder={props.placeholder}
                onKeyUp={E => {
                    props.valueSet ? props.valueSet(E.target) : null;
                }} />

        </div>
    }, DropDownInput: FC<input> = (props) => {

        const
            DDInput = useRef<any>(),
            [DDI, sDDI] = useState({
                select: "Income",
                inputValue: "Income",
                value: "Income",
                menu: {
                    isOn: false,
                    list: ["Income", "Exepense", "Saving", "Dept"]
                },
                dropDown: React.createRef<HTMLDivElement>()
            });

        return <div className="dropDownInput">

            <input
                ref={DDInput} type="text" placeholder={props.placeholder}
                onFocus={() => sDDI({ ...DDI, menu: { ...DDI.menu, isOn: true } })}
                onBlur={() => { }}
                onKeyUp={event => sDDI({
                    ...DDI, inputValue: (event.target as HTMLInputElement).value
                })} />

            {DDI.menu.isOn ?
                <div className="dropDown">

                    {props.dropList?.filter(key => {
                        return key.toLocaleLowerCase().includes(DDInput.current.value?.toLowerCase());
                    }).map(type =>

                        <span
                            key={type} aria-selected={(DDI.select === type)}
                            onClick={() => {
                                DDInput.current.value = type;
                                sDDI({ ...DDI, select: type, menu: { ...DDI.menu, isOn: false } })
                                props.valueSet ? props.valueSet(DDInput.current.value) : null;
                            }}>
                            {type}
                        </span>

                    )}

                </div>
                : null}

        </div>;
    }, AmountInput: FC<input> = (props) => {

        const amountInput = useRef<any>();

        return <div className="amountInput">
            <input ref={amountInput} type="text" placeholder={props.placeholder}
                onKeyDown={(event) => {
                    const stringy = amountInput.current.value.replace(',', '').replace('.', '').toString();
                    if ((stringy.length) <= 6) {
                        if (
                            event.code.includes('Digit') ||
                            event.code === 'Backspace' ||
                            event.code === 'Comma' ||
                            event.code === 'Tab' ||
                            event.code === 'ArrowRight' ||
                            event.code === 'ArrowLeft' ||
                            event.code === 'Period'
                        ) { } else {
                            event.preventDefault()
                        }
                    } else {
                        event.preventDefault();
                        amountInput.current.value = stringy.slice(0, -1);
                    }
                }}
                onKeyUp={() => {
                    const nid = amountInput.current.value.replace(',', '').replace('.', '');
                    const amount: number = Number(nid);
                    !(nid === "NaN") ? amountInput.current.value = amount.toLocaleString('en-US') : null;

                    props.valueSet ? props.valueSet(amountInput.current.value) : amount.toLocaleString('en-US');
                    console.log(amount.toLocaleString('en-US'))
                }} />
        </div>
    }, DatePickerInput: FC<input> = (props) => {

        const today = new Date();
        const numberOfDaysToAdd = 3;
        const date = today.setDate(today.getDate() + numberOfDaysToAdd);
        const defaultValue = new Date(date).toISOString().split('T')[0] // yyyy-mm-dd        


        return <div className="datePickerInput">
            <input onBlur={e => props.valueSet ? props.valueSet(e.target.value) : ""} type="date" defaultValue={defaultValue} />
        </div>
    }