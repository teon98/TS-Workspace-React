import { useState } from "react";
import InputMood from "./component/InputMood";
import MoodChart from "./component/MoodChart";
import "./style/common.css"


function App(): JSX.Element {
  return (
    <div id="body">
      <h3>기분 온도 그래프😊</h3>
      <div id="content">
        <InputMood />
        <MoodChart />
      </div>
    </div>
  )
}

export default App;