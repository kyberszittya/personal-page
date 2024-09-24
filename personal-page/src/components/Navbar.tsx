import Link from 'next/link';
import React from 'react';
import styles from './Navbar.module.css';
import { navLinks } from './navLinks';



// Navbar component
const Navbar: React.FC = () => {
  

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navLinks.map((link) => (
          <li key={link.href} className={styles.navItem}>
            <Link href={link.href} className={styles.navLink}>
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;