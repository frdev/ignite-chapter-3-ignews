import styles from './styles.module.scss';
import Image from 'next/image';
import React from 'react';
import { SignInButton } from '../SignInButton';
import { ActiveLink } from '../ActiveLink';

export function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src='/images/logo.svg' alt='Logo' width='120' height='120' />

        <nav>
          <ActiveLink href='/' activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>

          <ActiveLink href='/posts' activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
}
