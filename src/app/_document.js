// app/layout.js
import './globals.css';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Your App',
  description: 'App description',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Add your Google Fonts link here */}
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@400;700&family=Jost:wght@400;700&family=Big+Shoulders+Display:wght@400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={inter.className}>
        {children}
      </body>
    </html>
  );
}
