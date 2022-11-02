import { useEffect, useState } from "react";
import CashForm from "../components/CashForm";
import CashList from "../components/CashList";
import { request } from "../network-client";

export default function Income() {
    const [incomes, setIncomes] = useState([]);

    useEffect(()=>{
        request("get", "/income/get").then((resp)=>{
            setIncomes(resp.data);
        });
    }, []);

    return <>
        <div className="container">
            <h1 className="text-center my-2">Приходи</h1>
            <CashForm/>
            <CashList values={incomes}/>
        </div>
    </>
}
