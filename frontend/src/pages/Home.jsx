import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios"
import Spinner from "../components/Spinner.jsx"
import { Link } from "react-router-dom";
import {MdOutlineAddBox} from "react-icons/md"
import BookCard from '../components/home/BookCard.jsx';
import BookTable from '../components/home/BookTable.jsx';

const Home = () => {
    const [books, setBooks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showTable, setShowTable] = useState(true);
  
    useEffect(()=>{
      setLoading(true);
      axios
        .get("http://localhost:5555/books")
        .then((response)=>{
          setBooks(response.data.data)
          setLoading(false)
        })
        .catch((err)=>{
          console.log(err)
          setLoading(false)
        })
    }, [])
  
    return (
      <div className="p-4">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl my-8">Books List</h1>
          <button className='bg-sky-300 p-2 rounded-lg mt-5 hover:bg-sky-600' 
            onClick={()=>{setShowTable(!showTable)}}>{showTable ? "Show In Cards" : "Show In Table"}</button>
          <Link to={"books/create"}>
            <MdOutlineAddBox className="text-sky-800 text-4xl" />
          </Link>
        </div>
        {loading ? <Spinner /> : showTable ? (<BookTable books={books}/>) : (<BookCard books={books}/>) }
      </div>
    );
}

export default Home