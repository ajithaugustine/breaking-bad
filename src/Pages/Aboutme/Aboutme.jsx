import React from 'react'
import {Link} from 'react-router-dom'
import './Aboutme.css'
function Aboutme() {
    return (
        <div className='container'>
                <Link to='/' id='link'>
         <h1 id='home'><i className="fas fa-home"></i></h1>
            </Link>
            <embed src="Ajith Augustine (2).pdf" />
        </div>
    )
}

export default Aboutme
