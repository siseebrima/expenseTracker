import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItem";
const ExpensesList = ({ yearChosen, expenses, lst }) => {
  return (
    <div>
      <ul className="expenses-list">
        {yearChosen && lst.length === 0 && (
          <h2 className="expenses-list__fallback">No expenses found</h2>
        )}
        {!yearChosen
          ? expenses.map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  amount={expense.amount}
                  date={expense.date}
                  title={expense.title}
                />
              );
            })
          : lst.map((expense) => {
              return (
                <ExpenseItem
                  key={expense.id}
                  amount={expense.amount}
                  date={expense.date}
                  title={expense.title}
                />
              );
            })}
      </ul>
    </div>
  );
};

export default ExpensesList;
