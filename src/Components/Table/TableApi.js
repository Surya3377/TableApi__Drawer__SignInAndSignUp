import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import classes from "./Table.module.css";
import { CircularProgress } from "@mui/material";

const TableApi = () => {
  const [tableData, setTableData] = useState([]);
  const [isLoading,setIsLoading] = useState(true)

  const tableDataDetails = () => {
    axios.get(`https://api.sampleapis.com/countries/countries`)
    .then((res) => {
        const sortData = res.data.sort( (a,b) => {
            return a.name.localeCompare(b.name)
        })
      console.log(sortData);
      setTableData(sortData);
      setIsLoading(false)
    });
  };

  useEffect(() => {
    tableDataDetails("");
  }, []);
  return (
    <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
       {isLoading ? (
        <div style={{marginTop:"50vh",color:"black !important"}}>
          <CircularProgress style={{color:"black"}}></CircularProgress>
        </div>
       ) : (
        <table className={classes.table}>
        <thead>
          <tr>
            <th>Country</th>
            <th>Capital</th>
            <th>Currency</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((table, id) => {
            return (
              <tr key={id}>
                <td>{table.name}</td>
                <td>{table.capital}</td>
                <td>{table.currency}</td>
                <td>{table.phone}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
       )}
    </div>
  );
};

export default TableApi;
