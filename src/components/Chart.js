import "./Chart.css";
import ChartBar from "./ChartBar";
// expect props = array of data {value, label} pass from ExpensesChart
const Chart = (props) => {
  // maxValue calculated from props.dataPoints
  const arrayValue = props.dataPoints.map((dataPoint) => dataPoint.value);
  const calculatedMaxValue = Math.max(...arrayValue);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          label={dataPoint.label}
          maxValue={calculatedMaxValue}
        />
      ))}
    </div>
  );
};

export default Chart;
