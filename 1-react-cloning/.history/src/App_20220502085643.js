import React from 'react';
import Header from './components/Header';
import Contents from './pages/Contents';
import Footer from './components/Footer';
function App() {
  return (
    <div className="container">
      <Header></Header>
      <Contents></Contents>
      <Footer></Footer>
    </div>
  );
}
export default App;
