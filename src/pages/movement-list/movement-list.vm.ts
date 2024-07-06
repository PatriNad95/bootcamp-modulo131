export interface MovementVM {
  id: string;
  description: string;
  amount: string;
  balance: string;
  transaction: Date;
  realTransaction: Date;
}

export interface AccountVm {
  id: string;
  iban: string;
  name: string;
  balance: string;
}

export const setEmptyAccount = (): AccountVm => ({
  id: "",
  iban: "",
  name: "",
  balance: "",
});
