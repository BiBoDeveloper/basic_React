import { useState } from "react";
import { useEffect } from "react";
import "./FormComponent.css";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';


const FormComponent = (props) => {

    const [title, setTitle] = useState('');
    const [amount, setAmount] = useState(0);
    const [formValid, setFromValid] = useState(false);

    const inputTitle = (event) => {
        setTitle(event.target.value);
    }

    const inputAmount = (event) => {
        setAmount(event.target.value);
    }

    const saveItem = (event) => {
        event.preventDefault();
        const itemData = {
            id: uuidv4(),
            title:title,
            amount:Number(amount)
        }

        setTitle('');
        setAmount(0);
        props.onAddItem(itemData);
        alert('sucessfully saved');
    }

    useEffect(() => {
        const checkData = title.trim().length > 0 && amount !== 0
        setFromValid(checkData);
    },[title,amount]);

    return (
        <div>
            <form onSubmit={saveItem}>
                <div className="form-control">
                    <label>List Name : </label>
                    <input type="text" placeholder="list name" onChange={inputTitle} value={title} />
                </div>
                <div className="form-control">
                    <label>Amount : </label>
                    <input type="number" placeholder="(+ Icome , - Expense)" onChange={inputAmount} value={amount} />
                </div>
                <div>
                  <button className="btn" type="submit" disabled={!formValid} >Add</button>
                </div>
            </form>
        </div>
    )
}

FormComponent.propTypes = {
    onAddItem : PropTypes.func
}

export default FormComponent