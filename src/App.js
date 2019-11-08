import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPoke, getWater, getFire, getLightning, getGrass } from "./actions";


function App(props) {
console.log(props);
  return (
    <div className="App">
      <h1>Pokemon: Random Trading Cards!</h1>
        {props.poke && (
        <div>
            <img src = {props.poke.imageUrl} alt = {props.poke.name}/>
            <h1>{props.poke.name}</h1>
        </div>
        )}
        <button onClick = {props.getPoke}>Click for Pokemon!</button>
        <button onClick = {props.getWater}>Click for Water Pokemon!</button>
        <button onClick = {props.getFire}>Click for Fire Pokemon!</button>
        <button onClick = {props.getLightning}>Click for Lightning Pokemon!</button>
        <button onClick = {props.getGrass}>Click for Grass Pokemon!</button>
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

export default connect(mapStateToProps, { getPoke, getWater, getFire, getGrass, getLightning })(App);
