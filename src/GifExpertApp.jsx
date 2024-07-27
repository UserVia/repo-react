//import React from 'react'
import { useState } from "react";
import { AddCategory,GifGrid } from "./components";

//Despues de la version 17 de react no es necesario estar importando la libreria React
export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory =(newCategory)=>{
        console.log(newCategory)
//  setCategories([...categories,'valorant']);
        if(newCategory.includes(categories)) return;
        setCategories([newCategory,...categories])
       //setCategories(cat =>[...cat,'valorant']);
       //console.log(categories);
    }

    return (
    <>
            <h1> Gif Expert App</h1>
        {/*setCategories es una propiedad que recibe una funcion */}
        <AddCategory
            onNewCategory={(value)=>onAddCategory(value)}
            /*setCategories={setCategories} */
         />
        {/*<button onClick={onAddCategory}>Agregar</button>*/}
            {/*El map permite barrer cada uno de los elementos y regresar algo nuevo*/ }
            {
                categories.map( (category) =>(
                    <GifGrid 
                        key={category} 
                        category={category}
                        />
                ))
            }
    </>
  )
}
