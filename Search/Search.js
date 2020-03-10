import React , { Component}from 'react'

class Search extends Component
{
    render()
    {
        return(
          <div className="ui search">
              <h1>SEARCH EXPRESS</h1>
              <p>        
             <input className="prompt" type="text" placeholder="Type your search here..."/>

        <button>search</button>
        </p>
        <div className="results"></div>
      </div>
      ) ; 
}
}

export default Search