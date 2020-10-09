import React from "react";
import ReactDom from "react-dom";
import { Fragment } from "react";

var count = 0;
const ListTable = (props) => {
  if (props.items.length == 0) count = 0;
  else count = props.items.length;
  localStorage.setItem("AllTasks", count);
  return (
    <Fragment>
      <h2>The Total tasks :{count}</h2>
      <table className="table table-stripped">
        <thead>
          <tr>
            <th>Taks</th>
            <th>Low Priority</th>
            <th>Medium Prioirty</th>
            <th>High Priority</th>
            <th>Remove task</th>
            <th>Complete Task</th>
          </tr>
        </thead>
        <tbody>
          {props.items.map((item, index) => {
            //   function Toggle(index){
            //       props.Toggle(index)

            //   }
            function OnLowClick(event) {
              props.ChnagetoLow(+event.currentTarget.id);
            }

            function OnMediumClick(event) {
              props.ChangtoMedium(+event.currentTarget.id);
            }

            function OnHighClick(event) {
              props.ChangetoHigh(+event.currentTarget.id);
            }
            function ToggleTask(event) {
              props.ToggleTask(+event.currentTarget.id);
            }

            function OnDeleteClick(event) {
              props.DeleteTask(+event.currentTarget.id);
            }

            return (
              <tr key={index}>
                <td key={index} /* onClick={Toggle} */ className="mt-4">
                  {item.name}
                </td>
                <td>
                  <button
                    className="btn-success ml-3 low"
                    id={index}
                    onClick={OnLowClick}
                  >
                    🔻
                  </button>
                </td>
                <td>
                  <button
                    className="btn-warning ml-3 medium"
                    id={index}
                    onClick={OnMediumClick}
                  >
                    Medium
                  </button>
                </td>
                <td>
                  <button
                    className="btn-danger ml-3 high"
                    id={index}
                    onClick={OnHighClick}
                  >
                    🔺
                  </button>
                </td>
                <td>
                  <button
                    className="btn-danger ml-3 delete"
                    id={index}
                    onClick={OnDeleteClick}
                  >
                    ✖
                  </button>
                </td>
                <td>
                  <button
                    className="btn-success ml-3 delete"
                    id={index}
                    onClick={ToggleTask}
                  >
                    👍
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Fragment>
  );
};
export default ListTable;
