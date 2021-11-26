import Enums from "../../enums";
import { formatArea, formatLength } from "../../utils";
import {
  getFeatureScoord3dArea,
  getFeatureScoord3dLength,
} from "../../scoord3dUtils.js";
import annotationInterface from "../annotationInterface";

/**
 * Format measure output.
 *
 * @param {Feature} feature feature, providing area in mm^2 or length in mm
 * @param {string} units units - ignored
 * @return {string} The formatted measure of this feature
 */
export const format = (feature, units, pyramid) => {
  const area = getFeatureScoord3dArea(feature, pyramid);
  if (area) return formatArea(area);
  const length = getFeatureScoord3dLength(feature, pyramid);
  if (length) return formatLength(length);
  return "0";
};

/**
 * Checks if feature has measurement markup properties.
 *
 * @param {object} feature
 * @returns {boolean} true if feature has measurement markup properties
 */
const _isMeasurement = (feature) =>
  Enums.Markup.Measurement === feature.get(Enums.InternalProperties.Markup);

/**
 * Measurement markup definition.
 *
 * @param {object} viewerProperties Shared viewerProperties
 * @param {object} viewerProperties.map Viewer's map instance
 * @param {object} viewerProperties.drawingSource Viewer's drawing source
 * @param {object} viewerProperties.pyramid Pyramid metadata
 * @param {object} viewerProperties.markupManager MarkupManager shared instance
 */
const MeasurementMarkup = (viewerProperties) => {
  const { map, pyramid, markupManager } = viewerProperties;

  return Object.assign({}, annotationInterface, {
    onAdd: (feature) => {
      if (_isMeasurement(feature)) {
        const ps = feature.get(Enums.InternalProperties.PresentationState);
        markupManager.create({
          feature,
          value: format(feature, null, pyramid),
          position: ps && ps.markup ? ps.markup.coordinates : null,
        });
      }
    },
    onFailure: (uid) => {
      if (uid) {
        markupManager.remove(uid);
      }
    },
    onRemove: (feature) => {
      if (_isMeasurement(feature)) {
        const featureId = feature.getId();
        markupManager.remove(featureId);
      }
    },
    onDrawStart: (event, drawingOptions) => {
      const { feature } = event;
      if (_isMeasurement(feature)) {
        markupManager.create({ feature });
      }
    },
  });
};

export default MeasurementMarkup;
