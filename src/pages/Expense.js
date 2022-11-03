import { useEffect, useState} from "react";
import CashForm from "../components/CashForm";
import CashList from "../components/CashList";
import { request } from "../network-client";
import { useNavigate } from "react-router-dom";
import { getJwtTokenCookie } from "../utils/utils";

export default function Expense() {
    const [expenses, setExpenses] = useState([]);
    const [version, setVersion] = useState(0);

    const navigate = useNavigate();

    useEffect(()=>{
        if(!getJwtTokenCookie()){
            navigate("/");
        }
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

    const removeExpense = (id) =>{
        request ("delete", `expense/delete/${id}`).then(()=>{
            setVersion(version + 1);
        })
    }

    return <>
        <div className="container">
            <h1 className="text-center my-2">Разходи</h1>
            <CashForm addValue={addExpense}/>
            <CashList values={expenses} removeValue={removeExpense}/>
        </div>
    </>
}