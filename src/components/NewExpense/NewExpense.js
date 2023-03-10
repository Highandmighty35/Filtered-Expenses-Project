import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

function NewExpense(props) {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
    setIsEditing(false);
  };

  const formEditHandler = () => {
    setIsEditing(true);
  };
  const cancelEditHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {!isEditing && <button onClick={formEditHandler}>Add New Expense</button>}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onCancel={cancelEditHandler}
        />
      )}
    </div>
  );
}

export default NewExpense;
