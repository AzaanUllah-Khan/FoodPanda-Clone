import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { Partners } from './pages/Partners';
import { Contact } from './pages/Contact';
import { Newsroom } from './pages/Newsroom';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/newsroom" element={<Newsroom />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
