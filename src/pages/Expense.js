import { useEffect, useState } from "react";
import CashForm from "../components/CashForm";
import CashList from "../components/CashList";
import { request } from "../network-client";

export default function Expense() {
    const [expenses, setExpenses] = useState([]);
    const [version, setVersion] = useState(0);

    useEffect(()=>{
        request("get", "/expense/get").then((resp)=>{
            setExpenses(resp.data);
        });
    }, [version]);

    const addExpense = (amount, comment) => {
        request("post", "expense/add", undefined, {
            date: "2022-10-09T13:50:00.000Z",
            amount: amount,
            comment: comment
        }).then(()=>{
            setVersion(version + 1);
        })
    }

    return <>
        <div className="container">
            <h1 className="text-center my-2">Разходи</h1>
            <CashForm addValue={addExpense}/>
            <CashList values={expenses}/>
        </div>
    </>
}