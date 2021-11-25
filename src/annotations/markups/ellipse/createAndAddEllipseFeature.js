import { Feature } from "ol";
import styles, { getEllipseStyle } from "./styles";
import { getEllipseId } from "./id";
import Enums from "../../../enums";
import addFeature from "./addFeature";
import updateMarkup from "./updateMarkup";

const createAndAddEllipseFeature = (
  ellipseHandlesFeature,
  ellipseGeometry,
  viewerProperties,
  originalROIFeature
) => {
  const { markupManager } = viewerProperties;

  const ellipseId = getEllipseId(
    originalROIFeature ? originalROIFeature : ellipseHandlesFeature
  );

  const geometry = ellipseGeometry;
  const ellipseFeature = new Feature({ geometry });
  ellipseFeature.setId(ellipseId);
  ellipseFeature.setProperties(
    {
      isEllipseShape: true,
      [Enums.InternalProperties.IsSilentFeature]: true,
      [Enums.InternalProperties.ReadOnly]: true,
      [Enums.InternalProperties.SubFeatures]: [ellipseHandlesFeature],
    },
    true
  );
  ellipseHandlesFeature.setProperties(
    {
      [Enums.InternalProperties.SubFeatures]: [ellipseFeature],
      [Enums.InternalProperties.NoMarkup]: true 
    },
    true
  );
  ellipseFeature.setStyle(getEllipseStyle(ellipseFeature));

  markupManager.create({ feature: ellipseFeature, style: styles });

  addFeature(ellipseFeature, viewerProperties);

  updateMarkup(originalROIFeature, viewerProperties);
};

export default createAndAddEllipseFeature;
