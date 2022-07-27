import { useState } from "react";

import "../assests/NewExpense.css";

const NewExpense = () => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        title: event.target.value,
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        amount: event.target.value,
      };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        date: event.target.value,
      };
    });
  };

  const submitHander = (event) => {
    event.preventDefault();
    console.log(userInput);
  };

  return (
    <form onSubmit={submitHander}>
      <div>
        <input
          onChange={titleChangeHandler}
          className="new-expense__control"
          type="text"
          placeholder="Title"
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
          required
        />
      </div>
      <div>
        <input
          onChange={dateChangeHandler}
          className="new-expense__control"
          type="date"
          placeholder="Date"
          min="2021-07-27"
          max="2022-07-27"
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
