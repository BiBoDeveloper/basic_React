import "./Item.css"
import Item from "./Item"
import { v4 as uuidv4 } from 'uuid';

const Transection = () => {
    const data = [
        { amount : 200000},
        {title:"Breakfast", amount : 500000},
        {title:"Salary", amount : 1200000},
        {title:"Drinking", amount : 120000},
        {title:"Motobike", amount : 90000},
    ]
    return (
      <>
        <ul className="item-list">
          {data.map((element) => {
            return <Item title = {element.title} amount = {element.amount} key = {uuidv4()}/>
          })}
          
        </ul>
      </>
    )
  }

  export default Transection