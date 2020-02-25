import React, { Component } from 'react';
import { MyContext } from '../../Context';


class Home extends Component {
  
  componentDidMount() {
    if( !this.context.usserLogged ) this.props.history.push('/login')
  }
  render() {
    console.log(this.context)
    return (
      <MyContext.Consumer>
        { context => (
          <p>Sigue siendo el home</p>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Home;

Home.contextType = MyContext