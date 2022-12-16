import axios from "axios";

export const createPoke = (
  hp,
  attack,
  defense,
  sp_attack,
  sp_defense,
  speed,
  type,
  setFetching,
  setPokemon
) => {
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
  axios
    .get("https://poke-server-6spdpgv2uq-uc.a.run.app/generate", {
      params,
      responseType: "arraybuffer"
    })
    .then(response => {
      const blob = new Blob([response.data], {
        type: response.headers["content-type"]
      });
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
    })
    .catch(err => {
      console.log(err.message);
      alert("There was a problem creating your pokemon :(");
      setFetching(false);
    });
};

function blobToBase64(blob) {
  return new Promise((resolve, _) => {
    const reader = new FileReader();
    reader.onloadend = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}

export const createDesc = async (ref, setFetching, setDesc) => {
  // send image to server
  setFetching(true);
  const endpoint = "https://poke-server-6spdpgv2uq-uc.a.run.app/describe";
  //const endpoint = "http://127.0.0.1:8080/describe";
  const blob = await (await fetch(ref)).blob();

  const data = await blobToBase64(blob);

  try {
    const response = await axios.post(
      endpoint,
      {
        data: data,
        headers: {
          "Content-Transfer-Encoding": "base64"
        }
      },
      { timeout: 60000 }
    );
    setDesc(response.data);
  } catch (err) {
    console.log(err);
  }

  setFetching(false);
};
