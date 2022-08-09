import TotalAmount from "./TotalAmount";

import "../assets/Header.css";

const Header = (props) => {
  return (
    <div className="header-containter">
      <h1 className="site-name">Expense Tracker 2022</h1>
      <div className="header-right">
        <h2 className="total-text">Total:</h2>
        <TotalAmount items={props.items} />
      </div>
    </div>
  );
};

export default Header;
