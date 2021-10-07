import React from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

const Expenses = ({ expenses }) => {
  return (
    <Card className="expenses">
      {expenses.map((expense) => {
        return (
          <ExpenseItem
            key={expense.id}
            amount={expense.amount}
            date={expense.date}
            title={expense.title}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
