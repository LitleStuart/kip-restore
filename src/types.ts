import { params } from "./defaultParams";

export type SimpleParam = {
  name: string;
  offset: number;
  value: number;
};
export type ArrayParam = {
  name: string[];
  offset: number;
  subOffset: number;
  value: number[];
};

export type Param = SimpleParam | ArrayParam;

export type ParamName = keyof typeof params;
