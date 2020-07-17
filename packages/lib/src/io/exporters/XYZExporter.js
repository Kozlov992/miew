import Exporter from './Exporter';
import Complex from '../../chem/Complex';
import XYZResult from './XYZResult';

const IDENT = '      ';
const SMALL_IDENT = '  ';

function complexIdentifier(compound) {
  if (compound.metadata.id !== undefined) {
    return compound.metadata.id;
  }
  if (compound.metadata.name !== undefined) {
    return compound.metadata.name;
  }
  return 'Unknown';
}

export default class XYZExporter extends Exporter {
  exportSync() {
    if (!this._source) {
      return this._result;
    }
    const result = new XYZResult();
    const numOfAtoms = this._source._atoms.length;
    result.addNumberOfAtoms(numOfAtoms);
    const compoundId = complexIdentifier(this._source);
    result.addId(compoundId);
    let curStr = '';
    const atoms = this._source._atoms;
    for (let i = 0; i < numOfAtoms; i++) {
      curStr = atoms[i].element.name + IDENT;
      curStr += atoms[i].position.x.toFixed(3);
      curStr += SMALL_IDENT;
      curStr += atoms[i].position.y.toFixed(3);
      curStr += SMALL_IDENT;
      curStr += atoms[i].position.z.toFixed(3);
      result.addAtomInformation(curStr);
    }
    this._result = result.getResult();
    return this._result;
  }
}

XYZExporter.formats = ['xyz'];
XYZExporter.SourceClass = Complex;
