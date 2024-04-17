import React, {
  useParams,
} from 'react';
import { createRoot } from 'react-dom/client';
import './style.scss';
import {
  BrowserRouter, Routes, Route, NavLink,
} from 'react-router-dom';

function Nav() {
  return (
    <nav>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
        <li><NavLink to="/test/id1">test id1</NavLink></li>
        <li><NavLink to="/test/id2">test id2</NavLink></li>
      </ul>
    </nav>
  );
}

function App() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/about" element={<About />} />
          <Route path="/test/:id" element={<Test />} />
          <Route path="*" element={<FallBack />} />;
        </Routes>
      </div>
    </BrowserRouter>
  );
}
function FallBack() {
  return <div>URL Not Found</div>;
}

function Test() {
  const { id } = useParams();
  return <div>ID: {id}</div>;
}

function Welcome() {
  return <div>Welcome</div>;
}
function About() {
  return <div>All there is to know about me</div>;
}

const root = createRoot(document.getElementById('main'));
root.render(<App />);