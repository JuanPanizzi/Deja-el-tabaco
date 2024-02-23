/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from 'react'
import { NavLink } from "react-router-dom"
import axios from 'axios'
import noImage from '../recursos/no-image.png'
import { Loader } from './Loader'
import { UsersContext } from '../providers/usersProvider'

export const CtnNotices = () => {

    const API_KEY = '7092e6e095af44b4932a1930b71475d1'

  const {updateNewsDataContext, newsData} = useContext(UsersContext)

    //    const client = axios.create({
    //     baseURL: "https://newsapi.org/v2/everything?"
    // })
    
      const getNews = async () =>{
    
        if(newsData.length > 0) return;

        try {
          const newsApi = await axios.get(`https://newsapi.org/v2/everything`, {
            params: {
              apiKey: API_KEY,
              q: 'cigarro OR cigarrillo OR tabaco OR fumar OR nicotina',
              searchIn: 'title',
              language: 'es',
              // pageSize: 10
            }
          })
          if(newsApi.status >= 200 && newsApi.status <= 299){
           
            // sessionStorage.setItem('news', JSON.stringify(newsApi.data.articles))
            // console.log(newsApi.data.articles)
            updateNewsDataContext(newsApi.data.articles)

          }
        } catch (error) {
          console.error('Error en la petición:', error);
        }

    
      }

      useEffect(() => {
        
        if(newsData.length == 0){
          console.log('newsData en useEffect y length abajo')
          console.log(newsData.length)
          getNews()
        }else{
          return
        }
        }, [])
      

  return (

    <>
    { newsData.length > 0?
<>
{/* rid grid-cols-4 gap-4 */}
{/* <section className='mt-10 pt-10 grid grid-cols-1 gap-2 sm:grid-cols-2  '> */}
<section className='mt-10 flex flex-wrap items-center justify-center p-10 '>

    {newsData.map((notice, index) => (
      <div key={`${notice[index]}-${notice.publishedAt}`} className='bg-white max-w-72 sm:max-w-64 mb-7 bg-white rounded-2xl shadow-2x mx-5 h-96 flex flex-col'>
      {
        <div className='basis-1/2 overflow-hidden'>
          <img src={!notice.urlToImage ? noImage : notice.urlToImage } alt="" className='rounded-t-lg w-full h-full object-cover' />

      </div>
      
      
      }
      <div className='p-3  basis-1/2'>
        <h1 className='font-bold'>{notice.title}</h1>
        <p className='mt-3 block truncate ...'>{notice.description}</p>
      </div>
      <div className='mb-2 w-8/12 mx-auto'>
        <NavLink className='block  p-1 hover:bg-blue-btn-hover bg-blue-btn border-solid border-2 border-black rounded-2xl text-center self-end' to={notice.url} target="_blank">Ver más</NavLink>
      </div>
    </div>
    )
    )}
</section>
    </>
  :
  <section className='mt-80 flex flex-col justify-between items-center'>
  <Loader />
</section>
  
    }
    </>
  
  )
}
