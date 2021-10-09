import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

const NewExpense = ({ addExpense }) => {
  const handleSaveExpense = (data) => {
    // console.log(data);
    const expenseData = {
      ...data,
      id: Math.random().toString(),
    };
    addExpense(expenseData);
    // console.log(expenseData);
    // console.log(`in new expense component`);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData={handleSaveExpense} />
    </div>
  );
};

export default NewExpense;
