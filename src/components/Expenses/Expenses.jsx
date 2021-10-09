import React, { useState } from "react";
import Card from "../UI/Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = ({ expenses }) => {
  const [yearChosen, setYearChosen] = useState("");

  const selectedYear = (year) => {
    // console.log(year);
    setYearChosen(year);
  };

  const lst = expenses.filter(
    (expense) => Number(yearChosen) === expense.date.getFullYear()
  );

  // console.log(lst);
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter yearSelected={selectedYear} />
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
      </Card>
    </div>
  );
};

export default Expenses;
