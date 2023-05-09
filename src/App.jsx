import React, { useState } from "react";
import DataForm from "./assets/DataForm";
import searchImages from "./assets/api";
import ImageList from "./assets/ImageList";

const App = () => {
   const [images, setImages] = useState("");
   const onSubmit = async (term) => {
      const result = await searchImages(term);
      setImages(result)
   }
   return (
      <>
         <div>
            <h1>Get Images from Unsplash</h1>
            <DataForm onSubmit={onSubmit} />
            <ImageList images={images} />
         </div>
      </>
   )
}


export default App
