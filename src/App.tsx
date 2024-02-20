// import FetchPokeApi from "./components/FetchPokeApi";
import { useState } from "react";
// import FetchPokeApiSimple from "./components/FetchPokeApiSimple";
// import FormularioContacto from "./components/FormularioContacto";

interface Task {
  id: number;
  title: string;
  description: string;
  completed: boolean;
}

const App = () => {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn React",
      description: "Learn React",
      completed: false,
    },
  ]);

  return (
    <div className="bg-dark  text-white" style={{ height: "100vh" }}>
      <nav
        className="navbar navbardark bg-primary"
        style={{ height: "100px", fontSize: "1.5rem" }}
      >
        <div className="container">
          <a href="/" className="navbar-brand">
            <span className=" text-white">Inicio by React</span>
          </a>
        </div>
      </nav>

      <main className="container p-4">
        
        
      </main>

      {/* <FormularioContacto /> */}
      {/* <FetchPokeApi /> */}
      {/* <FetchPokeApiSimple /> */}
    </div>
  );
};

export default App;
