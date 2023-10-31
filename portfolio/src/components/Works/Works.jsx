import React, { useEffect } from 'react'
import './Works.css'
import { useGetWebSites } from '../assets/Context/useGetWebsites';


function Works() {

  const {isLoading, webSites, callAPI} = useGetWebSites()

  useEffect(() => {
   callAPI();
  },[])

  return (
    <div className='works'>
        
      <div className='works-body'>

        <div>
          <h1 className='header'>EXAMPLES OF MY WORKS:</h1>
        </div>

        <div className='websites'>
              {isLoading ? (<div>loading</div>):(
                <ul className='item-sites'>
                  {webSites.map((website) => {
                    return (
                      <li key={website.id}>
                        <h1 className='name-of-site'>
                          {website.name}
                        </h1>
                        <a className='site-img' target='_blank' href={website.url}>
                          <img src= {website.url === 'https://yan-tic-tac-toe.netlify.app/' ? "./Imgs/tictactoe.png":"./Imgs/trimminggardens.png"}/>
                        </a>
                        <div className='descr-site'>
                          {website.description}
                        </div>
                      </li>
                    )
                  })}
                </ul>
            )}
         </div>

      </div>

    </div>
  )
}

export default Works