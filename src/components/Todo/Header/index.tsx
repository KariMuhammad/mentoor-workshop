import { useContext } from "react";
import noteImage from "../../../assets/note.png";
import { SwitcherContext } from "../../../context/SwitcherContext";

function TodoHeader() {
  const { currentApp } = useContext(SwitcherContext);
  return (
    <div className="">
      <h1 className="flex items-center justify-between text-center text-white-800 font-bold text-4xl uppercase">
        <div>
          To-Do List
          <span className="text-sm text-slate-600">({currentApp})</span>
        </div>

        <img src={noteImage} width={"50px"} height={"50px"} />
      </h1>
    </div>
  );
}

export default TodoHeader;
