import React, { useEffect, useState } from "react";
import TableComponent from "../UIComponents/TableComponent";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("data.json");
        const { properties } = await response.json();
        
        setProperties(properties);
      } catch (e) {
        setError(e);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="table-widget">
        <div className="d-flex justify-content-between">
          <h2>Properties</h2>
          <div>
            <button className="btn btn-primary">Add Property</button>
          </div>
        </div>
        <div>
          {properties.length > 0 ? (
            <TableComponent data={properties}/>
          ) : (
            <p>No properties</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Properties;
