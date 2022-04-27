import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import styles from './header.module.scss';
import { Burger, RedBurger } from './header-svgs';
import pokemon_creation from './assets/sevipesol.png';

const links = [
  {
    href: '/',
    label: 'Generator'
  },
  {
    href: '/process',
    label: 'Process'
  },
  {
    href: '/examples',
    label: 'Examples'
  },
];

const Header = () => {
  const [burgerPressed, setBurgerPressed] = useState(false);
  const router = useRouter();

  return (
    <>
      {burgerPressed && (
        <div className={styles.slideOutMenu}>
          {links.map(link => {
            return (
              <Link key={link.href} href={link.href}>
                <a
                  className={
                    router.pathname === link.href ? styles.active : styles.link
                  }
                >
                  {link.label}
                </a>
              </Link>
            );
          })}
        </div>
      )}
      <div className={styles.bar}>
        <Image src={pokemon_creation} alt="Pokemon Creation" height={70} width={70}/>
        <div className={styles.mobileOptions}>
          {!burgerPressed ? (
            <Burger
              setBurgerPressed={setBurgerPressed}
              burgerPressed={burgerPressed}
              styleClass={styles.burgerMenu}
            />
          ) : (
            <RedBurger
              setBurgerPressed={setBurgerPressed}
              burgerPressed={burgerPressed}
              styleClass={styles.burgerMenu}
            />
          )}
        </div>
        <div className={styles.options}>
          <Link href="/">
            <a
              className={
                router.pathname === '/'
                  ? styles.active
                  : styles.link
              }
            >
              <p className={styles.menuItem}>Generator</p>
            </a>
          </Link>
          <Link href="/process">
            <a
              className={
                router.pathname === '/process' ? styles.active : styles.link
              }
            >
              <p className={styles.menuItem}>Process</p>
            </a>
          </Link>
          <Link href="/examples">
            <a
              className={
                router.pathname === '/examples' ? styles.active : styles.link
              }
            >
              <p className={styles.menuItem}>Examples</p>
            </a>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header