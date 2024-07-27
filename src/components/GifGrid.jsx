import React, { useState,useEffect} from 'react';
//import { getGifs } from '../helpers/getGifs';
import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {

  const {images, isLoanding } = useFetchGifs(category);
 
/*
  const [images, setImages] = useState([]);

  const getImages = async()=>{
    const newImages = await getGifs(category);
    setImages(newImages);
  }
  useEffect(()=>{
    getImages();
  },[]);

  //const arrayCat=images.map((images)=>{ return (images.id)});
  //console.log(arrayCat);*/
  return (
    <>
        <h3>{category}</h3>  
        {
          isLoanding && (<h2>Cargando..</h2>)
        }
          <div className="card-grid">
          {images.map( ( image ) =>(
                <GifItem 
                key={image.id}
                {...image}/>
             ))
             }
          </div>
        
    </>
  )
}
