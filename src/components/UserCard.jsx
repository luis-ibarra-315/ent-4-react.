import React from 'react';
import './styles/userCard.css';

const UserCard = ({user,deleteUser,setUpdate,setIsShow}) => {

    const handleDelete = async () => {
     await deleteUser('/users',user.id);
    
    }

    const handleEdit = () => {
      setUpdate(user);
      setIsShow(true);

    }
    

  return (
    <article className='usercard'>
     <h2 className='usercard_name'>{user.first_name} {user.last_name}</h2>  
     <hr/> 
     <ul className='usercard_list'>
        <li className='usercard_item'><span>Email: </span><span>{user.email}</span></li>
        <li className='usercard_item'><span>Birthday: </span><span> <ion-icon name="gift-outline"></ion-icon> {user.birthday}</span></li>
     </ul>
     <hr/>
     <div className='usercard_buttons'>
        <button className='usercard_btn_delete' onClick={handleDelete}><ion-icon name="trash-outline"></ion-icon></button>
        <button className='usercard_btn_edit' onClick={handleEdit}><ion-icon name="create-outline"></ion-icon></button>
     </div>
    </article>
  )
}

export default UserCard;