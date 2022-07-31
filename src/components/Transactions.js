import ExpenseItem from "./ExpenseItem";

const Transactions = (props) => {
  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Transactions;
