import React, { useState } from 'react';
import './App.css';

function App() {

  let music = [
    {
      name: "Em của ngày hôm qua",
      lyrics: "Eh eh eh.. Em đang nơi nào... Can you feel me. Can you feel me. ",
      author: "Sơn Tùng"
    },
    {
      name: "Người Anh Em",
      lyrics: "Cuộc đời rộng lớn có bao la Làm sao sánh được hai từ anh em",
      author: "Nhạc Hoa, Lời Việt: Mạnh Thắng"
    },
    {
      name: "Chúng ta k thuộc về nhau",
      lyrics: "Giọt nước mắt ký ức anh chìm sâu, tìm về nơi đâu",
      author: "Tùng Sơn"
    },
    {
      name: "kkk",
      lyrics: "Giọt nước mắt ký ức anh chìm sâu, tìm về nơi đâu",
      author: "Tùng Sơn 1"
    }
  ]

  const [index, setIndex] = useState(0);

  function handleClick(){
    if(Object.keys(music).length - 1 == index){
      setIndex(0);
    }else{
      setIndex(index+1);
    }
  }

  return (
    <div className="App">
      <h3 className="name">{music[index].name}</h3>
      <p className="author">{music[index].author}</p>
      <p className="lyrics">{music[index].lyrics}</p>
      <div className="audio">
        <img src="/h3.png"></img>
        <button onClick = {handleClick}><img src="/h2.png"></img></button>
        <img src="/h1.png" />
      </div>
    </div>
  );
}

export default App;
