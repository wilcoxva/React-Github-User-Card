import React from 'react';
import styled from 'styled-components';

class UserCard extends React.Component {

    constructor() {
        super();
        this.state ={ followers :[]
        };}

    componentDidMount() {
        fetch("https://api.github.com/users/adamhinckley/followers")
            .then(res => res.json())
            .then(followers => this.setState({ followers }))
            .catch(err => console.log("Error:", err));
        }
    
    render() {
      console.log(this.state.followers)
      return (
        <div className="UserCard">
          <header className="UserCard-header">
            {this.state.followers.map(res => (
                <Div>
                    <h1>{res.login}</h1>
                    <img src={res.avatar_url} />
                </Div>
            ))}
          </header>
        </div>
      );
    }
    
  }
  
  export default UserCard;
  
  const Div = styled.div`
    background-color: gray;
    border-radius: 25px;
  `