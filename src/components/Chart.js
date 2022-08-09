import ChartBar from "./ChartBar";

import "../assets/Chart.css";

const Chart = (props) => {
  const dataPointValues = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maxValue = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.month}
          value={dataPoint.value}
          maxValue={maxValue}
          lable={dataPoint.month}
        />
      ))}
    </div>
  );
};

export default Chart;
