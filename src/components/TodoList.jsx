export default function TodoList({ tasks }) {
  return (
    <div className="bg-white rounded-xl shadow-md p-6 mt-6">
      <h3 className="text-lg font-semibold mb-4">Today's Tasks</h3>
      <ul className="space-y-2">
        {tasks.map((task, idx) => (
          <li key={idx} className="flex items-center justify-between">
            <span className={task.completed ? 'line-through text-gray-400' : ''}>{task.task}</span>
            <span className="text-sm text-gray-500">{task.time}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
