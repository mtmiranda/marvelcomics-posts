export const loadComics = async () => {
  const dataTime = Math.floor(Date.now() / 1000);
  console.log(dataTime); // show current timestamp

  const timeStamp = "1621258571";
  const apiKey = "3f12558e4dd3d6d020e101c5f8ecfe0b";
  const md5 = "2e3235cb181efd92ca996eccfdfdb801";

  fetch(
    `https://gateway.marvel.com/v1/public/comics?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}&limit=6`
  )
    .then((response) => response.json())
    .then((jsonParsed) => {
     return jsonParsed;
    });
};

export default loadComics;
