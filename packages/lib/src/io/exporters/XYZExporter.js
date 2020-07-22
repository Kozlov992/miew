import Exporter from './Exporter';
import Complex from '../../chem/Complex';

function complexIdentifier(compound) {
  return compound.metadata.id || compound.metadata.name || 'Unknown';
}

export default class XYZExporter extends Exporter {
  exportSync() {
    const source = this._source;
    if (!source) {
      return null;
    }
    const numOfAtoms = source._atoms.length;
    const result = [numOfAtoms, complexIdentifier(source)];
    const atoms = this._source._atoms;
    for (let i = 0; i < numOfAtoms; i++) {
      const curAtomName = atoms[i].element.name;
      const curAtomPosition = atoms[i].position;
      const curAtomPositionX = curAtomPosition.x.toFixed(3).padStart(8);
      const curAtomPositionY = curAtomPosition.y.toFixed(3).padStart(8);
      const curAtomPositionZ = curAtomPosition.z.toFixed(3).padStart(8);
      result.push(`${curAtomName}${curAtomPositionX}${curAtomPositionY}${curAtomPositionZ}`);
    }
    return `${result.join('\n')}\n`;
  }
}

XYZExporter.formats = ['xyz'];
XYZExporter.SourceClass = Complex;
