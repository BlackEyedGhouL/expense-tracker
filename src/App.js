import { useState } from "react";

import Graph from "./components/Graph";
import Header from "./components/Header";
import NewExpense from "./components/NewExpense";
import Transactions from "./components/Transactions";

const DUMMY_DATA = [
  {
    id: "11dcfbdf36e",
    title: "Toilet Paper",
    amount: "94.12",
    date: "2022-05-24",
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_DATA);

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
    </div>
  );
};

export default App;
