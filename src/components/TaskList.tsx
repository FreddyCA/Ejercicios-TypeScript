interface Props {
    task: Task[]
}

const TaskList:React.FC<>= ({}) => {
  return (
    <div>
      {tasks.map((task) => (
        <div key={task.id}>
          <h2>{task.title}</h2>
        </div>
      ))}
    </div>
  );


//   30.33
};

export default TaskList;
