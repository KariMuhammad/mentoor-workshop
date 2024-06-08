import { useState } from "react";
import { Todo } from "../../utils";

export type TodoListFormProps = {
  // props go here
  onAddItem: (item: Todo) => void;
};

export default function TodoListForm(props: TodoListFormProps) {
  const [item, setItem] = useState<string>("");

  return (
    <>
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-lg overflow-hidden mt-16">
        <div className="px-4 py-2">
          <h1 className="text-gray-800 font-bold text-2xl uppercase">
            To-Do List
          </h1>
        </div>
        <form className="w-full max-w-sm mx-auto px-4 py-2">
          <div className="flex items-center border-b-2 border-teal-500 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              type="text"
              placeholder="Add a task"
              onChange={(e) => setItem(e.target.value)}
            />
            <button
              className="flex-shrink-0 bg-teal-500 hover:bg-teal-700 border-teal-500 hover:border-teal-700 text-sm border-4 text-white py-1 px-2 rounded"
              type="button"
              onClick={() =>
                props.onAddItem({
                  id: +Math.random().toFixed(2) * 100,
                  text: item,
                  isCompleted: false,
                })
              }
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
