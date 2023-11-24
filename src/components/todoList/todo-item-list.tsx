import { TodoLists } from "./todoList";


type TodoItemList = {
  title: string;
  data: TodoLists[];
};


const TodoItemList = ({ ...props }: TodoItemList) => {
  return (
    <div className="flex flex-col justify-center items-center w-full rounded-md border border-slate-400">
      <div className="text-center bg-blue-500 text-white w-full">
        <h1>{props.title}</h1>
      </div>
      <div className="min-h-[300px] overflow-y-auto">
        <ul>
          {props.data.map((item, idx:number) => (
            <li key={idx}>{item.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoItemList;
