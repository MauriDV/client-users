import React from 'react';

export default class Session extends React.Component{
  constructor(props){
    super(props);
    this.state = {usuario:{}}
  }
  componentWillMount(){
    fetch('http://localhost:3000/api/users/session')
      .then(function(response){
        return response.json()
      })
      .then(function(usuario){
        this.setState({usuario:usuario})
      })
  }

  render(){
    console.log(this.state.usuario);
    if(this.state.usuario == {}){
      return(
        <div>te has logeado como {this.state.usuario.username}</div>
      )
    }else{
      return(
        <div>No estas logeado</div>
      )
    }
  }
}
