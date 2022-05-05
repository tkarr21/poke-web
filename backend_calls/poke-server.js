import axios from 'axios';

export const createPoke = (hp, attack, defense, sp_attack, sp_defense, speed, type, setFetching, setPokemon) => {
  const params = {
    hp,
    attack,
    defense,
    sp_attack,
    sp_defense,
    speed,
    type
  };

  setFetching(true);
  axios.get(
    'https://poke-server-6spdpgv2uq-uc.a.run.app/generate',
    { params, responseType: 'arraybuffer' })
    .then(response => {
      const blob = new Blob(
        [response.data], 
        { type: response.headers['content-type'] }
      )
      const image = URL.createObjectURL(blob);
      setFetching(false);
      const poke = {
        src: image,
        hp,
        attack,
        defense,
        sp_attack,
        sp_defense,
        speed,
        type
      };
      console.log(poke);
      setPokemon(poke);
    }).catch(err => {
      console.log(err.message);
      alert('There was a problem creating your pokemon :(');
      setFetching(false);
    }
  );
}