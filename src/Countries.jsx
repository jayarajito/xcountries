import React, { useEffect, useState } from "react";
const Tile = ({ flagUrl, name, altFlag }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "10px",
        padding: "10px",
        border: "1px solid black",
        borderRadius: "8px",
        flexDirection: "column",
        width: "200px",
        height: "200px",
      }}
    >
      <img
        src={flagUrl}
        alt={altFlag}
        style={{ width: "100px", height: "100p" }}
      />
      <h2>{name}</h2>
    </div>
  );
};
function Countries() {
  const API_URL = "https://restcountries.com/v3.1/all";
  const [countries, setContries] = useState([]);
  useEffect(() => {
    fetch(API_URL)
      .then((respons) => respons.json())
      .then((data) => setContries(data))
      .catch((error) => console.error("Error Fetching the Data: ", error));
  }, []);
  console.log({ countries });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        flexWrap: "wrap",
      }}
    >
      {/* <h1>Countries</h1> */}
      {countries.map((country) => (
        <Tile
          key={country.cca3}
          flagUrl={country.flags.png}
          name={country.name.common}
          altFlag={country.flags.alt}
        />
      ))}
    </div>
  );
}

export default Countries;
