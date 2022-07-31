import "../assets/Header.css";

const Header = () => {
  return (
    <div className="header-containter">
      <h1 className="site-name">Expense Tracker</h1>
      <div className="header-right">
        <h2 className="total-text">Total:</h2>
        <h2 className="total-value">$50</h2>
      </div>
    </div>
  );
};

export default Header;
