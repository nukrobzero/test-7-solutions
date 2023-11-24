type TodoItemProps = {
  toDoData: {
    type: string;
    name: string;
  }[];
  onClick: (name: string) => void;
};

const TodoItem = ({ toDoData, onClick }: TodoItemProps) => {
  return (
    <div>
      <ul>
        {toDoData.map((data, idx) => (
          <li key={idx} onClick={() => onClick(data.name)} className="cursor-pointer hover:bg-blue-100">
            {data.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItem;
