/*import React from 'react';
import ReactDOM from 'react-dom';*/
/*import '../index.css';
import App from '../App';
import * as serviceWorker from '../serviceWorker';
import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App tab="home" />);*/

/*ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();

import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'

import App from './App';
/*import { createRoot } from 'react-dom/client';
const container = document.getElementById('root');
const root = createRoot(container);*/


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <Head>
        <title>CV Website Bart Vanraes</title>
        <meta name="description" content="CV Website Bart Vanraes" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <App></App>
      </main>
    </>
  )
}


