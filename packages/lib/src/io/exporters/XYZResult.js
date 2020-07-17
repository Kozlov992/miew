export default class {
  constructor() {
    this._resultArray = [];
  }

  addNumberOfAtoms(num) {
    this._resultArray.push(num);
  }

  addId(id) {
    this._resultArray.push(id);
  }

  addAtomInformation(str) {
    this._resultArray.push(str);
  }

  getResult() {
    return this._resultArray.join('\n');
  }
}
