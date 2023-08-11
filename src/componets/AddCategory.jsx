import { useState } from "react"

export const AddCategory = ({onNewCategory}) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = ({target}) => {

    setInputValue(target.value);

  }

  const onSubmit = (event) =>{
    event.preventDefault();

    if (inputValue.trim().length <= 1) return; //para que no permita vacios
    // setCategories (categories =>[...categories,inputValue]);
    onNewCategory (inputValue.trim())
    setInputValue (''); //para se borre el texto del input
  }


  return (
    //<form onSubmit={(event)=> onSubmit(event)}> si un argumento es usado solo para mandarlo a la funcion, se puede sacar:
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Buscar gifs"
        value={inputValue}
        onChange={onInputChange}
      />
    </form>
  )
}
