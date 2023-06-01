import React from "react";
import { Table } from "reactstrap";

function TableWeather({ data }) {
  const dateWeather = new Date();
  console.log("table", data);
  return (
    <div>
      <Table hover bordered striped size="sm">
        <thead className="text-center">
          <tr>
            <th>Date</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
          <tr>
            <th>(mm/dd/yyyy)</th>
            <th>Temp (F)</th>
            <th>Description</th>
            <th>Main</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row" className="text-right">
              {dateWeather.toLocaleDateString()}
            </th>
            <td className="text-right">{data?.main?.temp}</td>
            <td className="text-right">{data?.weather[0]?.description}</td>
            <td className="text-right">{data?.weather[0]?.main}</td>
            <td className="text-right">{data?.main?.pressure}</td>
            <td className="text-right">{data?.main?.humidity}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}

export default TableWeather;
