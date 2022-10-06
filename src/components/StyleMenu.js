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
  
  const setStyle = (style) => {
    map.setStyle(style);
  };

  // Om vi har tilgang til kartet, render component. Ellers returner et tomt HTML objekt.
  return (
    <>
      {map ? (
        <div style={menuStyle}>
          {styles.map((iterator) => (
            <div key={iterator.style}>
              <input
                id={iterator.style}
                type="radio"
                name="rtoggle"
                value={iterator.style}
                onClick={() => setStyle(iterator.style)}
              />
              <label>{iterator.name}</label>
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
