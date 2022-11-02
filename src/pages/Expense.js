import { useEffect, useState } from "react";
import CashForm from "../components/CashForm";
import CashList from "../components/CashList";
import { request } from "../network-client";

export default function Expense() {
    const [expenses, setExpenses] = useState([]);

    useEffect(()=>{
        request("get", "/expense/get").then((resp)=>{
            setExpenses(resp.data);
        });
    }, []);

    return <>
        <div className="container">
            <h1 className="text-center my-2">Разходи</h1>
            <CashForm/>
            <CashList values={expenses}/>
        </div>
    </>
}