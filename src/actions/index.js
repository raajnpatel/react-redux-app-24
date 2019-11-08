import axios from 'axios';

export const FETCH_POKE_START = "FETCH_POKE_START";
export const FETCH_POKE_WATER = "FETCH_POKE_WATER";
export const FETCH_POKE_FIRE = "FETCH_POKE_FIRE";
export const FETCH_POKE_LIGHTNING = "FETCH_POKE_LIGHTNING";
export const FETCH_POKE_GRASS = "FETCH_POKE_GRASS";
export const FETCH_POKE_SUCCESS = "FETCH_POKE_SUCCESS";
export const FETCH_POKE_FAILURE = "FETCH_POKE_FAILURE";



export const getPoke = () => dispatch => {
    dispatch({ type: FETCH_POKE_START });
    let rando = Math.floor(Math.random() * 100);
    let smRando = Math.floor(Math.random()* 6) + 1;
    axios
        .get(`https://api.pokemontcg.io/v1/cards/base${smRando}-${rando}`)
        .then(res => console.log(res.data) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.card}))
        .catch(error => {dispatch({ type: FETCH_POKE_FAILURE, payload: error.response})})
};

export const getPokes = (pokemon) => dispatch => {
    dispatch({ type: FETCH_POKE_START });
    axios
        .get(`https://api.pokemontcg.io/v1/cards?name=${pokemon}`)
        .then(res => console.log(res.data) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.cards}))
        .catch(error => {dispatch({ type: FETCH_POKE_FAILURE, payload: error.response})})
};

export const getWater = () => dispatch => {
    dispatch({ type: FETCH_POKE_WATER });
    let rando = Math.floor(Math.random() * 100);
    axios
        .get("https://api.pokemontcg.io/v1/cards?types=Water")
        .then(res => console.log(res) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.cards[rando]}))
        .catch(error => {dispatch({ type: FETCH_POKE_FAILURE, payload: error.response})})
};

export const getFire = () => dispatch => {
    dispatch({ type: FETCH_POKE_FIRE });
    let rando = Math.floor(Math.random() * 100);
    axios
        .get("https://api.pokemontcg.io/v1/cards?types=Fire")
        .then(res => console.log(res) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.cards[rando]}))
        .catch(error => {dispatch({ type: FETCH_POKE_FAILURE, payload: error.response})})
};

export const getLightning = () => dispatch => {
    dispatch({ type: FETCH_POKE_LIGHTNING });
    let rando = Math.floor(Math.random() * 100);
    axios
        .get("https://api.pokemontcg.io/v1/cards?types=Lightning")
        .then(res => console.log(res) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.cards[rando]}))
        .catch(error => {dispatch({ type: FETCH_POKE_FAILURE, payload: error.response})})
};

export const getGrass = () => dispatch => {
    dispatch({ type: FETCH_POKE_GRASS });
    let rando = Math.floor(Math.random() * 100);
    axios
        .get("https://api.pokemontcg.io/v1/cards?types=Grass")
        .then(res => console.log(res) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.cards[rando]}))
        .catch(error => {dispatch({ type: FETCH_POKE_FAILURE, payload: error.response})})
};