import CashForm from "../components/CashForm";
import CashList from "../components/CashList";

export default function Expense() {
    return <>
        <div className="container">
            <h1 className="text-center my-2">Разходи</h1>
            <CashForm/>
            <CashList/>
        </div>
    </>
}