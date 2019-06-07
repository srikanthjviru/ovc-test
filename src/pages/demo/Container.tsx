import React, { Component } from 'react';
import { IUser } from '../../interfaces';
import './Demo.css';

interface IProps {
  users: IUser[];
  loadUsers: () => void;
}

class Demo extends Component<IProps> {
  componentDidMount() {
    this.props.loadUsers();
  }

  render() {
    const { users } = this.props;
    return (
      <table style={{ maxWidth: 800, margin: '0px auto' }}>
        <thead>
          <tr>
            <th style={{ textAlign: 'left' }}>Name</th>
            <th style={{ textAlign: 'left' }}>Email</th>
            <th style={{ textAlign: 'left' }}>City</th>
            <th style={{ textAlign: 'left' }}>Company</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={String(user.id)}>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.address.city}</td>
              <td>{user.company.name}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}

export default Demo;
