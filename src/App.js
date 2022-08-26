import React, { useEffect, useState } from "react";
import NewExpense from "./components/NewExpense/NewExpense";
import Expense from "./components/Expense";

const DUMMY = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const url =
  "https://movie-database-4me-default-rtdb.europe-west1.firebasedatabase.app/expenses.json";

function App() {
  const [expenses, setExpenses] = useState(DUMMY);
  // post data
  async function postExpense(data) {
    const response = await fetch(url, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const dataBack = await response.json();
    console.log(dataBack);
  }
  // fetch data from server
  async function fetchExpense() {
    const response = await fetch(url);
    const data = await response.json();

    // convert data
    const loadedExpense = [];
    for (const key in data) {
      loadedExpense.push({
        id: key,
        title: data[key].title,
        amount: data[key].amount,
        date: new Date(data[key].date),
      });
    }

    // const temp = new Date(loadedExpense[0].date);
    // console.log(typeof temp);
    // console.log(temp.toLocaleString("en-US", { month: "long" }));
    console.log(loadedExpense);
    setExpenses(loadedExpense);
  }

  //new function to handle data comming from NewExpense
  const newExpenseHandler = (expenseData) => {
    console.log(expenseData);
    postExpense(expenseData);
    setExpenses((prevExpenses) => {
      return [expenseData, ...prevExpenses];
    });
  };

  useEffect(() => {
    fetchExpense();
  }, []);
  // the map built-in funtion:
  // inside {}, create array of Component i.e ExppenseItem with parameter from item
  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expense items={expenses} />
    </div>
  );
}

export default App;
