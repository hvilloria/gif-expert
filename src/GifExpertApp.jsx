import { useState } from "react"
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

  const [categories, setCategories] = useState(['Naruto']);
  const onAddCategory = (value) => {
    if (categories.includes(value)) return;
    setCategories([...categories, value]);
  }

  return(
    <>
      <h1>GifAppExpert</h1>
      <AddCategory 
        onNewCategory= { onAddCategory }
      />
        {
          categories.map( ( category ) => (
            <GifGrid 
              key={category} 
              category={category}
            />
          ))
        }
    </>
  )
}