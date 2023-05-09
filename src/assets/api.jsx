import React from "react";
import axios from 'axios';

const searchImages = async (term) => {
   const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
         Authorization: "Client-ID NTbdYKULxD6qQZ4z-DRraLyt-_E1lF6Fa3kbK3HgImQ",
      },
      params: {
         query: term,
      }
   })
   return response;
}

export default searchImages;