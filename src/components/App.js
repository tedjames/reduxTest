import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getUsers } from '../redux/actions'

class App extends Component {
  componentWillMount() {
    console.log(this.props);
    this.props.getUsers();
  }

  render() {
    if (this.props.users[1]) {
      this.props.users.map((user) => {
        console.log("USER FOUND!");
        console.log(user.email);
        return <p key={user.id}>USER FOUND: {user.email}</p>
      });
    } else {
      return <p>NO USERS FOUND</p>
    }
  }
}

const mapStateToProps = state => {
  return {
    users: state.admin.users
  };
};

export default connect(mapStateToProps, { getUsers })(App);
