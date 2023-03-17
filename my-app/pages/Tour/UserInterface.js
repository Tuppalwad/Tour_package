import React, { useEffect, useState } from "react";
import Navbar from "@/Component/Navbar";

function UserInterface() {
  const [tourdata, settourdata] = useState();

  useEffect(() => {
    try {
      fetch("http://localhost:3000/api/tour")
        .then((res) => res.json())
        .then((data) => {
          settourdata(data);
        });
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <Navbar btn1="Logout"></Navbar>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "100px",
        }}
      >
        <h1 style={{ fontSize: "20px" }}>Welcome Dear </h1>
      </div>

      <div style={{ display: "center", flexWrap: "wrap", marginTop: "20px" }}>
        {tourdata &&
          tourdata.map((item) => {
            return (
              <div
                style={{
                  marginTop: "30px",
                  width: "90%",
                  height: "100px",
                  backgroundColor: "yellow",
                  margin: "auto",
                  alignItems: "center",
                }}
              >
                <table
                  style={{
                    border: "1px solid black",
                    width: "100%",
                    height: "100%",
                    textAlign: "center",
                  }}
                >
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>description</th>
                    <th>duration</th>
                    <th>location</th>
                  </tr>
                  <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.description}</td>
                    <td>{item.duration}</td>
                    <td>
                      <div>
                        <p>{item.location.latitude}</p>
                        <p>{item.location.longitude}</p>
                      </div>
                    </td>
                  </tr>
                </table>
              </div>
            );
          })}
      </div>
    </>
  );
}

export default UserInterface;
