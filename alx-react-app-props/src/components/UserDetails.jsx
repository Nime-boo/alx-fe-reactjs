import { useContext } from 'react';
import UserContext from './UserContext'; // Import UserContext

const UserDetails = () => {
  const { name, age, bio } = useContext(UserContext); // Get data from context

  return (
    <div>
      <h2>User Details</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
      <p>Bio: {bio}</p>
    </div>
  );
};

export default UserDetails;
