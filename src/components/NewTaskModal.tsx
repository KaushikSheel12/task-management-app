import React, { ChangeEvent, FormEvent, useState } from "react";
import { ModalWrapper } from "./ModalWrapper";
import { HiX } from "react-icons/hi";
import { useDispatch, useSelector } from "react-redux";
import { toggle } from "../redux/features/modal/newTaskModalSlice";
import { motion } from "framer-motion";
import { Button } from "./Button";

import { Dropdown } from "./Dropdown";
import { v4 as uuid } from "uuid";
import { RootState } from "../redux/store";
import { INewTask } from "../interface/IBoardsColumns";
import { addTask } from "../redux/features/boards-coloumns/newBoardSlice";

export const NewTaskModal = () => {
  const dispatch = useDispatch();
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [newTaskDesc, setNewTaskDesc] = useState("");

  const [subtasks, setSubtasks] = useState([
    {
      id: uuid(),
      content: "",
    },
  ]);
  const [currentNewTaskStatus, setCurrentNewTaskStatus] = useState("");
  const boards = useSelector((state: RootState) => state.boards.selectedBoard);
  const statuses = boards?.columns?.map((column) => column.columnTitle);

  const options = statuses?.map((status: string) => ({
    value: status,
    label: status,
  }));

  const handleSubtasks = () => {
    const newSubtask = {
      id: uuid(),
      content: "",
    };
    setSubtasks([...subtasks, newSubtask]);
  };

  const handleRemoveSubtask = (subtaskId: string) => {
    const removeSubtask = subtasks.filter(({ id }) => id !== subtaskId);
    setSubtasks(removeSubtask);
  };

  const handleSubtaskChange = (index: number, value: string) => {
    const newSubtasks = [...subtasks];
    newSubtasks[index].content = value;
    setSubtasks(newSubtasks);
  };

  const handleAddNewTask = () => {
    const newTask = {
      id: uuid(),
      title: newTaskTitle,
      desc: newTaskDesc,
      subtasks,
      status: currentNewTaskStatus,
    } as INewTask;
    dispatch(addTask(newTask));
  };

  return (
    <ModalWrapper>
      <div className="relative">
        <h3 className="text-[18px]">Add New Task</h3>
        <div>
          <div className="mt-[24px]">
            <label
              htmlFor="title"
              className="block text-[12px] mb-[8px] text-gray-100"
            >
              Title
            </label>
            <input
              id="title"
              type="text"
              placeholder="e.g. Take Coffee Break"
              className="h-[40px] w-full bg-none border border-white-100 focus:outline-none px-2 text-[13px] font-normal"
              value={newTaskTitle}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setNewTaskTitle(e.currentTarget.value)
              }
            />
          </div>
          <div className="mt-[24px]">
            <label
              htmlFor="description"
              className="block text-[12px] mb-[8px] text-gray-100"
            >
              Description
            </label>
            <textarea
              id="description"
              placeholder="e.g. It's always good to take a break. This 15 minute break will 
              recharge the batteries a little."
              className="h-[40px] w-full bg-none border border-white-100 focus:outline-none px-2 text-[13px] font-normal min-h-[112px] p-[8px] resize-none"
              value={newTaskDesc}
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setNewTaskDesc(e.currentTarget.value)
              }
            />
          </div>
          <div>
            <h3 className="block text-[12px] mb-[8px] text-gray-100 mt-[24px]">
              Subtasks
            </h3>
            <div className=" max-h-[135px] h-fit overflow-y-auto">
              {subtasks?.map((item, index) => (
                <div
                  key={item.id}
                  className="flex items-center space-x-2 mb-2 "
                >
                  <motion.input
                    initial={{
                      opacity: 0,
                    }}
                    animate={{
                      opacity: 1,
                    }}
                    id="name"
                    type="text"
                    placeholder="e.g. Web Design"
                    className="h-[40px] w-full bg-none border border-white-100 focus:outline-none px-2 text-[13px] font-normal block"
                    onChange={(e: FormEvent<HTMLInputElement>) =>
                      handleSubtaskChange(index, e.currentTarget.value)
                    }
                  />
                  <HiX
                    onClick={() => handleRemoveSubtask(item.id)}
                    className="cursor-pointer"
                    size={20}
                  />
                </div>
              ))}
            </div>
            <Button
              onClick={handleSubtasks}
              buttonColor="gray-200 "
              className="w-full text-purple-200 mt-[12px]"
              title="+ Add New subtasks"
            />
            <h3 className="block text-[12px] mb-[8px] text-gray-100 mt-[24px]">
              Status
            </h3>
            <div className="mb-2">
              <Dropdown
                options={options}
                setCurrentNewTaskStatus={setCurrentNewTaskStatus}
              />
            </div>
            <Button
              onClick={() => {
                dispatch(toggle(true));
                handleAddNewTask();
              }}
              title="Create Task"
              className={"w-full mt-[12px]"}
            />
          </div>
        </div>
        <HiX
          onClick={() => dispatch(toggle(false))}
          size={25}
          className="absolute top-2 right-5 cursor-pointer"
        />
      </div>
    </ModalWrapper>
  );
};
