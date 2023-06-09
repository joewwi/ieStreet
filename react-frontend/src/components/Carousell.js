import React, { useEffect, useState } from 'react'
import Carousel_item from './Carousel_item'

function Carousell() {
    const [articles, setArticles] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:9292/news`)
        .then(res => res.json())
        .then(data => {
            // console.log(data)
            setArticles(data)
        })
    }, [])


  return (
    <section class=" slider_section position-relative">
      <div class="container-fluid">
        <div class="row slider-row">
          <div class="col-lg-3 offset-lg-1">
            <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel"></div>
              <div class="carousel-inner">
                {articles.map((article)=>{
                  return(<Carousel_item article={article}/>
                )})
                }
              </div>
          </div>
        </div>
      </div>
    </section >
  )
}

export default Carousell
