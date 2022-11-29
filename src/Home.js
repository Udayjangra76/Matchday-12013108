import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react'
import Card from './components/Card';
import './home.css';

const Home = () => {

    const [data,setData] = useState([]);
    const [search,setSearch] = useState('');
    const [filtered,setFiltered] = useState([]);
    const [currPage, setCurrPage] = useState(0); 
    

    const listInnerRef = useRef();

    const fetchData = async (page) => {
        if(page>9)return;
        const dataFetched = await axios.get(`https://matchday.ai/referee/champ/fixture/dummy-matches?page=${page}`)

        setData([...data,...dataFetched.data.fixtures]);
    }

    useEffect(() => {
        console.log(currPage)
        fetchData(currPage);
    },[currPage])

    const onScroll = () => {
        if (listInnerRef.current) {
          const { scrollTop, scrollHeight, clientHeight } = listInnerRef.current;
          console.log(`${scrollTop} ${clientHeight} ${scrollHeight}`)
          if (scrollTop + clientHeight >= scrollHeight - 1) {
            setCurrPage(currPage + 1);
          }
        }
      };

    useEffect(() => {
        let copy = [...data];
        setFiltered(copy.filter((m) =>(
           m.tournament[0].name.toLowerCase().includes(search.toLowerCase())
            || m.team1[0].name.toLowerCase().includes(search.toLowerCase())
             || m.team2[0].name.toLowerCase().includes(search.toLowerCase())
        )))
    },[search,data])
    
  return (
    <div className='home' onScroll={onScroll} ref={listInnerRef}>
        <div className="headingContainer">
            <h1 className="heading">
                International Matches
            </h1>
        </div>
        <div className="searchbarContainer">
            <img src="/search.jpeg" alt="" className='searchIcon'/>
            <input placeholder='Search for Matches' value={search} className='searchbar' onChange={(e) => setSearch(e.target.value)} type="text" />
        </div>
        <div className="cards" >
            {search === '' ? data.map((m) => (
                <Card key={m._id} data={m}/>
            )) : filtered.map((m) => (
                <Card key={m._id} data={m}/>
            ))}
        </div>
       
    </div>
  )
}

export default Home
