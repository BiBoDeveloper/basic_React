import { useContext } from "react"
import DataContext from "../data/DataContext"

const ReportComponent = () => {
    const { income, expense } = useContext(DataContext)
    return (
        <>
            <p>Income : {income}</p>
            <p>Expense : {expense}</p>
        </>
    )
}

export default ReportComponent