import * as React from 'react';
import Header from '../Header';
import Footer from '../Footer';

const divStyles = {
  background: 'rgb(245,232,200)',
  color: '#000000',
  display: 'flex',
  flexDirection: 'column',
  minHeight: '100vh',
  fontFamily: 'Poppins',
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
