import ExpenseItem from "./ExpenseItem";

const Transactions = (props) => {
  return (
    <div>
      {props.items.map((expense) => (
        <ExpenseItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default Transactions;
