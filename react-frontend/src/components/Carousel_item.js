import React from 'react'
import 'bootstrap'
import '../css/Carousel.css'

function Carousel_item({ article }) {

  console.log(article);

  const { createdAt, updatedAt, title, news= "It is a long established fact that a reader will be distracted by the readable content of a page" } = article
  
  return (
    <div class="card bg-dark text-white">
      <img src="https://s.yimg.com/uu/api/res/1.2/n27EsyOoj7ioKWSU9mIl1A--~B/Zmk9ZmlsbDtoPTUwNTtweW9mZj0wO3E9OTU7dz05MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2023-06/24fbeec0-0496-11ee-8fff-ade2069bb77c" class="card-img" alt="..."/>
        <div class="card-img-overlay">
          <h5 class="card-title">{title}</h5>
          <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
          <p class="card-text">Last updated: {updatedAt}</p>
        </div>
    </div>
  )
}

export default Carousel_item