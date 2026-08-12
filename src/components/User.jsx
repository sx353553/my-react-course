import { Link } from "react-router-dom";

function User({ id, name, email, username }) {
  return (
    <Link to={`/users/${id}`}>
      <div>
        <div>{id}</div>
        <div>{name}</div>
        <div>{email}</div>
        <div>{username}</div>
      </div>
    </Link>
  );
}

export default User;