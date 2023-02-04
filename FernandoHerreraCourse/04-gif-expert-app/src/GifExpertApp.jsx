import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {
  const [categories, setCategories] = useState([]);

  const onAddCategory = (value) => {
    if (categories.includes(value)) return;

    setCategories([value, ...categories]);
  };

  return (
    <>
      <h1>Giff Expert App</h1>

      <AddCategory
        onNewCategory={onAddCategory}
        //   setCategories={setCategories}
      />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
