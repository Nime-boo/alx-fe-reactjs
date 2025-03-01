import { createContext } from 'react';

// Create UserContext with a default value for better debugging
export const UserContext = createContext({
  name: "",
  email: "",
  age: null,
  bio: ""
});
