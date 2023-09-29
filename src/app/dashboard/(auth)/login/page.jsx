"use client";
import React from "react";
import styles from "./page.module.css";
import { signIn, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Login = () => {
  const session = useSession();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const email = e.target[0].value;
    const password = e.target[1].value;
    signIn("credentials", { email, password });
  };
  if (session.status === "loading") {
    return <p>Loading...</p>;
  }
  if (session.status === "authenticated") {
    router?.push("/dashboard");
  }
  if (session.status === "unauthenticated") {
    return (
      <div className={styles.container}>
        <form action="" className={styles.form} onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="email"
            className={styles.input}
            required
          />
          <input
            type="password"
            placeholder="password"
            className={styles.input}
            required
          />
          <button className={styles.button}>Login</button>
        </form>
        <button
          onClick={() => {
            signIn("google");
          }}
          className={styles.button + " " + styles.google}
        >
          Login with Google
        </button>
        <span className={styles.or}>- OR -</span>
        <Link className={styles.link} href="/dashboard/register">
          Create new account
        </Link>
      </div>
    );
  }
};

export default Login;
