import "./ChartBar.css";
// expect props = dataPoint
// receive maxValue from parent and => fillRatio
const ChartBar = (props) => {
  let fillRatio = "0%";
  if (props.maxValue > 0) {
    fillRatio = Math.round((props.value / props.maxValue) * 100) + "%";
  }
  return (
    <div className="chart-bar">
      <div className="chart-bar__inner">
        <div className="chart-bar__fill" style={{ height: fillRatio }}></div>
      </div>
      <div className="chart-bar__label">{props.label}</div>
    </div>
  );
};
export default ChartBar;
