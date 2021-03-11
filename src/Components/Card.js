import React from 'react'
import './card.css'
const Card = () => {
    return (
        
<div>            
  <div className="movie_card" id="bright">
    <div className="info_section">
      <div className="movie_header">
        <img className="locandina" id="kaka" src="https://www.funfoodfrolic.com/wp-content/uploads/2020/09/Sprout-Salad-1.jpg" />
        <h1>Sprouts Salad</h1>
        <h4>Indian</h4>
        <span className="minutes">100 calories</span>
        <p className="type">Sprouts,Vegetables</p>
      </div>
      <div className="movie_desc">
        <p className="text">
          Set in a world where fantasy creatures live side by side with humans. A human cop is forced to work
          with an Orc to find a weapon everyone is prepared to kill for.
        </p>
      </div>
      <div className="movie_social">
        <ul>
          <li><button id="salad"> <i className="bi bi-share"> </i></button> </li>
          <li><i className="bi bi-bag-fill">Buy Now </i></li>
          <li> <h3 id="pr">Rs 269 </h3></li>
        </ul>
      </div>
    </div>
    <div className="blur_back bright_back" />
  </div>
  <div className="movie_card" id="tomb">
    <div className="info_section">
      <div className="movie_header">
        <img className="locandina" src="https://www.averiecooks.com/wp-content/uploads/2018/04/smokychickpeasalad-12.jpg" id="test" />
        <h1>ChickPea Salad</h1>
        <h4>Italian Indian</h4>
        <span className="minutes">125 calories</span>
        <p className="type">ChickPeas ,Vegetables</p>
      </div>
      <div className="movie_desc">
        <p className="text">
          Lara Croft, the fiercely independent daughter of a missing adventurer, must push herself beyond her
          limits when she finds herself on the island where her father disappeared.
        </p>
      </div>
      <div className="movie_social">
        <ul>
          <li><a href="#"> <i className="bi bi-share"> </i></a> </li>
          <li><i className="bi bi-bag-fill">Buy Now</i></li>
          <li> <h3 id="pr">Rs 399 </h3></li>
        </ul>
      </div>
    </div>
    <div className="blur_back tomb_back" />
  </div>
  <div className="movie_card" id="ave">
    <div className="info_section">
      <div className="movie_header">
        <img className="locandina" src="https://www.wellplated.com/wp-content/uploads/2020/01/Instant-Pot-Steel-Cut-Oatmeal-600x665.jpg" />
        <h1>Oatmeal</h1>
        <h4>Italian</h4>
        <span className="minutes">134 calories</span>
        <p className="type">Oats,Jalapeno</p>
      </div>
      <div className="movie_desc">
        <p className="text">
          T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African
          nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's
          father's mistake.
        </p>
      </div>
      <div className="movie_social">
        <ul>
          <li><i className="bi bi-share" /></li>
          <li><i className="bi bi-bag-fill">Buy Now</i></li>
          <li> <h3 id="pr">Rs 269 </h3></li>
        </ul>
      </div>
    </div>
    <div className="blur_back ave_back" />
  </div>

</div>
    )
}

export default Card
