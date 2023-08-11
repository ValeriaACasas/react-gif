import { useState } from "react";
import { AddCategory } from "./componets/AddCategory";
import { GifGrid } from "./componets/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState([])

    const onAddCategory = (newCategory) => {

        if (categories.includes(newCategory)) return;
        setCategories([...categories, newCategory])


    }

    return (
        <>
            <h1>Bienvenido</h1>

            {/* <AddCategory setCategories={setCategories}/> */}
            <AddCategory onNewCategory={onAddCategory} />

            {
                categories.map(category => (
                    <GifGrid key={category} category={category} />
                ))
            }

        </>
    )
}
