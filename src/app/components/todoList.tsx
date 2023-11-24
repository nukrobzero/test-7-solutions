"use client";

import { toDoData } from "@/ToDoData/data";
import TodoItem from "./todo-item";
import Input from "./input";
import { useEffect, useState } from "react";
import TodoItemList from "./todo-item-list";

export type TodoLists = {
  type: string;
  name: string;
};

const TodoList = () => {
  const [selectData, setSelectData] = useState("");
  const [newData, setNewData] = useState<TodoLists[]>([]);

  useEffect(() => {
    // Load newData from localStorage on component mount
    const getDataFromLocalStorage = () => {
      const storedData = localStorage.getItem("newData");
      if (storedData) {
        setNewData(JSON.parse(storedData));
      }
    };

    getDataFromLocalStorage();

    const intervalId = setInterval(() => {
      setNewData((prevData) => {
        // Delete old data from position 0
        const newDataCopy = [...prevData];
        newDataCopy.shift();
        return newDataCopy;
      });

      setNewData((newData) => {
        localStorage.setItem("newData", JSON.stringify(newData));
        return newData;
      });
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  const handleEnter = () => {
    const foundType = toDoData.find((item) => item.name === selectData);

    if (foundType) {
      setNewData((prevData) => [...prevData, foundType] as TodoLists[]);
      // Save newData to localStorage
      localStorage.setItem(
        "newData",
        JSON.stringify([...newData, foundType] as TodoLists[])
      );
    }
    setSelectData("");
  };


  return (
    <div className="grid grid-cols-12">
      <div className="col-span-2">
        <TodoItem
          toDoData={toDoData.filter(
            (item) => !newData.some((newItem) => newItem.name === item.name)
          )}
          onClick={setSelectData}
        />
      </div>
      <div className="col-span-10 col-start-3">
        <Input
          value={selectData}
          onChange={setSelectData}
          onClick={handleEnter}
        />
        <div className="flex flex-row gap-4">
          <TodoItemList
            title="Fruit"
            data={
              newData ? newData.filter((item) => item.type === "Fruit") : []
            }
          />
          <TodoItemList
            title="Vegetable"
            data={
              newData ? newData.filter((item) => item.type === "Vegetable") : []
            }
          />
        </div>
      </div>
    </div>
  );
};

export default TodoList;
