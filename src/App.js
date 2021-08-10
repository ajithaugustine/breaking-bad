
import './App.css';
import Home from './Pages/Home/Home';
import {BrowserRouter as Router ,Route,Switch} from 'react-router-dom'
import View from './Pages/View/View';
import Aboutme from './Pages/Aboutme/Aboutme';

function App() {
  return (
    <div className="App">

       <Router>
         <Switch>

            <Route path='/' exact> <Home/></Route>
            <Route path='/aboutme' exact> <Aboutme/></Route>
            <Route path='/view/:id' exact> <View/></Route>
            <Route path='*'> <h2>not found</h2></Route>

         </Switch>
       </Router>
    
    </div>
  );
}

export default App;
