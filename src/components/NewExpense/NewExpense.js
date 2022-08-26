import React, { useState } from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";
//probs to pass function from App
const NewExpense = (probs) => {
  const [editMode, setEditMode] = useState(false);

  const formSubmitHandler = (expenseData) => {
    //get new Data từ ExpenseForm
    const newExpenseData = {
      id: Math.random().toString(),
      ...expenseData,
    };
    probs.onNewExpense(newExpenseData);
    setEditMode(false);
  };

  const btnClickHandler = () => {
    setEditMode(true);
  };
  return (
    <div className="new-expense">
      <p>G & S Company</p>
      {editMode === false && (
        <button onClick={btnClickHandler}>Add new expense</button>
      )}
      {editMode === true && <ExpenseForm onFormSubmit={formSubmitHandler} />}
    </div>
  );
};

export default NewExpense;
