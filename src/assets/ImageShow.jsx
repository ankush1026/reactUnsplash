import React from 'react'

const ImageShow = ({ image }) => {
   return (
      <div><img src={image?.urls?.small} /></div>
   )
}

export default ImageShow