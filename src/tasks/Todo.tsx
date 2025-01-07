export const Todo = () => {
 return (
  <div>
   <h1>To-Do List</h1>
   <ul>
    <li>Dodaj task (wyczyść pole)</li>
    <li>Usuń task</li>
    <li>Zaznacz jako zakończony</li>
   </ul>
   <input type="text" placeholder="Add a new task" />
   <button>Add</button>
   <ul>
    <li style={{ textDecoration: false ? "line-through" : "none" }}>
     Wynieść śmieci
     <button>{false ? "Undo" : "Complete"}</button>
     <button>Delete</button>
    </li>
   </ul>
  </div>
 );
};
