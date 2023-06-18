import axios from "axios";
import React, { useEffect, useState } from "react";

const Maps = () => {
  // const [lat, setLat] = useState(0);
  // const [lon, setLon] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const mapsData = () => {
    axios
      .get(`https://maps.google.com/maps?q=${searchQuery}&hl=es;&output=embed`)
      .then((res) => {
        console.log(res.data);
        // const urlParams = new URLSearchParams(res.request.responseURL);
        // const lat = urlParams.get("q").split(",")[0];
        // const lon = urlParams.get("q").split(",")[1];
        // setLat(lat);
        // setLon(lon);
      });
  };

  useEffect(() => {
    if (searchQuery) {
      mapsData("");
    }
  }, [searchQuery]);

  return (
    <div>
      {/* <label>Lat</label>&nbsp; */}
      {/* <input
        style={{
          padding: "5px",
          border: "2px solid gray",
          borderRadius: "5px",
        }}
        type="number"
        value={lat}
        onChange={(e) => setLat(e.target.value)}
      />
      <br />
      <br />
      <label>Lon</label>&nbsp;
      <input
        style={{
          padding: "5px",
          border: "2px solid gray",
          borderRadius: "5px",
        }}
        type="number"
        value={lon}
        onChange={(e) => setLon(e.target.value)}
      />
      <br />
      <br /> */}
      <label>Search</label>&nbsp;
      <input
        style={{
          padding: "5px",
          border: "2px solid gray",
          borderRadius: "5px",
        }}
        type="text"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      <iframe
        id="iframeId"
        src={`https://maps.google.com/maps?q=${encodeURIComponent(
          searchQuery
        )}&hl=es;&output=embed`}
        // src={`https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`}
        height="500px"
        width="100%"
      ></iframe>
    </div>
  );
};

export default Maps;
