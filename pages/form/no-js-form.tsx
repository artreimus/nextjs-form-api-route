import React from 'react';
import utilStyles from '../../styles/utils.module.css';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Form() {
  return (
    <div className={inter.className}>
      <form action="/api/form" method="post" className={utilStyles.form}>
        <label htmlFor="first">First Name</label>
        <input
          type="text"
          id="first"
          name="first"
          required
          className={utilStyles.input}
        />
        <label htmlFor="last">Last Name</label>
        <input
          type="text"
          id="last"
          name="last"
          required
          className={utilStyles.input}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
