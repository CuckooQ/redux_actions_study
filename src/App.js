import "./App.css";
import Todo from "./pages/Todo";
import User from "./pages/User";

function App() {
  return (
    <div className="App">
      <main className="App-main">
        <User />
        <Todo />
      </main>
    </div>
  );
}

export default App;
