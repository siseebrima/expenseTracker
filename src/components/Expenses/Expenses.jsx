import React, { useState } from "react";
import Card from "../UI/Card";
// import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

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
        <ExpensesChart expenses={lst} />
        <ExpensesList yearChosen={yearChosen} expenses={expenses} lst={lst} />
      </Card>
    </div>
  );
};

export default Expenses;
