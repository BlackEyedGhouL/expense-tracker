import { Fab, Zoom, makeStyles } from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";

import "../assets/AddExpenseFAB.css";

const AddExpenseFAB = () => {
  const useStyles = makeStyles({
    addButton: {
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
    addIcon: {
      fill: "white",
    },
  });

  const classes = useStyles();

  return (
    <div className="expense-fab-button">
      <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
        <Fab className={classes.addButton} size="mid">
          <AddIcon fontSize="large" />
        </Fab>
      </Zoom>
    </div>
  );
};

export default AddExpenseFAB;
