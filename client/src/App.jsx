import axios, { Axios } from "axios";
import { useState } from "react";

function App() {
  const [apiUrl, setApiUrl] = useState("https://nodejs-test01.vercel.app/");

  const trytest = async () => {
    const response = await axios.get(apiUrl + "trytest");
    console.log(response);
  };

  return <div className="container">sad</div>;
}

export default App;
