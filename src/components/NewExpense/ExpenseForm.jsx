import React, { useState } from "react";
import "./ExpenseForm.css";
const ExpenseForm = ({ onSaveExpenseData }) => {
  const [title, setTitle] = useState("");
  const [date, setTDate] = useState("");
  const [amount, setAmount] = useState("");
  const [showForm, setShowForm] = useState(false);
  //   const [expense, setExpense] = useState([]);

  const handleTitle = (e) => {
    // setTitle(e.event.target.value);
    // console.log(e.target.value);
    setTitle(e.target.value);
  };

  const handleDate = (e) => {
    // setTDate(e.target);
    // console.log(typeof e.target.value);
    setTDate(e.target.value);
  };
  const handleAmount = (e) => {
    // setAmount(e.target.value);
    // console.log(e.target.value);
    setAmount(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      title: title,
      date: new Date(date),
      amount: +amount,
    };
    if (!title && !date && !amount) {
      alert(`you cannot submit an empty form`);
      // setShowForm(true);
    } else {
      onSaveExpenseData(data);
    }

    // console.log(typeof +amount);

    // console.log(data);
    // setExpense((prevData) => [...prevData, data]);
    // console.log(data);
    setTitle("");
    setAmount("");
    setTDate("");
    // setTitle("");
    setShowForm(false);
  };

  //   console.log(expense);
  const handleButton = () => {
    // console.log("clicked");
    setShowForm(true);
  };
  const handleCancel = (event) => {
    event.preventDefault();
    setShowForm(false);
  };

  return (
    <div>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <div className="new-expense__controls">
            <div className="new-expense__control">
              <label htmlFor="title">Title</label>
              <input type="text" onChange={handleTitle} value={title} />
            </div>
            <div className="new-expense__control">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                min="0.01"
                step="0.01"
                onChange={handleAmount}
                value={amount}
              />
            </div>
            <div className="new-expense__control">
              <label htmlFor="date">Date</label>
              <input
                type="date"
                min="2019-01-01"
                max="2030-12-31"
                value={date}
                onChange={handleDate}
              />
            </div>
          </div>
          <div className="new-expense__actions">
            <button type="submit" onClick={handleCancel}>
              Cancel
            </button>
            <button type="submit">Add Expense</button>
          </div>
        </form>
      ) : (
        <button type="button" onClick={handleButton}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default ExpenseForm;
