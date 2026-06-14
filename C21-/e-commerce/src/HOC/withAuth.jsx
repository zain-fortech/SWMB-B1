import React, { useContext } from "react";
import { AuthContext } from "../context/auth-context";
import { useNavigate } from "react-router-dom";

export function withAuth(Component) {
  return function ProtectedComponent(props) {
    const { user } = useContext(AuthContext);

    const navigate = useNavigate();

    if (!user) {
      return (
        <p>
          Please login to view this page.{" "}
          <span
            className="underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Go to Login.
          </span>
        </p>
      );
    }

    return <Component {...props}></Component>;
  };
}

/**
 * HOC tasts:
 * Accepts a react Component
 * Performs some business decisions
 * Return the accepted component as it is
 */
