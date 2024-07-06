import * as apiModel from "./api/movement-list.api-model";
import * as viewModel from "./movement-list.vm";

export const mapAccountFromApiToVm = (
  accountList: apiModel.Account[]
): viewModel.AccountVm => {
  if (accountList.length === 0) {
    return viewModel.setEmptyAccount();
  }
  const account = accountList[0];
  return {
    id: account.id,
    iban: account.iban,
    name: account.name,
    balance: account.balance.toString(),
  };
};

export const mapMovementListFromApiToVm = (
  movementList: apiModel.Movement[]
): viewModel.MovementVM[] =>
  movementList.map((movement) => ({
    id: movement.id,
    description: movement.description,
    amount: movement.amount.toString(),
    balance: movement.balance.toString(),
    transaction: new Date(movement.transaction),
    realTransaction: new Date(movement.realTransaction),
  }));
