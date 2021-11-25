import LineString from "ol/geom/LineString";
import Feature from "ol/Feature";

import Enums from "../../../enums";
import updateMarkup from "./updateMarkup";
import { getShortAxisId } from "./id";
import getShortAxisCoords from "./getShortAxisCoords";

const createAndAddShortAxisFeature = (longAxisFeature, viewerProperties) => {
  const { drawingSource } = viewerProperties;
  const id = getShortAxisId(longAxisFeature);

  const shortAxisCoords = getShortAxisCoords(longAxisFeature);

  const geometry = new LineString(shortAxisCoords);
  const feature = new Feature({ geometry });
  feature.setId(id);
  feature.setProperties(
    {
      isShortAxis: true,
      [Enums.InternalProperties.IsSilentFeature]: true,
      [Enums.InternalProperties.SubFeatures]: [longAxisFeature],
    },
    true
  );
  longAxisFeature.setProperties(
    { [Enums.InternalProperties.SubFeatures]: [feature] },
    true
  );
  feature.setStyle(longAxisFeature.getStyle());

  updateMarkup(feature, longAxisFeature, viewerProperties)
  feature.on(Enums.FeatureGeometryEvents.CHANGE, () =>
    updateMarkup(feature, longAxisFeature, viewerProperties)
  );

  drawingSource.addFeature(feature);
};

export default createAndAddShortAxisFeature;
