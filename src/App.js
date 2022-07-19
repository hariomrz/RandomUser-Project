import logo from "./logo.svg";
import "./App.css";
import UserList from "./Component/UserList";

import { useState } from "react";
function App() {
  const [buttonText, setButtonText] = useState("Dark Mode");
  const [style, setStyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const ToggleButton = () => {
    if (style.color == "black") {
      setStyle({
        color: "darkcyan",
        backgroundColor: "darkgray",
      });
      setButtonText("Light Mode");
    } else {
      setStyle({
        color: "black",
        backgroundColor: "white",
      });
      setButtonText("Dark Mode");
    }
  };

  return (
    <div className="App" style={style}>
      <div className="User">User Data</div>
      <button style={{float:'left'}}  type="button" className="btn btn-info" onClick={ToggleButton}>
        {buttonText}
      </button>
      <UserList />
    </div>
  );
}

export default App;
