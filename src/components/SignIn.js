"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import axiosInstance from "../lib/axiosInstance"; // Adjust the import path as necessary

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error state before new submission

    try {
      const response = await axiosInstance.post("/authenticate/sign-in", {
        email,
        password,
      });

    //   setError(response.message);

      if (response.status === 200) {
        // Redirect to dashboard on successful login
        router.push("/admin/dashboard");
      } else {
        setError(response.data.message || "Invalid credentials");
      }
    } catch (error) {
      setError(error.response?.data?.message || "An unexpected error occurred");
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <div>
      <h2>Sign In</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="text"
            // type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
