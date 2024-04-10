import { params } from "./defaultParams";
import { ArrayParam, ParamName, SimpleParam } from "./types";

export class Kip {
  private CUST_NUMBER = 1414747459;
  readonly BYTES_PER_ELEMENT = 4;
  readonly path: string;
  private kip: DataView;

  constructor(path: string) {
    this.path = path;
    this.kip = this.readKip();
  }

  private readKip = () => {
    const file = Switch.readFileSync(this.path)!;
    const tempArray = new Uint32Array(file);
    const CUST_POSITION =
      tempArray.indexOf(this.CUST_NUMBER) * this.BYTES_PER_ELEMENT;
    return new DataView(file.slice(CUST_POSITION));
  };

  private isSimpleParam(paramName: ParamName) {
    return Number.isInteger(params[paramName].value);
  }

  getValue(offset: number) {
    return this.kip.getInt32(offset * this.BYTES_PER_ELEMENT, true);
  }

  setValue(offset: number, value: number) {
    this.kip.setInt32(offset * this.BYTES_PER_ELEMENT, value, true);
  }

  private getSimpleParamValue(paramName: ParamName) {
    const param = params[paramName] as SimpleParam;
    return this.getValue(param.offset);
  }

  private getArrayParamTable(paramName: ParamName) {
    const param = params[paramName] as ArrayParam;
    const values: number[] = [];
    for (let i = 0; i < param.value.length; i++) {
      values.push(this.getValue(param.offset + param.subOffset * i));
    }
    return values;
  }

  getParamValue(paramName: ParamName) {
    if (this.isSimpleParam(paramName)) {
      return this.getSimpleParamValue(paramName);
    }

    return this.getArrayParamTable(paramName);
  }

  private setSimpleParamValue(paramName: ParamName, value: number) {
    const param = params[paramName] as SimpleParam;
    this.setValue(param.offset, value);
  }

  private setArrayParamValue(paramName: ParamName, value: number[]) {
    const param = params[paramName] as ArrayParam;
    for (let i = 0; i < param.value.length; i++) {
      this.setValue(param.offset + param.subOffset * i, value[i]);
    }
  }

  setParamValue(paramName: ParamName, value: number | number[]) {
    if (this.isSimpleParam(paramName)) {
      this.setSimpleParamValue(paramName, value as number);
    } else {
      this.setArrayParamValue(paramName, value as number[]);
    }
  }

  private printSimpleParam(paramName: ParamName) {
    const param = params[paramName] as SimpleParam;
    console.log(`${param.name}: ${this.getValue(param.offset)}`);
  }

  private printArrayParam(paramName: ParamName, rows: number = 5) {
    const param = params[paramName] as ArrayParam;
    const value = this.getParamValue(paramName) as number[];
    for (let i = 0; i < rows; i++) {
      const printString = value
        .filter((_, index) => index % rows === i)
        .map((value, index) =>
          `${param.name[index * rows + i]}: ${value}`.padEnd(15)
        )
        .join("");
      console.log(printString);
    }
  }

  printParam(paramName: ParamName) {
    if (this.isSimpleParam(paramName)) {
      this.printSimpleParam(paramName);
    } else {
      this.printArrayParam(paramName);
    }
  }
}
