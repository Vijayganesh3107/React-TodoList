import React from "react";
import ReactDom from "react-dom";
import { Fragment, useState } from "react";
import ListTable from "./Components/listTable";
import InputField from "./Components/InputField";
import LowTable from "./Components/LowTable";
import MediumTable from "./Components/MediumTable";
import AllListTable from "./Components/AllListTable";
import HighTable from "./Components/HighTable";
import CompltedTaskTable from "./Components/CompltedTaskTable";

var App = (props) => {
  //   var count = 0;
  //   var pendingcount = 0;
  //   var completedtaskcount = localStorage.getItem("CompletedCount");
  //   var AllTasks = localStorage.getItem("AllTasks");
  const [tasks, setTask] = useState([]);

  const ToggleTask = (indexfromList) => {
    setTask(
      tasks.map((task, index) => {
        if (index === indexfromList) {
          return {
            ...task,
            completed: !task.completed,
          };
        }
        return task;
      })
    );
  };
  const add = (textValue) => {
    setTask([
      ...tasks,
      {
        name: textValue,
        priority: "medium",
        completed: false,
      },
    ]);
  };
  //   pendingcount = AllTasks - completedtaskcount;
  const ChangtoLow = (listindex) => {
    setTask(
      tasks.map((item, index) => {
        if (index == listindex) {
          return {
            ...item,
            priority: "low",
          };
        }
        return item;
      })
    );
  };

  const ChangtoMedium = (listindex) => {
    setTask(
      tasks.map((item, index) => {
        if (index == listindex) {
          return {
            ...item,
            priority: "medium",
          };
        }
        return item;
      })
    );
  };

  const ChangtoHigh = (listindex) => {
    setTask(
      tasks.map((item, index) => {
        if (index === listindex) {
          return {
            ...item,
            priority: "high",
          };
        }
        return item;
      })
    );
  };

  const DeleteTask = (itemindex) => {
    setTask(tasks.filter((item, index) => index != itemindex));
  };

  //   var pendingTaskCount = tasks.filter((item) => !item.completed).length;

  return (
    <Fragment>
      <h1>{props.title}</h1>
      <InputField add={add}></InputField>
      <ListTable
        items={tasks}
        ChnagetoLow={ChangtoLow}
        ChangtoMedium={ChangtoMedium}
        ChangetoHigh={ChangtoHigh}
        ToggleTask={ToggleTask}
        DeleteTask={DeleteTask}
      ></ListTable>
      <div className="row">
        <h1>All Tasks</h1>
        <AllListTable tasks={tasks}></AllListTable>
      </div>
      <div className="row">
        <div className="col-6 ">
          <h2 className="mt-5">Pending Low Priority Tasks</h2>
          <LowTable tasks={tasks}></LowTable>
        </div>
        <div className="col-6">
          <h2 className="mt-5">Pending Medium Priority Tasks</h2>
          <MediumTable tasks={tasks}></MediumTable>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <h2 className="mt-5">Pending High Priority Tasks</h2>
          <HighTable tasks={tasks}></HighTable>
        </div>
        <div className="col-6">
          <h2 className="mt-5">All Complted Tasks</h2>
          <CompltedTaskTable tasks={tasks}></CompltedTaskTable>
        </div>
      </div>
    </Fragment>
  );
};
const id = document.querySelector("#id");

ReactDom.render(<App title="ToDo List" />, id);
