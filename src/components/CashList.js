export default function CashList(props){
    const renderData = () => {
        return props.values.map((value)=>{
            return <tr>
                <td>{value.comment}</td>
                <td>{value.amount}</td>
                <td><button className="btn btn-link" onClick={()=>{props.removeValue(value.id)}}>Delete</button></td>
            </tr>
        });
    }

    return <>
        <div className="container my-3">
            <div className="row">
                <div className="col">
                    <table className="table">
                        <thead>
                            <tr>
                            <th scope="col">Причина</th>
                            <th scope="col">Сума</th>
                            <th scope="col">Действие</th>
                            </tr>
                        </thead>
                        <tbody>
                            {renderData()}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
}