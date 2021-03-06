import React from 'react';
import Head from 'next/head';
import { AiFillGithub, AiOutlineArrowRight } from "react-icons/ai";

import styles from '../styles/components/Login.module.css';

export default function Login () {
  return(
    <div className={styles.container}>
      <Head>
        <title>Login | move.it</title>
      </Head>
      <img src='logo-big.svg' alt='logo-big' />

      <div>
        <img src='logo-login.svg' alt='logo-full' />

        <strong>Bem-vindo</strong>

        <p>
          <AiFillGithub className={styles.githubIcon} />
          Faça login com seu Github para começar
        </p>

        <div>
          <input />
          <button>
            <AiOutlineArrowRight className={styles.arrowIcon} />
          </button>
        </div>
      </div>
    </div>
  )
}