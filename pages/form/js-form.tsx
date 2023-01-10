import React, { useState } from 'react';
import utilStyles from '../../styles/utils.module.css';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function PageWithJSbasedForm() {
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  console.log(first, last);

  // Handles the submit event on form submit.
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // Stop the form from submitting and refreshing the page.
    event.preventDefault();

    // Get data from the form.
    const data = {
      first,
      last,
    };

    // Send the data to the server in JSON format.
    const JSONdata = JSON.stringify(data);

    // API endpoint where we send form data.
    const endpoint = '/api/form';

    // Form the request for sending data to the server.
    const options = {
      // The method is POST because we are sending data.
      method: 'POST',
      // Tell the server we're sending JSON.
      headers: {
        'Content-Type': 'application/json',
      },
      // Body of the request is the JSON data we created above.
      body: JSONdata,
    };

    // Send the form data to our forms API on Vercel and get a response.
    const response = await fetch(endpoint, options);

    // Get the response data from server as JSON.
    // If server returns the name submitted, that means the form works.
    const result = await response.json();
    alert(`Is this your full name: ${result.data}`);
  };
  return (
    // We pass the event to the handleSubmit() function on submit.
    <div className={inter.className}>
      <form onSubmit={handleSubmit} className={utilStyles.form}>
        <label htmlFor="first">First Name</label>
        <input
          type="text"
          id="first"
          name="first"
          required
          className={utilStyles.input}
          value={first}
          onChange={(e) => setFirst(e.target.value)}
        />
        <label htmlFor="last">Last Name</label>
        <input
          type="text"
          id="last"
          name="last"
          required
          className={utilStyles.input}
          value={last}
          onChange={(e) => setLast(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
