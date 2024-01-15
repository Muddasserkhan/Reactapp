import React from 'react'

const data = [
    "https://images.pexels.com/photos/19190073/pexels-photo-19190073/free-photo-of-trees-in-water.jpeg",
    "https://images.pexels.com/photos/18694310/pexels-photo-18694310/free-photo-of-a-waterfall-flowing-over-rocks-in-a-forest.jpeg",
    "https://images.pexels.com/photos/18693958/pexels-photo-18693958/free-photo-of-an-aerial-view-of-a-large-country-estate.jpeg",
    "https://images.pexels.com/photos/19012544/pexels-photo-19012544/free-photo-of-storm.jpeg",
    "https://images.pexels.com/photos/18422729/pexels-photo-18422729/free-photo-of-semihpalaz2023.jpeg"
]



export default function ImageSlider() {

    return (
        <>
            <div className='container'>
                {
                    <div>
                        <button>Previous</button>
                            <img src={data[0]} alt="walpaper" width="300px" height="300px"/>
                        <button>Next</button>
                    </div>
                }
            </div>
        </>
    )
}
