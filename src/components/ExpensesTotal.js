import classes from "./ExpensesTotal.module.css";

const ExpenseTotal = (props) => {
  return (
    <div className={classes.expensestotal}>
      <h3>Total expense:</h3>
      <h2>${props.total}</h2>
    </div>
  );
};

export default ExpenseTotal;
