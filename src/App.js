import React from 'react';
import './App.css';
import { connect } from 'react-redux';
import { getPoke } from "./actions";


function App(props) {
console.log(props);
  return (
    <div className="App">
      <h1>Pokemon: Random Trading Cards!</h1>
        {props.poke && (
        <div>
            <ul>
                {}
            </ul>
            <img src = {props.poke.imageUrl} alt = {props.poke.name}/>
            <h1>{props.poke.name}</h1>
        </div>
        )}
        <button onClick = {props.getPoke}>Click for Pokemon!</button>
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

export default connect(mapStateToProps, { getPoke })(App);
