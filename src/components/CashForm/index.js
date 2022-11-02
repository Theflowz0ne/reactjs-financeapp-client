import { request } from "../../network-client";
import { useState } from "react";

export default function CashForm(props){
    const [amount, setAmount] = useState([]);
    const [comment, setComment] = useState([]);

    const addValues = ()=>{
        request("post", "income/add", undefined, {
            date: "2022-10-09T13:50:00.000Z",
            amount: amount,
            comment: comment
        });
    }
return <>
<div className="container my-3">
    <div className="row mt-3">
        <div className="col">
            <input type="text" className="form-control" placeholder="Сума" onChange={(e)=>{
                setAmount(e.target.value);
            }}/>
        </div>
        <div className="col">
            <input type="text" className="form-control" placeholder="Причина" onChange={(e)=>{
                setComment(e.target.value);
            }}/>
        </div>
    </div>
    <div className="row mt-3">
        <div className="col">
            <input type="date" className="form-control" placeholder="Дата"/>
        </div>
        <div className="col">
            <button type="button" className="btn btn-primary form-control" onClick={addValues}>Добави</button>
        </div>
    </div>
</div>
</>;
}