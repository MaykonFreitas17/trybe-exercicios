import './App.css';

const tasks = ['Walking', 'Player Volleyball', 'Sleep', 'Drink Coffee'];

const Task = (value) => {
  return (
    <li> {value} </li>
  );
};

function App() {
  return (
    <ol> 
      {tasks.map((task) => Task(task))}
    </ol>
  );
}

export default App;
