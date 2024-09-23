/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import App from './App';
import "./globals.css";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

import { Poppins } from "next/font/google"
const poppins = Poppins({ subsets: ["latin"], weight: "400" });

export default function RootLayout() {
  return (
    <Provider store={store}>
      <html lang="en" >
        <body className={poppins.className}>
          <App />
        </body>
      </html>
    </Provider>
  );
}

