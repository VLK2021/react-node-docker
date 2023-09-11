import {Routes, Route} from 'react-router-dom';

import './App.css';
import {Layout} from "./Layout";
import {CreateUser, Home, Users} from "./components";


function App() {

  return (
    <div className="App">
        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path={'users'} element={<Users/>}/>
                <Route path={'create-user'} element={<CreateUser/>}/>
            </Route>
        </Routes>
    </div>
  );
}

export {App};
