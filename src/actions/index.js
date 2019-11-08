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
    axios
        .get(`https://api.pokemontcg.io/v1/cards/base1-${rando}`)
        .then(res => console.log(res.data) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.card}))
};

export const getWater = () => dispatch => {
    dispatch({ type: FETCH_POKE_WATER });
    let rando = Math.floor(Math.random() * 100);
    axios
        .get("https://api.pokemontcg.io/v1/cards?types=Water")
        .then(res => console.log(res) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.cards[rando]}))
};

export const getFire = () => dispatch => {
    dispatch({ type: FETCH_POKE_FIRE });
    let rando = Math.floor(Math.random() * 100);
    axios
        .get("https://api.pokemontcg.io/v1/cards?types=Fire")
        .then(res => console.log(res) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.cards[rando]}))
};

export const getLightning = () => dispatch => {
    dispatch({ type: FETCH_POKE_LIGHTNING });
    let rando = Math.floor(Math.random() * 100);
    axios
        .get("https://api.pokemontcg.io/v1/cards?types=Lightning")
        .then(res => console.log(res) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.cards[rando]}))
};

export const getGrass = () => dispatch => {
    dispatch({ type: FETCH_POKE_GRASS });
    let rando = Math.floor(Math.random() * 100);
    axios
        .get("https://api.pokemontcg.io/v1/cards?types=Grass")
        .then(res => console.log(res) || dispatch({ type: FETCH_POKE_SUCCESS, payload: res.data.cards[rando]}))
};