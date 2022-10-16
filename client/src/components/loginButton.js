import styles from "./loginButton.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const LoginButton = () => {
  const { loginWithRedirect, logout, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <p>Loading In Progress ...</p>;
  }

  if (isAuthenticated) {
    return (
      <button
        className={styles.button}
        onClick={() => logout({ returnTo: window.location.origin })}
      >
        <b>Log Out </b>
      </button>
    );
  }

  return (
    <button className={styles.button} onClick={() => loginWithRedirect()}>
      <b>Log In</b>
    </button>
  );
};

export default LoginButton;
