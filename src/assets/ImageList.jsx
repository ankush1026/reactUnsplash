import React from 'react'
import ImageShow from './ImageShow';

const ImageList = ({ images }) => {
   console.log(images?.data?.results);
   const renderImages = images?.data?.results.map((image) => {
      return <ImageShow key={image.id} image={image} />
   })
   return (
      <>
         <p>{renderImages}</p>
      </>

   )
}

export default ImageList