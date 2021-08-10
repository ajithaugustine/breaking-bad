import React, { useState, useEffect } from "react";
import "./character.css";
import { getCharacters } from "../../Service/Service";
import {useHistory} from 'react-router-dom'


function Character() {
  const [count, setcount] = useState(10);
    
  const [character, setcharacter] = useState([""]);

  useEffect(() => {
    if (count > 70) return alert("list over");
    getCharacters(count)
      .then((res) => {
        setcharacter(res);
    
      })
      .catch(() => alert("list over"));
  }, [count]);

  const history = useHistory()

  const viewcharacter =(id)=>{
    history.push(`/view/${id}`)
  }

  return (
    <div className="">
      <div className="characters  ">
        {character.map((char, index) => {
          return (
            <div 
              key={index}
              className="character"
              style={{ backgroundImage: `url('${char.img}')` }}
              onClick={()=>viewcharacter(char.char_id)}
            >
              <div className="content">
                <h6>{char.name}</h6>
                <p>{char.occupation}</p>
                <p>DOB: {char.birthday}</p>
                <p>{char.status}</p>
              </div>
            </div>
          );
        })}
        <div className="loadmore">
          <button
            className="btn btn-success"
            onClick={() => setcount(count + 10)}
          >
            Load more
          </button>
        </div>
      </div>
     
    </div>
  );
}

export default Character;
