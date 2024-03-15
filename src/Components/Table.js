import React, { useEffect, useState } from "react";
import "./Table.css";
import axios from "axios";
function ProductsPage() {
  let [users, setUsers] = useState(null);
  const assignment = async () => {
    try {
      let response = await axios.get(
        "https://intradayscreener.com/api/openhighlow/cash"
      );
      console.log(response.data);
      setUsers(response.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    assignment();
  }, []);
  return (
    <div>
      <table
        className="head"
        style={{
          width: "1750px",
          border: "2px solid black",
          backgroundColor: "rgb(169,226,228)",
        }}
      >
        <tr>
          <th className="item">SYMBOL</th>
          <th className="item">LTP</th>
          <th className="item">Momentum</th>
          <th className="item">OPEN</th>
          <th className="item">Deviation from Pivots</th>
          <th className="item">TODAY'S RANGE</th>
          <th className="item">OHL</th>
        </tr>

        {users &&
          users.map((item) => (
            <tbody
              style={{
                border: "2px solid black",
                alignItems: "center",
                width: "1rem",
                backgroundColor: "white",
              }}
            >
              <tr>
                <td
                  style={{
                    color: "green",
                    fontSize: "25",
                    fontFamily: "bold",
                    width: "1rem",
                  }}
                >
                  {item.symbol}
                </td>
                <td
                  style={{
                    color: "black",
                    fontSize: "30",
                    fontFamily: "bold",
                    width: "1rem",
                  }}
                >
                  {item.ltp}
                </td>
                <td
                  style={{
                    color: "green",
                    fontSize: "25",
                    fontFamily: "monospace",
                    width: "1rem",
                  }}
                >
                  {item.open}
                </td>
                <td
                  style={{
                    color: "black",
                    fontSize: "30",
                    fontFamily: "bold",
                    width: "1rem"
                    // backgroundColor:"purple"
                  }}
                >
                  {item.high}
                </td>
                <td
                  style={{
                    width: "1rem",
                    color: "black",
                    fontSize: "30",
                    fontFamily: "bold",
                    borderRadius: "30",
                  }}
                >
                  {item.low}
                </td>
                <td
                  style={{
                    width: "1rem",
                    color: "black",
                    fontFamily: "bold",
                    borderRadius: "30",
                  }}
                >
                  {item.low}<input type="range"/>{item.high}
                </td>

                <td
                  style={{
                    Color: "pink",
                    backgroundColor:item.open === item.low ? 'green' : (item.open === item.high ? 'red' :'white'),
                    width: "1px",
                    borderRadius: "60px",
                  }}
                >
                  {item.openHighLowSignal}
                </td>
              </tr>
            </tbody>
          ))}
      </table>
    </div>
  );
}

export default ProductsPage;
