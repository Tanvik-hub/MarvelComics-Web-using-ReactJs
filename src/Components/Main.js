
import React, { useEffect, useState } from 'react'
import Card from './Card'
import axios from 'axios'
const Main = () => {
    const [url,seturl]=useState("https://gateway.marvel.com/v1/public/characters?ts=1&apikey=df366020b9995cd6ff3af88219a2ed8e&hash=d516513ba95b9407c7aca0f73b241f8a")
    const [item,setitem]=useState();
    const [search,setSearch]=useState("");


    useEffect(()=>{
        const fetch=async()=>{
            const res=await axios.get(url)
            setitem(res.data.data.results);

        }
        fetch();

    },[url])
    const searchMarvel=()=>{
        seturl(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${search}&ts=1&apikey=df366020b9995cd6ff3af88219a2ed8e&hash=d516513ba95b9407c7aca0f73b241f8a`)
      }
      return (
        <>
            <div className="header">
                <div className="bg">
                    <img src="./Images/maxresdefault.jpg" alt="" />
                </div>
                <div className="search-bar">
                    <img src="./Images/marvellogo.jpg" alt="logo" />
                    <input type="search" placeholder='Search Here'
                     className='search'
                     onChange={e=>setSearch(e.target.value)}
                     />
                     <button onClick={searchMarvel} className='search-button'>Search</button>
                </div>
            </div>
           <div className="content">
             
            {
              (!item)?<p>Not Found</p>:<Card data={item}/>
            }
           </div>
        </>
      )
}

export default Main