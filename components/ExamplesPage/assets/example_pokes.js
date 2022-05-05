const image_folder = '/example_images'

const examples = [
  {
    src: `${image_folder}/poke0.png`,
    hp: 80,
    attack: 90,
    defense: 100,
    sp_attack: 75,
    sp_defense: 80,
    speed: 110,
    type: 'water'
  },
  {
    src: `${image_folder}/poke1.png`,
    hp: 150,
    attack: 60,
    defense: 150,
    sp_attack: 90,
    sp_defense: 180,
    speed: 90,
    type: 'normal' 
  },{
    src: `${image_folder}/poke2.png`,
    hp: 10,
    attack: 150,
    defense: 25,
    sp_attack: 154,
    sp_defense: 20,
    speed: 50,
    type: 'fire'
  },
];

export default examples;