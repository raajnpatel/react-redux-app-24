import React, {useState} from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPoke, getWater, getFire, getLightning, getGrass, getPokes } from "./actions";


function App(props) {
    // const [pokemon, setPokemon] = useState("");
// console.log(pokemon);
console.log(props);
  return (
    <div className="App">
      <h1>Pokemon: Random Trading Cards!</h1>
        {/*<div className="Search">*/}
        {/*<input*/}
        {/*    type="text"*/}
        {/*    placeholder="Enter Pokemon Name"*/}
        {/*    value={pokemon}*/}
        {/*    onChange={e => setPokemon(e.target.value)}*/}
        {/*/>*/}
        {/*    <button onClick={() => props.getPokes(pokemon)}>Search</button>*/}
        {/*    {props.poke.map(p => (*/}
        {/*        <img src = {p.poke.imageUrl} alt={p.poke.name} key={p.id}/>*/}
        {/*    ))}*/}
        {/*</div>*/}

        <div className="theButtons">
            <button onClick = {props.getPoke}>Click for Classic Pokemon!</button>
            <button onClick = {props.getWater}>Click for Water Pokemon!</button>
            <button onClick = {props.getFire}>Click for Fire Pokemon!</button>
            <button onClick = {props.getLightning}>Click for Lightning Pokemon!</button>
            <button onClick = {props.getGrass}>Click for Grass Pokemon!</button>
        </div>

        {props.loading && <div><h3>Loading...</h3></div>}
        {props.poke && (
        <div className="PokeCards">
            <img src = {props.poke.imageUrl} alt = {props.poke.name}/>
            <h1>{props.poke.name}</h1>
        </div>
        )}

    </div>
  );
}

const mapStateToProps = state => {
    return {
        poke: state.poke,
        error: state.error,
        loading: state.loading,
    }
};

export default connect(mapStateToProps, { getPoke, getWater, getFire, getGrass, getLightning, getPokes })(App);
