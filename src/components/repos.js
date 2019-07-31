'use strict'

import React from 'react'
import PropTypes from 'prop-types'

const Repos = ({ repos, userinfo }) => (
  
  
  <div>
     {repos.map((repo, index) => (
     <div key = {index} className="repo" >
       
        <div className="head-repo">
            <a href={userinfo.link}><img alt="a" src={userinfo.photo}/></a>
            <a href={userinfo.link}>{userinfo.username}</a>
        </div>
        
        {repo.lang == null && 
    <span id="lang"><span style={{color:'#bf6868'}}>script</span> <span style={{color:'#e5e881'}}>type </span>= "text/mysterious"</span>

    || repo.lang == 'JavaScript' &&
    <span id="lang"><span style={{color:'#7f7f81'}}>//{repo.lang}</span><br></br><span style={{color:'#1e858f'}}>var</span> repositoryName = "{repo.name}";<br/><span><span className="bool">bool</span> hasIssue = <span className="boolean">true</span>;</span>
    <br/><span><span className="bool">bool</span> isArchived = <span className="boolean">true</span>;</span>
    <br/><br/><br/><span><span className="console">console</span>.<span className="log">log</span> ('We had issue but is archived')</span>
    <br/><span><span className="console">console</span>.<span className="log">log</span> ('Everything OK :) ')</span></span>
    
    || repo.lang == 'CSS' &&
    <span id="lang"><span style={{color:'#44802a'}}>/*{repo.lang}*/</span><br></br>link rel="stylesheet" href="/w3css/4/w3.css"</span>
    || repo.lang == 'HTML' &&
    <span id="lang"><span style={{color:'#7f7f81'}}>//{repo.lang} //</span><br></br>link rel="stylesheet" href="/w3css/4/w3.css"</span>
 
    }
        

        <div className="bottom-repo"> 
            
               
            <a id="repo-name" style={{fontWeight:600}}href={repo.link}>{userinfo.login} <span style={{color:'grey',fontWeight:100}}>{repo.desc}</span></a>
            <p>{repo.stargazes} Likes</p> 
            

        </div>

     </div>  
     ))}
     
  </div>
  
)



Repos.propTypes = {
  className: PropTypes.string,
  repos: PropTypes.array,
  
  userinfo: PropTypes.shape({
    username: PropTypes.string,
    photo: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    repos: PropTypes.number.isRequired,
    followers: PropTypes.number.isRequired,
    following: PropTypes.number.isRequired
  })

}

export default Repos
