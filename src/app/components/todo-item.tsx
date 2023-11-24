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
          <li key={idx} onClick={() => onClick(data.name)}>
            {data.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoItem;
