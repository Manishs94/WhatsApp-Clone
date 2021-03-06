import React from 'react';
import "./App.css";
import Sidebar from './Sidebar';
import Chat from "./Chat";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from "./Login";
import {useStateValue} from "./StateProvider";


function App() {
	const [{ user }] = useStateValue();
  
	return (
	  // BEM naming convention
	  <div className="app">
		{!user ? (
		  <Login />
		) : (
		  <div className="app__body">
			<Router>
			  <Sidebar />
  
			  <>
				<Route path="/rooms/:roomId">
				  <Chat />
				</Route>
				<Route path="/">
				  <Chat />
				</Route>
			  </>
			</Router>
		  </div>
		)}
	  </div>
	);
  }
  
  export default App;