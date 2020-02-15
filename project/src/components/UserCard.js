import React from 'react';

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
                <div>
                    <h1>{res.login}</h1>
                    <img src={res.avatar_url} />
                </div>
            ))}
          </header>
        </div>
      );
    }
    
  }
  
  export default UserCard;
  