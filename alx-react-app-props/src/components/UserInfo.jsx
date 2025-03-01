import { useContext } from 'react';
import UserContext from './UserContext'; // Import UserContext

const UserInfo = () => {
  const { name, email } = useContext(UserContext); // Get data from context

  return (
    <div>
      <h2>{name}</h2>
      <p>Email: {email}</p>
    </div>
  );
};

export default UserInfo;
