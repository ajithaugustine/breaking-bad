import React from "react";
import Character from "../../Componets/Character/character";
import {Link} from 'react-router-dom'
import "./Home.css";
import Footer from "../../Componets/Character/Footer";

function Home() {
 

  return (
    <div>
      <div className="navbar ">
        <Link id='link' to='/'>
        <h4>
          Ho<span>m</span>e
        </h4>
        </Link>
        <Link id='link' to='/aboutme'>
        <h4>
          <span>a</span>bout <span>m</span>e
        </h4>
        </Link>
      </div>
      <div className="banner">

      </div>
            <Character/>
            <Footer/>
    </div>
  );
}

export default Home;
