import React from 'react'
import './article.css'

const Article = () => {
  return (
    <div className="container">
    <div className='test__articles'>
        <div className="articles__container">
            <div className="articles__text">
                <h4>LES</h4>
                <h1>ARTICLES</h1>
            </div>
            <div className="articles__article">
                <article>
                    <h3>Titre de l'article</h3>
                    <p>18 mars 2021 -<span>Immobilier</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore accusantium esse libero officia debitis assumenda!</p>
                </article>

                <article>
                    <h3>Titre de l'article</h3>
                    <p>18 mars 2021 -<span>Immobilier</span></p>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum, libero id aliquam aperiam et voluptate.</p>
                </article>

                <article>
                    <h3>Titre de l'article</h3>
                    <p>18 mars 2021 -<span>Immobilier</span></p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic sequi architecto quo. Quo, non!</p>
                </article>

                <article>
                    <h3>Titre de l'article</h3>
                    <p>18 mars 2021 -<span>Immobilier</span></p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vel sequi consequatur quam quidem nemo officia.</p>
                </article>
            </div>
        </div>
    </div>
    </div>  
  )
}

export default Article