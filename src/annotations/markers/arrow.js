import Style from "ol/style/Style";
import Stroke from "ol/style/Stroke";
import Point from "ol/geom/Point";
import LineString from "ol/geom/LineString";
import Icon from "ol/style/Icon";

import Enums from "../../enums";
import defaultStyles from "../styles";

const applyStyle = (feature, map) => {
  const geometry = feature.getGeometry();
  if (geometry instanceof Point || geometry instanceof LineString) {
    const anchor = [0, 0.5];
    const rotation = 120;
    const point = geometry.getCoordinates();
    const styleOptions = feature.get(Enums.InternalProperties.StyleOptions);
    const color =
      styleOptions && styleOptions.stroke && styleOptions.stroke.color
        ? styleOptions.stroke.color
        : defaultStyles.stroke.color;

    feature.setStyle((feature, resolution) => {
      const newScale = map.getView().getResolutionForZoom(3) / resolution;

      const icon = `
        <svg version="1.1" width="180px" height="180px" viewBox="0 -7.101 760.428 415.101" style="enable-background:new 0 0 408 408;" xmlns="http://www.w3.org/2000/svg">
          <g>
            <path style="fill:${encodeURIComponent(
              color
            )};" d="M 736.978 175.952 L 96.9 178.5 L 239.7 35.7 L 204 0 L 0 204 L 204 408 L 239.7 372.3 L 96.9 229.5 L 737.197 224.191 L 736.978 175.952 Z"/>
          </g>
        </svg>
      `;

      const styles = [];

      if (geometry instanceof LineString) {
        geometry.forEachSegment((start, end) => {
          const dx = end[0] - start[0];
          const dy = end[1] - start[1];
          const rotation = Math.atan2(dy, dx);

          const arrowStyle = new Style({
            geometry: new Point(start),
            image: new Icon({
              opacity: 1,
              src: `data:image/svg+xml;utf8,${icon}`,
              scale: newScale,  /** Absolute-sized icon */
              anchor: [0.1, 0.5],
              rotateWithView: true,
              rotation: -rotation,
            }),
          });

          styles.push(
            new Style({
              stroke: new Stroke({
                color,
                width: 12 * newScale, /** Keep scale sync with icon */
              }),
            })
          );

          /** Arrow */
          styles.push(arrowStyle);
        });

        return styles;
      }

      const iconStyle = new Style({
        geometry: new Point(point),
        image: new Icon({
          opacity: 1,
          src: `data:image/svg+xml;utf8,${icon}`,
          scale: newScale, /** Absolute-sized icon */
          anchor,
          rotateWithView: true,
          rotation: -rotation,
        }),
      });

      return iconStyle;
    });
  }
};

export const isArrow = (feature) =>
  Enums.Marker.Arrow === feature.get(Enums.InternalProperties.Marker);

/**
 * Format arrow output
 * @param {LineString} arrow geometry
 * @return {string} The formatted output
 */
export const format = (feature) =>
  feature.get(Enums.InternalProperties.Label) || "";

/**
 * Arrow marker definition
 *
 * @param {object} dependencies Shared dependencies
 * @param {object} dependencies.map Map shared instance
 */
const ArrowMarker = ({ map }) => {
  return {
    onAdd: (feature) => {
      if (isArrow(feature)) {
        applyStyle(feature, map);

        /** Keep arrow style after external style changes */
        feature.on(
          Enums.FeatureEvents.PROPERTY_CHANGE,
          ({ key: property, target: feature }) => {
            if (property === Enums.InternalProperties.StyleOptions) {
              applyStyle(feature, map);
            }
          }
        );

        /** Update arrow icon position on feature geometry change */
        feature.getGeometry().on(Enums.FeatureGeometryEvents.CHANGE, () => {
          applyStyle(feature, map);
        });
      }
    },
    onUpdate: (feature) => {},
    onRemove: (feature) => {},
    onDrawStart: ({ feature }) => {
      if (isArrow(feature)) {
        applyStyle(feature, map);
      }
    },
    onDrawEnd: ({ feature }) => {},
  };
};

export default ArrowMarker;
