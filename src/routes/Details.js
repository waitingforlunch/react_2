import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Details () {
    const [title, setTitle] = useState([]);
    
    const {id} = useParams();
    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setTitle(json.data.movie.title);
        console.log(json);
    };
    useEffect (() => {
        getMovie();
    }, []);

    return (
        <div>
            <h1>Details</h1>
            <div>{title}</div>
            
        </div>
        
    ); 
}

export default Details;