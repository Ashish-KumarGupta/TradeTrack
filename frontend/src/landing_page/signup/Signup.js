import React from "react";

const Signup = () => {
  return (
    <div style={styles.container}>
      <form style={styles.form}>
        <h2>Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          style={styles.input}
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          style={styles.input}
        />

        <input
          type="password"
          name="password"
          placeholder="Password"
          style={styles.input}
        />

        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f4f4f4"
  },
  form: {
    backgroundColor: "#fff",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
    width: "300px",
    display: "flex",
    flexDirection: "column"
  },
  input: {
    marginBottom: "15px",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    padding: "10px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer"
  }
};

export default Signup;
