import { useContext } from "react"
import DataContext from "../data/DataContext"
import "./ReportComponent.css"

const ReportComponent = () => {
    const { income, expense } = useContext(DataContext)
    return (
        <>
            <h4>Balance (₭)</h4>
            <h1>{income - expense}</h1>
            <div className="report-container">
                <div>
                    <h4>Total of Income</h4>
                    <p className="report plus">₭{income}</p>
                </div>
                <div>
                    <h4>Total of Expense</h4>
                    <p className="report minus">₭{expense}</p>
                </div>
            </div>
        </>
    )
}

export default ReportComponent