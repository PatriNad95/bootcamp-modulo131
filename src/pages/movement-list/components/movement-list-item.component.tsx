import React from "react";
import classes from "./movement-list-item.component.module.css";
import { MovementVM } from "../movement-list.vm";

interface Props {
  movementItem: MovementVM;
}

export const MovementListItemComponent: React.FC<Props> = (props) => {
  const { movementItem } = props;

  return (
    <div className={classes.row}>
      <span className={classes.dataCell}>
        {movementItem.transaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>
        {movementItem.realTransaction.toLocaleDateString()}
      </span>
      <span className={classes.dataCell}>{movementItem.description}</span>
      <span
        className={`${classes.dataCell} ${classes.alignRight} ${
          movementItem.amount.startsWith("-") ? classes.error : ""
        }`}
      >
        {movementItem.amount} €
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {movementItem.balance} €
      </span>
    </div>
  );
};
