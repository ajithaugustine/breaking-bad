import React,{useState,useEffect}from 'react'
import { getCharacter,getCharacterquotes } from "../../Service/Service";
import {useParams,Link} from 'react-router-dom'
import './View.css';
function View() {
    const {id} = useParams()
    const dummy={
        name:'0',
        img:'nill',
        birthday:'0',
        occupation:'0',
        status:'0',
        nickname:'0',
        portrayed:'0'
    }
    const [character, setcharacter] = useState([dummy]);
    const [quotes, setquotes] = useState([''])
    useEffect(() => {

        getCharacter(id)
        .then((res) => {
            if(res === '')return alert('no data found')
          setcharacter(res);
        
        })
        .catch((err) => alert(err));

        getCharacterquotes(id).then((res)=>{
           if(res === '')return setquotes('nil')
           setquotes(res)
       
        }).catch((err)=>{
            console.log(err)
        })

    }, []);
  const char = character[0]
    return (
        <div className='container-fliuid'>
            <Link to='/' id='link'>
         <h1 id='home'><i className="fas fa-home"></i></h1>
            </Link>
            <h3>{char.name}</h3>
            <p id='quote'>"{quotes[0].quote}"</p>
            <div className='viewchar'>
                <div className="char">
                    <img src={char.img} alt="" />
                    
                </div>
                <div className="charinfo">

                    <div className=" tags ">
                  <h6  >Date of Birth:</h6><p >{char.birthday}</p>
                    </div>
                    <div className=" tags ">
                  <h6>Occupation:</h6><p>{char.occupation}</p>,
                    </div>
                    <div className=" tags ">
                  <h6>Status:</h6><p>{char.status}</p>
                    </div>
                    <div className=" tags">
                  <h6>Nickname:</h6><p>{char.nickname}</p>
                    </div>
                    <div className=" tags">
                  <h6>Actor:</h6><p>{char.portrayed}</p>
                    </div> 
                    
                    </div>
                 
            </div>

        </div>
    )
}

export default View
