import React from 'react'
import Navbar from './Components/Navbar';
import Hero from './Components/Hero';
import Analytics from './Components/Analytics';
import Newsletter from './Components/Newsletter';
import Packages from './Components/Packages';
import Footer from './Components/Footer';

function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <Newsletter/>
      <Packages/>
      <Footer/>

    </div>
  );
}

export default App;
