import React from "react";
import ReactDom from "react-dom";
import { Fragment, useState } from "react";
import { table } from "console";

const MediumTable = (props) => {
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
            if (item.priority == "medium" && item.completed == false) {
              count++;
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.priority}</td>
                  <td>{item.completed.toString()}</td>
                </tr>
              );
            }
          })}
        </tbody>
      </table>
      <p className="text-right">
        <b>Pending Medium priority tasks:{count}</b>
      </p>
    </Fragment>
  );
};

export default MediumTable;
