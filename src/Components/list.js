import React from "react";
import ReactDom from "react-dom";
import { Fragment } from "react";

const List = (props) => {
  return (
    <ul>
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

        return (
          <li key={index} /* onClick={Toggle} */ className="mt-4">
            {item.name}
            <button
              className="btn-success ml-3 low"
              id={index}
              onClick={OnLowClick}
            >
              🔻
            </button>
            <button
              className="btn-warning ml-3 medium"
              id={index}
              onClick={OnMediumClick}
            >
              Medium
            </button>
            <button
              className="btn-danger ml-3 high"
              id={index}
              onClick={OnHighClick}
            >
              🔺
            </button>
            <button
              className="btn-danger ml-3 delete"
              id={index} /* onClick={OnDeleteClick} */
            >
              ✖
            </button>
          </li>
        );
      })}
    </ul>
  );
};
export default List;
