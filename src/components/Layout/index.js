import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const divStyles = {
  background: '#DCD9D0',
  color: '#000000',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontFamily: 'Helvetica',
  textTransform: 'uppercase',
};

export default function Layout({ children }) {
  return (
    <div style={divStyles}>
      <Header />
      {children}
      <Footer />
    </div>
  );
}
