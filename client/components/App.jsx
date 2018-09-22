import React from 'react'
import Userinput from './Userinput'
import Listofusers from './Listofusers'
import { getUsers } from '../actions/users'
import { connect } from 'react-redux';

class App extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.dispatch(getUsers())
  }


  render() {
    return (
      <div className='app-container'>
        <Userinput />
        <Listofusers />
      </div>
      )}
}

export default connect(mapStateToProps)(App)