import "./Calendar.css";
function Calendar(probs) {
  const month = probs.date.toLocaleString("en-US", { month: "long" });
  const day = probs.date.toLocaleString("en-US", { day: "2-digit" });
  const year = probs.date.getFullYear();
  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__day">{day}</div>
      <div className="expense-date__year">{year}</div>
    </div>
  );
}
export default Calendar;
