import { useState } from "react";
import Card from "../UI/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";
import "./Expenses.css";

function Expenses(props) {
  const [pickedDate, setPickedDate] = useState("2020");
  const dateChoice = (selectedDate) => {
    setPickedDate(selectedDate);
  };
  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === pickedDate;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter selected={pickedDate} onPickedDate={dateChoice} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpensesList items={filteredExpenses} />
      </Card>
    </div>
  );
}

export default Expenses;
