'use strict'

import React, { Component } from 'react'
import ajax from '@fdaciuk/ajax'
import AppContent from './components/app-content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      userinfo: null,
      repos: [],
      followers: [],
      isFetching: false
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  getGitHubApiUrl (username, type) {
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }
  getGitHubApiUrl2 (username) {
    const type = 'repos' 
    const internalUser = username ? `/${username}` : ''
    const internalType = type ? `/${type}` : ''
    
    return `https://api.github.com/users${internalUser}${internalType}`
  }
  getGitHubApiFollow (username) {
    const follow = 'followers' 
    const internalUser = username ? `/${username}` : ''
    const internalType = follow ? `/${follow}` : ''
    return `https://api.github.com/users${internalUser}${internalType}`
  }

  handleSearch (e) {
    const value = e.target.value
    const keyCode = e.which || e.keyCode
    const ENTER = 13

    if (keyCode === ENTER) {
      this.setState({ isFetching: true })

      ajax().get(this.getGitHubApiUrl(value))
      .then((result) => {
        this.setState({
          userinfo: {
            username: result.name,
            link: result.html_url,
            photo: result.avatar_url,
            login: result.login,
            repos: result.public_repos,
            }
        })
        
        this.getRepos(result.login);
      })
      .always(() => this.setState({ isFetching: false }))
      
    }
  }

  getRepos (user) {
    //console.log(user)
    const type = 'repos'
      const username = user //para evitar de usar um codigo muito grande abaixo
      ajax().get(this.getGitHubApiUrl2(username, type)) //vai resgatar o return da função com as variaveis type e username
        .then((result) => {
          this.setState({
            repos: result.map((repo) => ({ //mapeando os repos um por um
              name: repo.name,
              coco: repo.login,
              link: repo.html_url,
              stargazes: repo.stargazers_count,
              lang: repo.language,
              desc: repo.description
            }))  // <- você pode fazer o return só colocando o objeto enrte parenteses
          })
          console.log(username)
          this.getFollower(username)
        })
  }
  getFollower (user) {
      const username = user //para evitar de usar um codigo muito grande abaixo
      ajax().get(this.getGitHubApiFollow(username)) //vai resgatar o return da função com as variaveis type e username
        .then((result) => {

         

          this.setState({
            followers: result.map((follow) => ({ //mapeando os repos um por um
              link: follow.html_url,
              photo: follow.avatar_url,
              name: follow.login
              
            }))  // <- você pode fazer o return só colocando o objeto enrte parenteses
          })
          
          
        })
  }

  render () {
    return <AppContent
      {...this.state}
      handleSearch={this.handleSearch}
      
    />
  }
}

export default App




/*
TODO

CONFIGURAR OS FOLLOWERS UTILIZANDO A FUNÇÃO GET E O REQUEST DE API 


*/