import React from 'react';
import UserCard from './UserCard';

class UserList extends React.Component {

    constructor() {
        super();
        this.state ={ info :[]
        };}
    
    render(props) {
      console.log(props)
      return (
        <div className="UserList">
          <header className="UserList-header">
            <h1>Hello {this.props.info.login}!</h1>
            <img src={this.props.info.avatar_url} />
            <p>{this.props.info.name}</p>
            <p>{this.props.info.location}</p>
            <p>Here is a list of your followers:</p>
            <UserCard />
          </header>
        </div>
      );
    }
    
  }
  
  export default UserList;
  