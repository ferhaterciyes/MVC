import PopUpView from './PopUpView';
import Model from './PopUpModel';
import { useEffect, useState } from 'react';
import { data } from 'autoprefixer';



const PopUpController = ({setIsOpen , isOpen}) => {
  const [posts , setPosts] =useState(null)


  // Model açıldığında kullanmıcının gönderilerini alır
useEffect(()=>{
  Model.getUserPosts(isOpen)
  .then((data)=>setPosts(data))
},[])

    
  return (
    <PopUpView posts={posts} setIsOpen={setIsOpen} isOpen={isOpen}/>
  )
}

export default PopUpController