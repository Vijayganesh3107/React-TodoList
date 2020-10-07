import React from "react";
import ReactDom from "react-dom";
import { Fragment, useState } from "react";
import { table } from "console";

const AllListTable = (props) => {
  return (
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Task</th>
          <th>Priority</th>
          <th>Completed</th>
        </tr>
      </thead>
      <tbody>
        {props.tasks.map((item, index) => {
          return (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.priority}</td>
              <td>{item.completed.toString()}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default AllListTable;
