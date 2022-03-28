export interface IGetModel {
  makeId: number;
}

export interface IGetVersion {
  ModelID: number;
}

export interface IGetVehicles {
  page: number;
}

export interface IMake {
  ID: number;
  Name: string
}

export interface IModel{
  MakeID: number;
  ID: number;
  Name: string;
}
export interface IVehicle{
  ID: number;
  Make: string;
  Model: string;
  Version: string;
  Image: string;
  KM: number;
  Price: number;
  YearModel: number;
  YearFab: number;
  Color: string;
}

export interface IVersion{
  ModelID: string;
  ID: number;
  Name: string;
}