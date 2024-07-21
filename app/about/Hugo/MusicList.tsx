

import { useEffect } from "react";

const MusicList = () => {
    
    const fetchData = async () =>{
        data = await fetch("http://localhost:3000/api/hello").then((rest) =>rest.json());

    }
    
    useEffect[() =>{
        fetchData();
    }, []];
}