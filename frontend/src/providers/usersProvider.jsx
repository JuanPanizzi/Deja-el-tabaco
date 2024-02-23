import React, {  createContext, useEffect, useState } from 'react'

export const UsersContext = createContext('');
export const UsersProvider = ({children}) => {

const [userData, setUserData] = useState(null);
const [newsData, setNewsData] = useState([])
const updateUserDataContext = (user) =>{

    setUserData(user)
}

const updateNewsDataContext = (news) =>{

  setNewsData(news)
}


  return (
    <UsersContext.Provider value={{updateUserDataContext, updateNewsDataContext, userData, newsData}}>
    {children}
    </UsersContext.Provider>
  )
}
