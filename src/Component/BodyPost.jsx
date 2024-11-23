import { Avatar } from '@mui/material'
// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react'
import ClearIcon from '@mui/icons-material/Clear';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import FileUploadIcon from '@mui/icons-material/FileUpload';
import GetAppIcon from '@mui/icons-material/GetApp';
import ModeCommentIcon from '@mui/icons-material/ModeComment';
import ShareIcon from '@mui/icons-material/Share';
import './css/BodyPost.css'
import Post1 from './images/na.jpg'
import Post2 from './images/ai.jpg'
import Post3 from './images/pain.jpg'



export default function BodyPost() {
  // const [comment,setComment]=useState(false)

  const Opencomment =()=>{
    setComment(!comment)
    
  }
      //  Use State for Vote UP And Down
  const [vote,setVote] = useState(25)
  const [unvote,setUnvote]= useState(10)

  const [activevote,setActivevote]= useState(false)
  const [unactivevote,setUnactivevote]= useState(false)

  function votef(){
    if(activevote){
      setActivevote(false)
      setVote(vote-1)
    }else{
      setActivevote(true)
      setVote(vote+1)
      if(unactivevote){
        setUnactivevote(false)
        setVote(vote+1)
        setUnvote(unvote-1)
      }
    }
  }

  function unvotef(){
    if(unactivevote){
      setUnactivevote(false)
      setUnvote(unvote-1)
    }else{
      setUnactivevote(true)
      setUnvote(unvote+1)
      if(activevote){
        setActivevote(false)
        setUnvote(unvote+1)
        setVote(vote-1)
      }
    }
  }

  return (
    <>

                                     {/* Main Div */}
      <div className='postContainer'>
        <div className='pHeader1'>
          <div className='pHeader2'>
        
        <Avatar></Avatar>
            <div className='ppn'>
              <div className='hName'>

                                        {/* Post1 */}
                 <div className='author'>Alberto Rio</div>
                 <div className='follow'>Follow</div>
              </div>
              <div className='designation'>Spending time in nature boosts mental clarity, reduces stress, and renews our sense of wonder.<span className='time-span'>6d ago</span></div>
              </div>
            </div>
            
            <div className='clearicon'><ClearIcon/></div>
        </div>
        
        <p className='text'>Nature is a magnificent teacher and healer, offering us peace, inspiration, and balance. From the majestic mountains to the gentle rustling of leaves in a forest, it reminds us of the beauty of simplicity and the interconnectedness of all living things. Nature’s cycles—sunrise and sunset, the changing seasons, and the rhythm of life—teach us patience, resilience, and the importance of harmony.”</p>
        <div ><img src={Post1} alt="post1" className='post-img' /></div>
       
        <div className='pfooter1'>
          <div className='pfooter2'>
          <div className='pReaction'>
            <div className='voteupvote'>
                 <div className='vote'> 
                 <button onClick={votef}>
                     <div><FileUploadIcon/></div>
                     <div>Upvote</div>
                     <div>{vote}</div>
                     </button>
                 </div>
                                       {/* use state downVote on click */}
                 <div className='downvote'><button onClick={unvotef}><GetAppIcon/>{unvote}</button></div>

            </div>
            <div  className='pFc'>
              <div ><ModeCommentIcon/></div>
              <div>455</div>
              </div>
            <div className='pFc'>
              <div><ShareIcon/></div>
            <div>90</div>
            </div>
          </div>
          </div>
          <div className='horisign'><MoreHorizIcon/></div>
        </div>
       
        <div className="border-bottom"></div>

                                           {/* Post2 */}
        <div className='pHeader1'>
          <div className='pHeader2'>
        
        <Avatar></Avatar>
            <div className='ppn'>
              <div className='hName'>
                 <div className='author'>Kristina Terech  </div>
                 <div className='follow'>Follow</div>
              </div>
              <div className='designation'>AI enhances efficiency, solves complex problems
<span className='time-span'>5d ago</span></div>
              </div>
            </div>
            
            <div className='clearicon'><ClearIcon/></div>
        </div>
        
        <p className='text'>Artificial Intelligence (AI) is the simulation of human intelligence in machines that can think, learn, and make decisions. It powers technologies like virtual assistants, self-driving cars, and predictive analytics. </p>
        <div ><img src={Post2} alt="post1" className='post-img' /></div>
       
        <div className='pfooter1'>
          <div className='pfooter2'>
          <div className='pReaction'>
            <div className='voteupvote'>
                 <div className='vote'> 
                 <button onClick={votef}>
                     <div><FileUploadIcon/></div>
                     <div>Upvote</div>
                     <div>{vote}</div>
                     </button>
                 </div>

                 <div className='downvote'><button onClick={unvotef}><GetAppIcon/>{unvote}</button></div>

            </div>
            <div  className='pFc'>
              <div ><ModeCommentIcon/></div>
              <div>3k</div>
              </div>
            <div className='pFc'>
              <div><ShareIcon/></div>
            <div>387</div>
            </div>
          </div>
          </div>
          <div className='horisign'><MoreHorizIcon/></div>
        </div>
       
        <div className="border-bottom"></div>

                                           {/* Post2 */}
                                            
        <div className='pHeader1'>
          <div className='pHeader2'>
        
        <Avatar></Avatar>
            <div className='ppn'>
              <div className='hName'>
                 <div className='author'>Kenneth R. Rosen </div>
                 <div className='follow'>Follow</div>
              </div>
              <div className='designation'>a flaw in the famous model that programmers use to translate color to pixels.<span className='time-span'>23 d ago</span></div>
              </div>
            </div>
            
            <div className='clearicon'><ClearIcon/></div>
        </div>
        
        <p className='text'>Paintings are a timeless form of artistic expression that capture emotions, stories, and perspectives through colors and strokes. They serve as a window into the artist's imagination, reflecting cultures, history, and individuality.</p>
                <div ><img src={Post3} alt="post1" className='post-img' /></div>
       
        <div className='pfooter1'>
          <div className='pfooter2'>
          <div className='pReaction'>
            <div className='voteupvote'>
                 <div className='vote'> 
                 <button onClick={votef}>
                     <div><FileUploadIcon/></div>
                     <div>Upvote</div>
                     <div>{vote}</div>
                     </button>
                 </div>

                 <div className='downvote'><button onClick={unvotef}><GetAppIcon/>{unvote}</button></div>

            </div>
            <div  className='pFc'>
              <div ><ModeCommentIcon/></div>
              <div>8k</div>
              </div>
            <div className='pFc'>
              <div><ShareIcon/></div>
            <div>455</div>
            </div>
          </div>
          </div>
          <div className='horisign'><MoreHorizIcon/></div>
        </div>
       
        <div className="border-bottom"></div>

      </div>
    </>
  )
}
