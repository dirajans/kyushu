import React from 'react';

import Navbar from './navbars/Navbar';
import Footer from './footers/Footer';

export default function PageContainer({ children }){
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
}
