import Exporter from './Exporter';
import Complex from '../../chem/Complex';

const IDENT = '      ';
const SMALL_IDENT = '  ';

function complexIdentifier(compound) {
  return compound.metadata.id || compound.metadata.name || 'Unknown';
}

export default class XYZExporter extends Exporter {
  exportSync() {
    if (!this._source) {
      return this._result;
    }
    const result = [];
    const numOfAtoms = this._source._atoms.length;
    result.push(numOfAtoms);
    const compoundId = complexIdentifier(this._source);
    result.push(compoundId);
    let curStr = '';
    const atoms = this._source._atoms;
    for (let i = 0; i < numOfAtoms; i++) {
      curStr = atoms[i].element.name + IDENT;
      curStr += atoms[i].position.x.toFixed(3);
      curStr += SMALL_IDENT;
      curStr += atoms[i].position.y.toFixed(3);
      curStr += SMALL_IDENT;
      curStr += atoms[i].position.z.toFixed(3);
      result.push(curStr);
    }
    this._result = `${result.join('\n')}\n`;
    return this._result;
  }
}

XYZExporter.formats = ['xyz'];
XYZExporter.SourceClass = Complex;
