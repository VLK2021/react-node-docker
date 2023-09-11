import './App.css';
import {useEffect, useState} from "react";


function App() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://localhost/api/users')
            .then(response => response.json())
            .then(val => setUsers(val))
    }, []);

  return (
    <div className="App">
      hello from app!!!!!!!
    </div>
  );
}

export {App};
