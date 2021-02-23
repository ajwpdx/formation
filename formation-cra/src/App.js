
import Home from './components/pages/Home'
import Rules from './components/pages/Rules'
import PrintPlay from './components/pages/PrintPlay'
import {Route, Redirect, Switch} from 'react-router-dom' 

//styles
import './styles/index.scss'


function App() {
  return (
    <div className="App">
    
    <Switch>
    
    <Route path = "/rules" component = {Rules}/>
    <Route path = "/print-play" component = {PrintPlay} />
    <Route path= "/" component= {Home}/>


    </Switch>


    </div>
  );
}

export default App;
