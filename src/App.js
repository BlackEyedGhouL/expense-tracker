import { useState } from "react";

import Graph from "./components/Graph";
import Header from "./components/Header";
import NewExpense from "./components/NewExpense";
import NoTransactions from "./components/NoTransactions";
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

  return (
    <div>
      <Header />
      <h3 className="sub-title-text">Overview</h3>
      <Graph />
      <h3 className="sub-title-text">New Expense</h3>
      <NewExpense onSubmitExpense={submitExpenseHandler} />
      <h3 className="sub-title-text">Transactions</h3>
      <Transactions items={expenses} />
      {expenses.length === 0 ? <NoTransactions /> : null}
    </div>
  );
};

export default App;
