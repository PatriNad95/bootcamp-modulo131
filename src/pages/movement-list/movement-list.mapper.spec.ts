import * as apiModel from "./api";
import {
  mapAccountFromApiToVm,
  mapMovementListFromApiToVm,
} from "./movement-list.mapper";

describe("pages/movement-list/movement-list.mapper specs", () => {
  describe("mapAccountFromApiToVm", () => {
    it("should return empty object when it feeds empty array", () => {
      // Arrange
      const accountList: apiModel.Account[] = [];

      // Act
      const result = mapAccountFromApiToVm(accountList);

      // Assert
      expect(result).toEqual({
        id: "",
        iban: "",
        name: "",
        balance: "",
      });
    });
    it("should return an accountVm object when it feeds an array", () => {
      // Arrange
      const accountList: apiModel.Account[] = [
        {
          id: "1",
          iban: "ES91 2100 0418 4502 0005 1332",
          type: "1",
          name: "Gastos mes",
          balance: 1490,
          lastTransaction: "2019-12-09T21:30:00",
        },
        {
          id: "2",
          iban: "ES79 2100 0813 6101 2345 6789",
          type: "3",
          name: "Compartida",
          balance: 2480,
          lastTransaction: "2019-11-21T14:07:38",
        },
      ];

      // Act
      const result = mapAccountFromApiToVm(accountList);

      // Assert
      expect(result).toEqual({
        id: "1",
        iban: "ES91 2100 0418 4502 0005 1332",
        name: "Gastos mes",
        balance: "1490",
      });
    });
  });
  describe("mapMovementListFromApiToVm", () => {
    it("should return empty array when it feeds empty array", () => {
      // Arrange
      const movementList: apiModel.Movement[] = [];

      // Act
      const result = mapMovementListFromApiToVm(movementList);

      // Assert
      expect(result).toEqual([]);
    });
    it("should return an array when it feeds an array", () => {
      // Arrange
      const movementList: apiModel.Movement[] = [
        {
          id: "1",
          description: "Nómina noviembre",
          amount: 900,
          balance: 1490,
          transaction: "2019-12-09T21:30:00",
          realTransaction: "2019-12-09T21:30:00",
          accountId: "1",
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: -400,
          balance: 590,
          transaction: "2019-12-07T11:30:00",
          realTransaction: "2019-12-08T20:00:10",
          accountId: "1",
        },
      ];

      // Act
      const result = mapMovementListFromApiToVm(movementList);

      // Assert
      expect(result).toEqual([
        {
          id: "1",
          description: "Nómina noviembre",
          amount: "900",
          balance: "1490",
          transaction: new Date("2019-12-09T21:30:00"),
          realTransaction: new Date("2019-12-09T21:30:00"),
        },
        {
          id: "2",
          description: "Alquiler noviembre",
          amount: "-400",
          balance: "590",
          transaction: new Date("2019-12-07T11:30:00"),
          realTransaction: new Date("2019-12-08T20:00:10"),
        },
      ]);
    });
  });
});
