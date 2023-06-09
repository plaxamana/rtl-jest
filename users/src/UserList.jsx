import PropTypes from "prop-types";

export default function UserList({ users }) {
  const renderedUsers = users.map((user) => (
    <tr key={user.email}>
      <td>{user.name}</td>
      <td>{user.email}</td>
    </tr>
  ));
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {renderedUsers}
      </tbody>
    </table>
  );
}

UserList.propTypes = {
  users: PropTypes.array,
};
