import { AccountVm } from "../movement-list.vm";
import classes from "./header.component.module.css";

interface Props {
  account: AccountVm;
}

export const HeaderComponent: React.FC<Props> = (props) => {
  const { account } = props;

  return (
    <>
      <div className={classes.headerContainer}>
        <h1>Saldos y Últimos movimientos</h1>
        <div className={classes.balanceContainer}>
          <h3>SALDO DISPONIBLE</h3>
          <span className={classes.balanceNumeric}>{account.balance} €</span>
        </div>
      </div>
      <div className={classes.subheaderContainer}>
        <h2>Alias: {account.name}</h2>
        <h2>IBAN: {account.iban}</h2>
      </div>
    </>
  );
};
