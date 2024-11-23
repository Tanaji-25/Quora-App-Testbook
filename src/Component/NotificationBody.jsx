import React from 'react'
import { NavLink } from 'react-router-dom'
import './css/Notificationbody.css'
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Avatar } from '@mui/material';
function NotificationBody() {
  return (
    <>
       <div className="Notification_body_container">
        
      <div className='Heading'>         
      <h4>Notifications</h4>
      <p> Settings</p>
      </div>

                         {/* MAin TExt */}
       <div className='singleNotificationstyl'>
              <div className='profileLogo svg-icon'><Avatar/></div>
              <div className='notifiparagraph'><span className='author'>Rihana Cortney</span><span className='days'>  Mon</span>
              <h3 className='ques'>On Economic rate hike, what do you think about Donald Trump ?</h3>
              <p className='view'> Richard Elvis
 answer this</p>
              </div>
              <div className='tripledot'><MoreHorizIcon/></div>
       </div>
       <div className='singleNotificationstyl'>
        <div className='profileLogo svg-icon'><Avatar/></div>
        <div className='notifiparagraph'><span className='author'>Jhon Macarty</span><span className='days'>May 21 </span>
        <h3 className='ques'>JP Morgan 2023 freshers rolls out, bringing Perplexity AI to more hiring</h3>
        <p className='view'>Lewis D.
answered this </p>
        </div>
        <div  className='tripledot'><MoreHorizIcon/></div>
       </div>
       <div className='singleNotificationstyl'>
           <div className='profileLogo svg-icon'><Avatar/></div>
           <div className='notifiparagraph'><span className='author'>Jensen Huang</span>
           <span className='days'>May 04</span>
           <h3 className='ques'>Can AI change the world for good? Nvidia believes so </h3>
           <p className='view'> Jensen answered this</p>
           
           </div>
           <div  className='tripledot'><MoreHorizIcon/></div>
       </div>
      
      </div>
    </>
  )
}

export default NotificationBody
