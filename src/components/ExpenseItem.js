import '../assests/ExpenseItem.css';

const ExpenseItem = () => {
  return (
    <div className="expense-item">
      <div>
        <h2 className="expense-item-name">Toilet papers</h2>
        <h2 className="expense-item-date">19 May 2022</h2>
      </div>
      <div className="expense-item-right">
        <h2>$12</h2>
      </div>
    </div>
  );
}

export default ExpenseItem;
