import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import CashForm from "../components/CashForm";
import CashList from "../components/CashList";
import { request } from "../network-client";
import { getJwtTokenCookie } from "../utils/utils";

export default function Income() {
    const [incomes, setIncomes] = useState([]);
    const [version, setVersion] = useState(0);

    const navigate = useNavigate();

    useEffect(()=>{
        if(!getJwtTokenCookie()){
            navigate("/")
        }

        request("get", "/income/get").then((resp)=>{
            setIncomes(resp.data);
        });
    }, [version]);

    const addIncome = (amount, comment)=>{
        request("post", "income/add", undefined, {
            date: "2022-10-09T13:50:00.000Z",
            amount: amount,
            comment: comment
        }).then(()=>{
            setVersion(version + 1);
        });
    }

    const removeIncome = (id) =>{
        request ("delete", `income/delete/${id}`).then(()=>{
            setVersion(version + 1);
        })
    }

    return <>
        <div className="container">
            <h1 className="text-center my-2">Приходи</h1>
            <CashForm addValue={addIncome}/>
            <CashList values={incomes} removeValue={removeIncome}/>
        </div>
    </>
}
