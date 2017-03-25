import React from 'react';

export default class Session extends React.Component{
  constructor(props){
    super(props);
    this.state = {usuario:[]}
  }
  componentWillMount(){
    fetch('http://localhost:3000/api/users/')
      .then(function(response){
        return response.json()
      })
      .then(function(usuario){
        this.setState({usuario:usuario})
      })
  }

  render(){
    console.log(this.state.usuario);
    if(this.state.usuario > 0){
      return(
        <div>te has logeado como {this.state.usuario[0].username}</div>
      )
    }else{
      return(
        <div>No estas logeado</div>
      )
    }
  }
}
