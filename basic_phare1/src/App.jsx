import { useState } from "react";
import { useEffect } from "react";
import "./App.css"
import Transection from "./components/Transection";
import FormComponent from "./components/FromComponent";
import DataContext from "./data/DataContext";
import ReportComponent from "./components/ReportComponent";


function App() {
  const design = { color : "red", textAlign : "center", fontSize : "1.5rem", marginBottom :  "20px"}
  const [items, setItems] = useState([]);

const onAddNewItem = (newItem) => {
  setItems((prevItem) => {
    return[newItem, ...prevItem];
  });
}

const [reportIncome, setReportIncome] = useState(0);
const [reportExpense, setReportExpense] = useState(0);

useEffect(() => {
  const amounts = items.map((item) => item.amount);
  const income = amounts.filter(element => element > 0).reduce((total, element) => total+=element,0);
  const expense = (amounts.filter(element => element < 0).reduce((total, element) => total+=element,0)) * -1;
  console.log('Income:: ', income);
  console.log("🚀 ~ useEffect ~ expense:", expense);


  setReportIncome(income)
  setReportExpense(expense)
},[items, reportExpense, reportIncome])

  return (
    <DataContext.Provider value={
      {
        income : reportIncome,
        expense : reportExpense
      }
    }>
      <div className="container">
          <h1 style={design}>Expense-Income Management Program</h1>
          <ReportComponent />
          <FormComponent onAddItem = {onAddNewItem} />
          <Transection items = {items} />
      </div>
    </DataContext.Provider>
  )
}

export default App
