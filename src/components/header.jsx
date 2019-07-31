import React from 'react';
import PropTypes from 'prop-types'
import logo from '../style/logo.png'

const Head = ({handleSearch, isDisable, getRepos}) => (
            <div className="header">
                <div className="item">
                    <img id="logo" src={logo}/>
                    <input placeholder="Search"
                    type="text"
                    disabled={isDisable} //recebendo o valor de isFetching e passando se habilita ou não o input 
                    onKeyUp={handleSearch} //quando apertar a tecla especificada no handleSearch vai executar            
                    ></input>
                   
                </div>

                
           </div>
        )
Head.propTypes = {

    handleSearch: PropTypes.func.isRequired, //passando como propriedade required e função
    isDisable: PropTypes.bool.isRequired
    }
export default Head;