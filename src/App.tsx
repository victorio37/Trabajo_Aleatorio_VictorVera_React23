import { useState } from "react";

import "./App.css";
import friendsList from "./assets/phrases.json";
import Card from "./components/Card/Card";
import images from "./components/images/imagen2.jpg";
import images1 from "./components/images/imagen3.jpg";

function App() {
  
  const [visibleFriend, setVisibleFriend] = useState(0);

  const changeFriend = () => {
    const newVisibleFriend = visibleFriend + 1;

    if (newVisibleFriend === friendsList.length) setVisibleFriend(0);
    else setVisibleFriend(newVisibleFriend);
  };
  return (
    <div className="App" style={{ backgroundImage: `url(${images})` }}>
      <h1 className="texto-borde">Galletas de la Fortuna</h1>
      <Card friend={friendsList[visibleFriend]} changeFriend={changeFriend} />
      <div>
        <img src={images} alt="images"></img>
      </div>
    </div>
  );
}
export default App;
