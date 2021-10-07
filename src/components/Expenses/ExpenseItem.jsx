import React, { useState } from "react";
import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";

const ExpenseItem = ({ date, title, amount }) => {
  const [newName, setNewName] = useState(title);
  const handleClick = () => {
    // console.log("I got clicked");
    setNewName("American trip!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />
      <div className="expense-item__description">
        <h2>{newName}</h2>
        <div className="expense-item__price">${amount}</div>
      </div>
      <button onClick={handleClick}>change title</button>
    </Card>
  );
};

export default ExpenseItem;
