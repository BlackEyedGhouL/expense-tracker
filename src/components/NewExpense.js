import { useState } from "react";

import "../assets/NewExpense.css";

const NewExpense = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    const { value } = event.target;

    if (value.match(/\./g)) {
      const [, decimal] = value.split(".");

      if (decimal?.length > 2) {
        return;
      }
    }
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHander = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSubmitExpense(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHander}>
      <div>
        <input
          onChange={titleChangeHandler}
          className="new-expense__control"
          type="text"
          placeholder="Title"
          value={enteredTitle}
          required
        />
      </div>
      <div>
        <input
          onChange={amountChangeHandler}
          className="new-expense__control"
          type="number"
          placeholder="Amount"
          min="0.01"
          step="0.01"
          value={enteredAmount}
          required
        />
      </div>
      <div>
        <input
          onChange={dateChangeHandler}
          className="new-expense__control"
          type="date"
          placeholder="Date"
          min="2022-01-01"
          max="2022-12-31"
          value={enteredDate}
          required
        />
      </div>
      <button className="new-expense__actions" type="submit">
        Add Expense
      </button>
    </form>
  );
};

export default NewExpense;
