import React, { FormEvent, useState } from "react";
import { Button } from "./Button";
import { ModalWrapper } from "./ModalWrapper";

import { HiX } from "react-icons/hi";
import { useDispatch} from "react-redux";
import { toggle } from "../redux/features/modal/newBoardSlice";
import { v4 as uuid } from "uuid";
import { motion } from "framer-motion";
import { IBoards, IColumns } from "../interface/IBoardsColumns";
import { addToBoard } from "../redux/features/boards-coloumns/newBoardSlice";


export const NewBoardModal = () => {



  const [columns, setColumns] = useState<IColumns[]>([
    {
      columnTitle: "",
      content: [],
      id: uuid(),
    },
  ]);
  const [boardTitle, setBoardTitle] = useState("");
  const dispatch = useDispatch();

  const handleInputChange = (index: number, value: string) => {
    const newInputValues = [...columns];

    newInputValues[index].columnTitle = value;
    setColumns(newInputValues);
  };

  const handleAddNewColumns = () => {
    const newColumn = {
      columnTitle: "",
      content: [],
      id: uuid(),
    } as unknown as IColumns;
    setColumns([...columns, newColumn]);
  };

  const handleFormSubmit = (e: FormEvent) => {
    e.preventDefault();
  };

  const handleRemoveInput = (id: string) => {
    const removeClickedInput = columns.filter((column) => column.id != id);
    setColumns(removeClickedInput);
  };

  const handleCreateNewBoard = () => {
    const board = 
      {
        id: uuid(),
        title: boardTitle,
        columns,
      }
    


    setBoardTitle("");
    setColumns([]);
    dispatch(addToBoard(board as unknown as IBoards));
  };

 

  return (
    <ModalWrapper>
      <div className="relative">
        <h3 className="text-[18px]">Add New Board</h3>
        <form onSubmit={handleFormSubmit}>
          <div className="mt-[24px]">
            <label
              htmlFor="name"
              className="block text-[12px] mb-[8px] text-gray-100"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="e.g. Web Design"
              className="h-[40px] w-full bg-none border border-white-100 focus:outline-none px-2 text-[13px] font-normal"
              value={boardTitle}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setBoardTitle(e.currentTarget.value)
              }
            />
          </div>
          <div className={`mt-[24px]  max-h-[400px] h-fit overflow-y-auto`}>
            <label
              htmlFor="name"
              className="block text-[12px] mb-[8px] text-gray-100"
            >
              Columns
            </label>

            {columns.map(({ id, columnTitle }, index) => (
              <div key={id} className={"flex items-center space-x-2 mb-2"}>
                <motion.input
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  value={columnTitle}
                  id="name"
                  type="text"
                  placeholder="e.g. Web Design"
                  className="h-[40px] w-full bg-none border border-white-100 focus:outline-none px-2 text-[13px] font-normal block"
                  onChange={(e: React.FormEvent<HTMLInputElement>) =>
                    handleInputChange(index, e.currentTarget.value)
                  }
                />
                <HiX
                  className="cursor-pointer"
                  onClick={() => handleRemoveInput(id)}
                  size={20}
                />
              </div>
            ))}
          </div>

          <div className="flex flex-col space-y-3 mt-4">
            <Button
              onClick={handleAddNewColumns}
              title="+ Add New Column"
              className={"w-full my-3 bg-purple-100 "}
            />
            <Button
              onClick={handleCreateNewBoard}
              title="+ Create New Board"
              className={"w-full "}
            />
          </div>
        </form>
        <HiX
          onClick={() => dispatch(toggle(false))}
          size={25}
          className="absolute top-2 right-5 cursor-pointer"
        />
      </div>
    </ModalWrapper>
  );
};
