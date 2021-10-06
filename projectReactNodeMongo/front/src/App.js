import logo from './logo.svg'
import './App.css'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'

import Admin from './componnents/admin'
import Home from './componnents/home'
// import Statistic from './componnents/statistic'

function App () {
  return (
    <Router>
      <Switch>
        <Route path={'/:admin'} component={Admin}></Route>
        <Route path={'/'} component={Home}></Route>
        {/* <Route path={'/:statistic'} component={Statistic}></Route> */} */}
      </Switch>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>

        <li>
          <Link to='/admin'>Admin</Link>
        </li>
      </ul>
    </Router>
  )
}

export default App
