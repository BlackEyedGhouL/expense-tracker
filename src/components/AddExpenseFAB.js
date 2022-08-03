import { useState } from "react";

import { Fab, Zoom, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import "../assets/AddExpenseFAB.css";

const AddExpenseFAB = (props) => {
  const useStyles = makeStyles({
    buttonClicked: {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed",
      zIndex: 20,
      backgroundColor: "#e85a4f",
      color: "#eae7dc",
      "&:hover": {
        backgroundColor: "#eae7dc",
        color: "#e85a4f",
      },
    },
    buttonNotClicked: {
      margin: 0,
      top: "auto",
      right: 20,
      bottom: 20,
      left: "auto",
      position: "fixed",
      color: "#e85a4f",
      zIndex: 20,
      backgroundColor: "#eae7dc",
      "&:hover": {
        backgroundColor: "#e85a4f",
        color: "#eae7dc",
      },
    },
  });

  const classes = useStyles();

  const [isOpen, setIsOpen] = useState(true);

  const clickHander = (event) => {
    event.preventDefault();
    setIsOpen(!isOpen);

    if (isOpen) {
      props.onClickFAB(true);
    } else {
      props.onClickFAB(false);
    }
  };

  return (
    <div className="expense-fab">
      <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
        <Fab
          className={!isOpen ? classes.buttonClicked : classes.buttonNotClicked}
          size="mid"
          onClick={clickHander}
        >
          <AddIcon fontSize="large" />
        </Fab>
      </Zoom>
    </div>
  );
};

export default AddExpenseFAB;
