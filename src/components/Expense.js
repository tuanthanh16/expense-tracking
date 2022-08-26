import React, { useState } from "react";
import Card from "./Card";
import "./Expense.css";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
import ExpensesChart from "./ExpensesChart";
import ExpenseTotal from "./ExpensesTotal";

// Expense hiển thị 2 Components là Expense Filter và Expense Items
// Expense nhận data từ props.items
// có 1 State là filteredYear => sử dụng State này để filter props.items

const Expense = (props) => {
  const [filteredYear, setFilterYear] = useState("2022");
  // function changeFilterHandler sẽ update State
  // React sẽ render Components có sử dụng biến filteredYear
  // => sẽ update lại filteredItems
  const changeFilterHandler = (selectedYear) => {
    setFilterYear(selectedYear);
  };
  const filteredItems = props.items.filter((expense) => {
    if (filteredYear === "All") {
      return props.items;
    } else {
      return expense.date.getFullYear().toString() === filteredYear;
    }
  });
  let totalAmout = 0;
  if (filteredItems.length > 0) {
    for (const item of filteredItems) {
      totalAmout += item.amount;
    }
  }
  let expenseContent = <p>No Expenses found</p>;
  if (filteredItems.length > 0) {
    expenseContent = filteredItems.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ));
  }
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filteredYear}
        onChangeFilter={changeFilterHandler}
      />
      <ExpensesChart dataPoints={filteredItems} />
      {expenseContent}
      <ExpenseTotal total={totalAmout.toFixed(2)} />
    </Card>
  );
};

export default Expense;
