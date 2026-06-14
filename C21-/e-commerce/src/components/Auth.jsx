import { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

export function Auth() {
  const { logout, user } = useContext(AuthContext);

  const navigate = useNavigate();

  return (
    <button className="cursor-pointer">
      {user && (
        <strong className="text-red-400" onClick={() => logout()}>
          Logout
        </strong>
      )}

      {!user && (
        <strong className="" onClick={() => navigate("/login")}>
          Log in
        </strong>
      )}
    </button>
  );
}
