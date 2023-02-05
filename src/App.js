import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/header';
import Create from './Components/create';
import Home from './Components/home';
import './App.css';
import { useState } from 'react';

export default function App() {
  // Here we set the state for the search input in an useState
  const [searchInput, setSearchInput] = useState('');

  // Here we set a function to handle the input change in the header search field
  // this function is handled here because App is the parent component of header - where the value is set and
  // form where the search value is used.
  const handleSearchInput = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <Router>
      <Header handleSearchInput={handleSearchInput} searchInput={searchInput} />
      <Routes>
        <Route exact path="/" element={<Home searchInput={searchInput} />} />
        <Route path="/create" element={<Create />} />
        <Route path="/create/:id" element={<Create />} />
      </Routes>
    </Router>
  );
}
