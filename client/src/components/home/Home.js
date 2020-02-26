import React, { Component } from 'react';
import { MyContext } from '../../Context';
import PetPreview from '../varios/PetPreview';


class Home extends Component {
  
  async componentDidMount() {
    if( !this.context.state.userLogged ) this.props.history.push('/login')
    await this.context.getPets()
  }

  
  render() {
    const { pets } = this.context.state
    return (
      <MyContext.Consumer>
        { context => (
          <>
            <header><h2>Search</h2></header>
            <div className="search_pets">
              {pets.map((pet, i) => <PetPreview key={i} pet={pet} />)}
            </div>
          </>
        )}
      </MyContext.Consumer>
    )
  }
}

export default Home;

Home.contextType = MyContext