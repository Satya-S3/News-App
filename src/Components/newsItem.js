import React from 'react'
import './newsItemcss.css'

const newsItem =(props)=>{

let styles={width: '20rem'}
     
            let { title, description, imgurl, fullnews, author, date,source } =props;
            return (
                  <div>
                        <div className={`card bg-${props.mode==='dark'?'dark':'light'} text-${props.mode==='dark'?'light':'dark'} shadow-lg p-3 mb-5  rounded`} style={styles}>
                              <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{left:'90%' , zIndex:'1'}}>{source}</span>
                              <img src={!imgurl ? 'https://s.yimg.com/ny/api/res/1.2/JD039zayTex8mf7.hCFxVg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD02NzU-/https://media.zenfs.com/en/fox_business_text_367/0471890d084a06dda3f061901a0056ee' : imgurl} className="card-img-top" alt="..." />
                              <div className="card-body">
                                    <h5 className="card-title">{title}...</h5>
                                    <p className="card-text">{description}...</p>
                                    <p className="card-text"><small className="text-muted">By {author ? author : 'Unknown'} on {new Date(date).toGMTString()}</small></p>

                                    <a id='readm' href={fullnews} target='_blank' rel="noreferrer" className="bttn btn placeholder-wave btn-success">Read More</a>
                              </div>
                        </div>
                  </div>
            )
      
}

export default newsItem
