import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import TodoListView from './Views/TodoListView/TodoListView';
import {
  faTrash,
  faCheck,
  faPenToSquare
} from "@fortawesome/free-solid-svg-icons";

import { library } from '@fortawesome/fontawesome-svg-core';
library.add(faTrash, faCheck, faPenToSquare)

function App() {
  return (
    <div>
      <TodoListView />
    </div>
  );
}

export default App;
