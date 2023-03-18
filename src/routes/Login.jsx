import { useState } from 'react';
import styles from '../styles/Login.module.css';
import { useAuthContext } from '../context/AuthContext';

const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuthContext();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username);
    console.log(username);
  };
  return (
    <div className={styles.container}>
      <h1>Login</h1>
      <div className={styles.formWrapper}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button className={styles.btn}>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;