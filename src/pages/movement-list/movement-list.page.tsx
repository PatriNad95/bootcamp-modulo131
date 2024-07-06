import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm, MovementVM, setEmptyAccount } from "./movement-list.vm";
import { HeaderComponent } from "./components/header.component";
import classes from "./movement-list.page.module.css";
import { MovementListTableComponent } from "./components/movement-list-table.component";
import { getAccountList, getMovementList } from "./api/movement-list.api";
import {
  mapAccountFromApiToVm,
  mapMovementListFromApiToVm,
} from "./movement-list.mapper";
import { useParams } from "react-router-dom";

export const MovementListPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movementList, setMovementList] = React.useState<MovementVM[]>([]);
  const [account, setAccount] = React.useState<AccountVm>(setEmptyAccount());

  React.useEffect(() => {
    if (id) {
      try {
        getAccountList(id).then((result) =>
          setAccount(mapAccountFromApiToVm(result))
        );
      } catch (error) {
        throw new Error("Error al cargar la cuenta");
      }
    }
  }, []);

  React.useEffect(() => {
    if (id) {
      try {
        getMovementList(id).then((result) =>
          setMovementList(mapMovementListFromApiToVm(result))
        );
      } catch (error) {
        throw new Error("Error al cargar los movimientos");
      }
    }
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>
        <HeaderComponent account={account} />
        <MovementListTableComponent movementList={movementList} />
      </div>
    </AppLayout>
  );
};
