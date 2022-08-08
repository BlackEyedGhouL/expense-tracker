const TotalAmount = (props) => {
  const total = props.items.reduce(
    (totalAmount, expense) => totalAmount + expense.amount,
    0
  );

  return <h2 className="total-value">${total.toFixed(2)}</h2>;
};

export default TotalAmount;
