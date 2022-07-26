import ExpenseItem from "./components/ExpenseItem";
import Graph from "./components/Graph";
import Header from "./components/Header";

const App = () => {
  return (
    <div>
      <Header />
      <h3 className="sub-title-text">Overview</h3>
      <Graph />
      <h3 className="sub-title-text">Transactions</h3>
      <ExpenseItem />
    </div>
  );
}

export default App;
