import { useState } from "react";

import Header from "./components/Header";
import NewExpense from "./components/NewExpense";
import NoTransactions from "./components/NoTransactions";
import Transactions from "./components/Transactions";
import AddExpenseFAB from "./components/AddExpenseFAB";
import ExpensesChart from "./components/ExpensesChart";

const App = () => {
  const [expenses, setExpenses] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const submitExpenseHandler = (submittedExpense) => {
    const expense = {
      ...submittedExpense,
      id: Math.random().toString(16).slice(2),
    };

    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  const clickFABHandler = (isClicked) => {
    setIsOpen(isClicked);
  };

  return (
    <div>
      <Header items={expenses} />
      <h3 className="sub-title-text">Overview</h3>
      <ExpensesChart expenses={expenses} />
      <div className={isOpen ? "new-expense-open" : "new-expense-closed"}>
        <h3 className="sub-title-text">New Expense</h3>
        <NewExpense onSubmitExpense={submitExpenseHandler} />
      </div>
      <h3 className="sub-title-text">Transactions</h3>
      <Transactions items={expenses} />
      {expenses.length === 0 && <NoTransactions />}
      <AddExpenseFAB onClickFAB={clickFABHandler} />
    </div>
  );
};

export default App;
