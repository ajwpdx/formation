
import Home from './components/pages/Home'
import Rules from './components/pages/Rules'
import PrintPlay from './components/pages/PrintPlay'
import Contact from './components/pages/Contact'
import Links from './components/pages/Links'
import { Route, Switch } from 'react-router-dom'

//styles
import './styles/index.scss'


function App() {
  return (
    <div className="App">

      <Switch>
        <Route path="/rules" component={Rules} />
        <Route path="/print-play" component={PrintPlay} />
        <Route path="/contact" component={Contact} />
        <Route path="/links" component={Links}/>
        <Route path="/" component={Home} />
      </Switch>


    </div>
  );
}

export default App;
