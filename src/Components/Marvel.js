

import axios from 'axios';
import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
const Marvel = () => {
    const {id}=useParams();
    const [item,setitem]=useState()
    const fetch=async()=>{
        const res= await axios.get(`https://gateway.marvel.com:443/v1/public/characters/${id}?ts=1&apikey=df366020b9995cd6ff3af88219a2ed8e&hash=d516513ba95b9407c7aca0f73b241f8a`)
        setitem(res.data.data.results[0])
        // console.log(res.data.data.results[0])
    }
    fetch();
  return (
    <>
    {
        (!item)?"":(
            <div className='box-content'>
                <div className='right-box'>
                <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt=''/>
                </div>
                <div className='left-box'>
                    <h1>
                        {item.name}
                    </h1>
                    <h4>
                        {item.description}
                    </h4>
                    
                </div>
            </div>
        )

    }
    </>
  )
}

export default Marvel