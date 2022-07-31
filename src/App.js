import { useState } from "react";

import Graph from "./components/Graph";
import Header from "./components/Header";
import NewExpense from "./components/NewExpense";
import Transactions from "./components/Transactions";

const App = () => {
  const [expenses, setExpenses] = useState([]);

  const submitExpenseHandler = (submittedExpense) => {
    const expense = {
      ...submittedExpense,
      id: Math.random().toString(16).slice(2),
    };

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  let message;
  if (expenses && expenses.length) {
    message = "";
  } else {
    message = "No recent transactions!";
  }

  return (
    <div>
      <Header />
      <h3 className="sub-title-text">Overview</h3>
      <Graph />
      <h3 className="sub-title-text">New Expense</h3>
      <NewExpense onSubmitExpense={submitExpenseHandler} />
      <h3 className="sub-title-text">Transactions</h3>
      <Transactions items={expenses} />
      <h3 className="empty-message">{message}</h3>
    </div>
  );
};

export default App;
