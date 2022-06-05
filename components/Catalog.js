import {useEffect, useState} from 'react'
import Movie from './Movie'
import './Catalog.css'

const Catalog = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8080/api/movies')
        .then(response => response.json())
        .then(json => setData(json))
    }, [])
    return (
        <div>
            <h1 className="title">Catalog</h1>
            <div className="movies">
                {data.map((movie) => (
                    <Movie name={movie.name} genre={movie.genre} image={movie.img}/>
                ))}
            </div>
        </div>
    )
}

export default Catalog
