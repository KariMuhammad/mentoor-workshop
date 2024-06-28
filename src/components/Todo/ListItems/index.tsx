import useTodosState from "../../../hooks/useTodosState";
import TodoItem from "../Item";
import { Todo } from "../../../types";

export default function TodoListItems() {
  // I want get todos from the state managment based on the switcher what is
  const { todos } = useTodosState();

  return (
    <ul className="divide-y divide-gray-200 px-4">
      {todos &&
        todos.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}

      {!todos.length && (
        <div className="relative max-w-7xl mx-auto">
          <div className="absolute -inset-1 bg-gradient-to-r from-[#3fb7b3] to-[#16D6FA] rounded-lg blur opacity-85"></div>

          <div className="text-center relative p-4 my-4 bg-[#5cdff6e1] ring-1 ring-gray-900/5 rounded-lg leading-none">
            No Todos Found
          </div>
        </div>
      )}
    </ul>
  );
}
