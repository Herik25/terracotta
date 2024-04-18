import React from 'react'
import './MainHero.css'

function MainHero() {
  return (
    <div className='container'>
        <div className='product-container'>
            <div className=' gif'>
                <img src="//creative-ishi.myshopify.com/cdn/shop/files/lf20_gt7ccog0.json_3.gif?v=1679653484" alt="icon" />
            </div>
            <div className='hero-title'>
                Canvas Story
            </div>
            <div className=' hero-name'>
                TERRA COTTA
            </div>
            <div className=' hero-desc'>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Corrupti eum molestias obcaecati suscipit veniam. Amet, atque. Totam 
            </div>
            <div className=' btn'>
                <div className='shopnow'>shop now</div>
                <div className='readmore'>Read More</div>
            </div>
        </div>
        <div className=' image'>
            <img src="//creative-ishi.myshopify.com/cdn/shop/files/Rectangle_114_1_copy.png?v=1679569198" alt="prodctImage" />
        </div>
    </div>
  )
}

export default MainHero