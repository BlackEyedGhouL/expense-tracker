import "../assets/NoTransactions.css";
import NoData from "../assets/images/empty.svg";

const NoTransactions = () => {
  return (
    <div className="no-transations-container">
      <img
        className="no-transations-image"
        src={NoData}
        alt="No recent transactions!"
      />
    </div>
  );
};

export default NoTransactions;
