import './App.css';
import Movies from './components/Movies'
import React, {Component} from 'react'

class App extends Component {

  state = {
    movies: [],
    loading: false
  }

  componentDidMount() {
    
  }

  render() {
  return (
    <div>
      <Movies />
    </div>
  )
}
}

export default App;
