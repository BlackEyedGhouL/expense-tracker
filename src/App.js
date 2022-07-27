import ExpenseItem from "./components/ExpenseItem";
import Graph from "./components/Graph";
import Header from "./components/Header";
import NewExpense from "./components/NewExpense";

const App = () => {
  const submitExpenseDataHandler = (submittedExpenseData) => {
    const expenseData = {
      ...submittedExpenseData,
      id: Math.random().toString(16).slice(2),
    };
    console.log(expenseData);
  };

  return (
    <div>
      <Header />
      <h3 className="sub-title-text">Overview</h3>
      <Graph />
      <h3 className="sub-title-text">New Expense</h3>
      <NewExpense onSubmitExpenseData={submitExpenseDataHandler} />
      <h3 className="sub-title-text">Transactions</h3>
      <ExpenseItem />
    </div>
  );
};

export default App;
