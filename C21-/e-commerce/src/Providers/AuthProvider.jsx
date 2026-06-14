import { useState } from "react";
import { USRES } from "../common/constants";
import { AuthContext } from "../context/auth-context";

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (username, password) => {
    const foundUser = USRES.find(
      (user) => user.username == username && user.password == password
    );

    console.log({ foundUser });

    if (foundUser) {
      setUser(foundUser);

      return true;
    }

    return false;
  };

  const logout = () => {
    setUser(null);
  };

  return <AuthContext value={{ user, login, logout }}>{children}</AuthContext>;
}
