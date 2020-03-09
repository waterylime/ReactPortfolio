import React from 'react';

import './App.css';
import Navbar from './componants/navbar/navbar';
import About from './pages/about';
import Contact from './pages/contact';
import Portfolio from './pages/portfolio';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className="App">
				{/* <img src={logo} className="App-logo" alt="logo" /> */}

				<div className="body">
					<div className="content">
						<Navbar />
					</div>
					<Route exact path="/" component={About} />
					<Route exact path="/about" component={About} />
					<Route exact path="/contact" component={Contact} />
					<Route exact path="/portfolio" component={Portfolio} />
					{/* <Route exact path="/search" component={Search} /> */}
					<Route exact path="/Portfolio-React/" component={About} />
				</div>
			</div>
		</Router>
	);
}

export default App;
