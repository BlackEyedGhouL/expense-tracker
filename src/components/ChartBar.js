import "../assets/ChartBar.css";

const ChartBar = (props) => {
  let fillHeight = "0%";

  if (props.maxValue > 0) {
    fillHeight = Math.round((props.value / props.maxValue) * 100) + "%";
  }

  return (
    <div className="chart-bar">
      <div className="chart-bar-inner">
        <div className="chart-bar-fill" style={{ height: fillHeight }}></div>
      </div>
      <h2 className="chart-bar-lable">{props.lable}</h2>
    </div>
  );
};

export default ChartBar;
