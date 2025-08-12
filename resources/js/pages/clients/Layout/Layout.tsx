import React, { Children } from 'react'
import Navbar from './Navbar';
import Footer from './Footer';

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white">
        <Navbar />
         <main className="pt-20">
          {children}
          <Footer />
         </main>
    </div>
  )
}

export default Layout
