import React from 'react';
import PropTypes from 'prop-types'

const Follow = ({ followers}) => (
    
    <div>
        
        <div className='Followers'>
                <p id="end">Watch All</p>
                <p id="grey-title">Followers</p>
                
            {followers.map((follow,key) => (
                <div>
            
                <a id={key} href={follow.link}><img src={follow.photo}/>{follow.name}</a>
                
                
                </div>

                
            ))}
            </div>
       
 </div>
)

Follow.propTypes = {
    followers: PropTypes.array,
}
export default Follow;