import React, { Component } from 'react';
import { MyContext } from '../../Context';


class Home extends Component {
  
  componentDidMount() {
    if( !this.context.state.userLogged ) this.props.history.push('/login')
  }

  
  render() {
    return (
      <MyContext.Consumer>
        { context => (
          <>
            <header><h2>Search</h2></header>
            <p>Sigue siendo el home</p>
          </>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Home;

Home.contextType = MyContext