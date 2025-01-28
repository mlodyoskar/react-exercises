import {useState} from "react";

type Task = {
    id: number,
    name: string,
    isCompleted: boolean
}

export const Todo = () => {
    const [task, setTask] = useState('')
    const [tasks, setTasks] = useState<Task[]>([])

    const addTask = () => {
        if (task === '') {
            return
        }
        setTasks((tasks) => [...tasks, {name: task, isCompleted: false, id: Date.now()}])
        setTask('')
    }

    const deleteTask = (id: number) => {
        setTasks((tasks) =>
            tasks.filter((task) => task.id != id)
        )
    }

    const completeTask = (id: number) => {
        setTasks((tasks) => tasks.map((task) =>
            task.id === id ? {...task, isCompleted: !task.isCompleted } : task))
    }

 return (
  <div>
   <h1>To-Do List</h1>
   <ul>
    <li>Dodaj task (wyczyść pole)</li>
    <li>Usuń task</li>
    <li>Zaznacz jako zakończony</li>
   </ul>
   <input type="text" placeholder="Add a new task" onChange={e =>setTask(e.target.value)} value={task}/>
   <button onClick={() => {
        addTask()
   }}>Add</button>
   <ul>
       {tasks.map((task) => (
           <li style={{ textDecoration: task.isCompleted ? "line-through" : "none" }} key={task.id}>{task.name}
               <button onClick={() => {
                   completeTask(task.id)
               }}>{task.isCompleted ? "Undo" : "Complete"}</button>
               <button onClick={() => {
                   deleteTask(task.id)
               }}>Delete</button>
           </li>))}
   </ul>
  </div>
 );
};
