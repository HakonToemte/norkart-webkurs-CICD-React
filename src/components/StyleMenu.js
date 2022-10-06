import React from "react";

const menuStyle = {
  position: "absolute",
  background: "white",
  padding: 20,
  zIndex: "2",
  top: "10vh",
  display: "flex",
};

const styles = [
  { style: "mapbox://styles/mapbox/streets-v11", name: "streets" },
  { style: "mapbox://styles/mapbox/light-v10", name: "light" },
  { style: "mapbox://styles/mapbox/dark-v10", name: "dark" },
  { style: "mapbox://styles/mapbox/satellite-v9", name: "outdoors" },
];

const StyleMenu = (props) => {
  const map = props.mapConnection;
  console.log(map);
  
  const flyTo = (coordinates) => {
    map.flyTo({ center: coordinates });
  };

  // Om vi har tilgang til kartet, render component. Ellers returner et tomt HTML objekt.
  return (
    <>
      {map ? (
        <div style={menuStyle}>
          {locations.map((location) => (
            <div key={location.center}>
              <input
                id={location.center}
                type="radio"
                name="rtoggle"
                value={location.center}
                onClick={() => flyTo(location.center)}
              />
              <label>{location.name}</label>
            </div>
          ))}
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default StyleMenu;
