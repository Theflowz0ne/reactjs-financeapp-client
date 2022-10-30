export default function CashForm(props){
return <>
<div className="container my-3">
    <div className="row mt-3">
        <div className="col">
            <input type="text" className="form-control" placeholder="Сума"/>
        </div>
        <div className="col">
            <input type="text" className="form-control" placeholder="Причина"/>
        </div>
    </div>
    <div className="row mt-3">
        <div className="col">
            <input type="date" className="form-control" placeholder="Дата"/>
        </div>
        <div className="col">
            <button type="button" className="btn btn-primary form-control">Добави</button>
        </div>
    </div>
</div>
</>;
}