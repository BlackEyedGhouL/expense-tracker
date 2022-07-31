import "../assets/ExpenseItem.css";

const ExpenseItem = (props) => {
  return (
    <div className="expense-item">
      <div>
        <h2 className="expense-item-name">{props.title}</h2>
        <h2 className="expense-item-date">{props.date}</h2>
      </div>
      <div className="expense-item-right">
        <h2>${props.amount}</h2>
      </div>
    </div>
  );
};

export default ExpenseItem;
