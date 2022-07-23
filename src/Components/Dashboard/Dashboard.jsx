import React, { useEffect, useState } from 'react'
import { UserRow } from '../UserRow/UserRow'
import data from '../../mockData/user.json';

import './Dashboard.scss';

export const Dashboard = () => {
  const [userData, setUserData] = useState([]);
  
  useEffect(() => {
    setUserData(data);
  }, []);

  return (
    <div className='dashboard'>
      {(userData || []).map(user => <UserRow data={user} />)}
    </div>
  )
}
