import React from "react";
import {
  KanbanComponent,
  ColumnsDirective,
  ColumnDirective,
} from "@syncfusion/ej2-react-kanban";
import { kanbanData, kanbanGrid } from "../data/dummy";
import { Header } from "../components";

const Kanban = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id="kanban"
        //Where to get data
        dataSource={kanbanData}
        //KeyField = todo/inprogress/testing/done
        keyField="Status"
        //headerfield= "Task1" contentField="Actual task"
        cardSettings={{ headerField: "Id", contentField: "Summary" }}
      >
        {/* Organizes the columns and grid for the Kanban */}
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => (
            <ColumnDirective key={index} {...item} />
          ))}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  );
};

export default Kanban;
