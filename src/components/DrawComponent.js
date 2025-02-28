import React, { useEffect } from "react";
import MapboxDraw from "@mapbox/mapbox-gl-draw";
import "@mapbox/mapbox-gl-draw/dist/mapbox-gl-draw.css";

const drawStyle = {
  position: "absolute",
  background: "white",
  padding: 20,
  zIndex: "2",
  bottom: "0vh",
};

const DrawComponent = (props) => {
  const map = props.mapConnection;
  useEffect(() => {
    if (!map) return;
    const draw = new MapboxDraw({
      displayControlsDefault: false,
      // Select which mapbox-gl-draw control buttons to add to the map.
      controls: {
        polygon:false,
        line_string: true,
        trash: true,
      },
    });
    map.addControl(draw);
    map.on('click', regnAvstand);
    function regnAvstand(e) {
      const data = draw.getAll();
      const answer = document.getElementById('calculated-area');
      }
  }, [map]);

  // Se flere muligheter med Draw Modulen til MapBox: https://github.com/mapbox/mapbox-gl-draw/blob/main/docs/API.md
  // Om vi har tilgang til kartet, render component. Ellers returner et tomt HTML objekt.
  return <>{map ? <></> : <></>}</>;
};

export default DrawComponent;
