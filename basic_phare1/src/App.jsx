import { useReducer, useState } from "react";
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

  setReportIncome(income)
  setReportExpense(expense)
},[items, reportExpense, reportIncome])

//reducer state
const [showReport, setShowReport] = useState(false);
const reducer = (state, action)=> {
      switch(action.type) {
        case "SHOW" :
          return setShowReport(true)
        case "HIDE" : 
          return setShowReport(false)
      }
}
const [result, dispatch] = useReducer(reducer, showReport)
  return (
    <DataContext.Provider value={
        {
          income : reportIncome,
          expense : reportExpense
        }
      }>
        <div className="container">
            <h1 style={design}>Expense-Income Management Program</h1>
            {showReport && <ReportComponent />}
            <FormComponent onAddItem = {onAddNewItem} />
            <Transection items = {items} />

        <h1>{result}</h1>
        <button onClick={()=>dispatch({type:"SHOW", payload: 10})}>Show</button>
        <button onClick={()=>dispatch({type:"HIDE", payload: 5})}>Hide</button>
      </div>
    </DataContext.Provider>

  )
}

export default App
