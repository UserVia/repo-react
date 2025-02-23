import { useState } from 'react';

export const AddCategory = ({onNewCategory}) => {
    const [inputValue, setInputValue] = useState('')
    const onInputChange =({target})=>{
        setInputValue(target.value);
      //  console.log(target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault();
        //console.log(inputValue)
        if(inputValue.trim().length<=1) return;
        //setCategories(categories => [inputValue, ...categories]);
        onNewCategory(inputValue.trim());
        setInputValue('')
    }
    return (
        <form onSubmit={onSubmit}>
            <input 
                type='text' 
                placeholder='Buscar gif'
                value={inputValue}
                onChange={ (event) => onInputChange(event)}>
       
            </input>
        </form>
   
  )
}
