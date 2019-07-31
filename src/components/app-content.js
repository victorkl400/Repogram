'use strict'

import React from 'react'
import Header from './header'
import Follow from './follow'

import Repos from './repos'
import PropTypes from 'prop-types'

const AppContent = ({
  userinfo,
  repos,
  followers,
  isFetching,
  handleSearch,
  getRepos
}) => (
  <div className="App">
           
           
           <Header  isDisable={isFetching} handleSearch={handleSearch} getRepos={getRepos}/>
            {isFetching && <div class="sk-folding-cube">
                                      <div class="sk-cube1 sk-cube"></div>
                                      <div class="sk-cube2 sk-cube"></div>
                                      <div class="sk-cube4 sk-cube"></div>
                                      <div class="sk-cube3 sk-cube"></div>
                                      <br></br>
                                    </div>  
            /*Executa essa div/componente 
            quando fetching for verdadeiro (Não é necessário !! pois 
            isFetching ja é um boolean)*/}
          
          {!!repos.length &&  
            <Repos
                className='repo'  
                userinfo={userinfo}
                repos={repos}
               
            /> }
            {!!followers.length &&
            <Follow 
              
              followers={followers}
            />}
            
            
             
              
 
        </div>
)

AppContent.propTypes = {
  userinfo: PropTypes.object,
  repos: PropTypes.array.isRequired,
  followers: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
  handleSearch: PropTypes.func.isRequired,
  getRepos: PropTypes.func.isRequired
  
}

export default AppContent
