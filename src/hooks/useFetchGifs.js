import { useState,useEffect } from "react";
import { getGifs } from "../helpers/getGifs";

//Un hook no es más que una función que regresa algo
export const useFetchGifs = (category) => {
    const [images, setImages] = useState([]);
    const [isLoanding,setIsLoanding] = useState(true);

  const getImages = async()=>{
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoanding(false)
  }
  useEffect(()=>{
    getImages();
  },[]);
    return{
        images,
        isLoanding
    }
}
