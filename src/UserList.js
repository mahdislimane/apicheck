import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

export default function UserList() {
  const [listOfUser, setlistOfUser] = useState([]);
  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      setlistOfUser(listOfUser.concat(res.data));
    });
  }, []);
  console.log(listOfUser);
  return (
    <div className="container-fluid row">
      <div className="col-3"></div>
      <table className="col-6">
        <tr className="form">
          <th className="tableau" style={{ width: "50px" }}>
            ID
          </th>
          <th className="tableau" style={{ width: "250px" }}>
            Name
          </th>
          <th className="tableau" style={{ width: "250px" }}>
            Email
          </th>
        </tr>

        {listOfUser.map((el) => {
          return (
            <tr className="form">
              <td className="tableau" style={{ width: "50px" }}>
                {el.id}
              </td>
              <td className="tableau" style={{ width: "250px" }}>
                {el.name}
              </td>
              <td className="tableau" style={{ width: "250px" }}>
                {el.email}
              </td>
            </tr>
          );
        })}
      </table>
      <div className="col-3"></div>
    </div>
  );
}
