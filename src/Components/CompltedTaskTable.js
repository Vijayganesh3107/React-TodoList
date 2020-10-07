import React from "react";
import ReactDom from "react-dom";
import { Fragment, useState } from "react";
import { table } from "console";

const CompltedTaskTable = (props) => {
  var count = 0;
  return (
    <Fragment>
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
            if (item.completed == true) {
              count++;
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.priority}</td>
                  <td>{item.completed.toString()}</td>
                </tr>
              );
            }
            localStorage.setItem("CompletedCount", count);
          })}
        </tbody>
      </table>
      <h3>The complted task:{count}</h3>
    </Fragment>
  );
};

export default CompltedTaskTable;
