import ExporterList from './exporters/ExporterList';

import PDBExporter from './exporters/PDBExporter';
import FBXExporter from './exporters/FBXExporter';
import XYZExporter from './exporters/XYZExporter';

export default new ExporterList([
  PDBExporter,
  FBXExporter,
  XYZExporter,
]);
