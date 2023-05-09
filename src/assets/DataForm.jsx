import React, { useState } from 'react'

const DataForm = ({ onSubmit }) => {
   const [image, setImage] = useState('');
   const handleChange = (e) => {
      setImage(e.target.value);
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      onSubmit(image);
   }
   return (
      <>
         <div>
            <h3>Form</h3>
            <div>
               <form onSubmit={handleSubmit}>
                  <div>
                     <input type='text' name='imageName' value={image} onChange={handleChange} />
                  </div>
                  <div>
                     <button type='submit'>Search Image</button>
                  </div>
               </form>
            </div>
         </div>
      </>

   )
}

export default DataForm