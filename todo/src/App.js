import { useState } from "react";

const AnythingYouWant = (props) => {
  return (
    <div className="break">
      <p>{props.text}</p>
      <i className="fa fa-trash"></i>
    </div>
  );
};

// function MyTODO() {
//   const [todo, setTodo] = useState("");
//   const todos = [
//     "first to",
//     "second todo ",
//     "third todo",
//     "this is another",
//     "another one",
//   ];
//   const compp = [];
//   for (let y of todos) {
//     compp.push(<AnythingYouWant text={y} />);
//   }
//   return (
//     <main>
//       <div className="color">
//         <h1>My To-Do List</h1>
//         <section className="insider">
//           <div className="text">
//             <input
//               type="text"
//               value={todo}
//               onChange={(e) => setTodo(e.target.value)}
//             />
//             <button onClick={() => console.log(todo)}>Add</button>
//           </div>
//           <section className="subject">{compp}</section>
//         </section>
//       </div>
//     </main>
//   );
// }

function MyTODO() {
  const [val, setVal] = useState("");
  const [todos, setTodos] = useState([]);
  const compp = [];
  for (let y of todos) {
    compp.push(<AnythingYouWant text={y} />);
  }
  return (
    <main>
      <div className="color">
        <h1>My To-Do List</h1>
        <section className="insider">
          <div className="text">
            <input
              type="text"
              value={val}
              onChange={(e) => setVal(e.target.value)}
            />
            <button onClick={() => setTodos([...todos, val])}>Add</button>
          </div>
          <section className="subject">{compp}</section>
        </section>
      </div>
    </main>
  );
}

export default MyTODO;
