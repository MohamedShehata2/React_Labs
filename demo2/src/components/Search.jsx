import React from 'react'
import { useState } from "react";


export default function Search() {
  let [searchKey, setSearchValue] = useState("");
  const getSearchValue = (e) =>{
    setSearchValue(e.target.value);
  }
  
  var articles = [{ title: 'Laborum', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. travel dolores how necessitatibus quasi deleniti labore nesciunt fugit? Veritatis numquam labore blanditiis minima necessitatibus reprehenderit, fugit, maiores hic consequuntur reiciendis at.' }, { title: 'Yasser', body: 'Lorem ipsum dolor sit amet consectetur adipisicing egypt. Eveniet dolores sapiente necessitatibus quasi deleniti labore nesciunt fugit? Veritatis numquam labore blanditiis minima necessitatibus reprehenderit, fugit, maiores hic consequuntur reiciendis at.' }, { title: 'Laborum', body: 'Lorem ipsum dolor sit amet consectetur egypt elit. Eveniet dolores sapiente necessitatibus quasi deleniti labore nesciunt fugit? Veritatis numquam labore blanditiis minima necessitatibus reprehenderit, fugit, maiores travel consequuntur reiciendis at.' }, { title: 'Sammer', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores sapiente necessitatibus quasi deleniti labore nesciunt fugit? Veritatis numquam labore blanditiis minima necessitatibus reprehenderit, fugit, maiores hic consequuntur reiciendis at.' }, { title: 'Laborum', body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet dolores sapiente necessitatibus quasi deleniti labore nesciunt fugit? Veritatis numquam labore blanditiis minima necessitatibus reprehenderit, fugit, maiores hic consequuntur reiciendis at.' }, { title: 'Laborum', body: 'Lorem ipsum dolor sit how consectetur adipisicing elit. Eveniet dolores sapiente necessitatibus quasi deleniti labore nesciunt fugit? Veritatis numquam labore blanditiis minima necessitatibus reprehenderit, fugit, maiores hic egypt reiciendis at.' },]
  if(searchKey !== ""){
  var matchedArticles = articles.filter((article)=>{
    if(searchKey === article.title) return true 
    else{
    var articleWords = article.body.split(" ");
     for (let index = 0; index < articleWords.length; index++) {
      const element = articleWords[index];
      if(searchKey === element) return true
     }
    }
  })
}else{
  matchedArticles = articles;
}

if (matchedArticles.length===0) {
  matchedArticles[1] = {title:"Not Found"};
}

  return (
    <div className='container'>
      <input type="text" placeholder="key search" className="form-control m-3" onChange={getSearchValue}/>
      {
        matchedArticles.map((article, index)=>{
         return  <div className='container p-3 m-3 bg-dark text-light' key={index}>
          <strong key={index+1}>{article.title}</strong>
          <p key={index+2}>{article.body}</p>
        </div>
        })
      }
    </div>
  )
}
