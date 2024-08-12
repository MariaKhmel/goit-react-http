import { Component } from 'react';
import PokemonForm from './PokemonForm';
import { ToastContainer } from 'react-toastify';
import { PokemonInfo } from './PokemonInfo';
import 'react-toastify/dist/ReactToastify.css';
import { useId, useState } from 'react';
const Profile = ({ name, email }) => (
  <div>
    <p>Name: {name}</p>
    <p>Email: {email}</p>
  </div>
);

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {/* {children} */}
  </section>
);
export function App() {
  const [coffeeSize, setCoffeeSize] = useState('sm');

  return (
    <>
      <h1>Select coffee size</h1>
      <label>
        <input type="radio" name="coffeeSize" value="sm" />
        Small
      </label>
      <label>
        <input type="radio" name="coffeeSize" value="md" />
        Meduim
      </label>
      <label>
        <input type="radio" name="coffeeSize" value="lg" />
        Large
      </label>
    </>
  );
}
