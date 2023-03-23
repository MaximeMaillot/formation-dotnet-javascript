import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Navbar from './Components/NavbarComponent/Navbar';
import { useState, useEffect } from "react";

function App() {
  //const [contacts, updateContacts] = useState(() => fetchData())
  const [contacts, updateContacts] = useState(localStorage.getItem('contacts') ? JSON.parse(localStorage.getItem('contacts')) : []);
  //const [contacts, updateContacts] = useState([{ nom: "jacques", prenom: "michel", email: "test@t.com", phone: "05215454" }, { nom: "gzher", prenom: "fefze", email: "gzgzgz@t.com", phone: "546155" }])

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);
  return (
    <div className="App">
      <Navbar contacts={contacts} updateContacts={updateContacts} />
    </div>
  );
}

export default App;
