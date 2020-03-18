import React, { Component } from 'react'
import '../SearchExpressUI.css'
import axios from 'axios';
import Loader from '../loader.gif';

 class SearchExpressUI extends Component {

    constructor(props)
    {
        super(props); 
            this.state=
            {
                searchquery:'',
                results:{},
                loading:false,
                message:''
            };
            this.cancel=''; 
     };

     fetchSearchResults=(searchquery)=>{
         const searchUrl='http://localhost:61740/api/home';

         if(this.cancel){  //if there is something in the current request then cancel the previous request
             this.cancel.cancel();
         }
         this.cancel=axios.CancelToken.source();//if not then we will create the token and store it

         axios.get(searchUrl,{cancelToken:this.cancel.token,
        })
        //  .then(res=>{
        //      console.warn(res.data);//gives us only the data saved in the database..other useless data goes away
        .then(res=>{
            const resultNotFoundMsg=!res.data?
            'There is no such search result. Please add a page':'';

            this.setState({
                results:res.data,
                message:resultNotFoundMsg,
                loading:false
            })
        })      
         .catch(error=>{
             if(axios.isCancel(error)||error){
                    this.setState({
                        loading:false,
                        message:'Failed to fetch the data. Please check the network'
                    })
             }
            })
     };

     handleOnInputChange=(event)=>{
         const searchquery=event.target.value;
         if(!searchquery){
                 this.setState({searchquery,results:{},message:''});
         }
         else{
         this.setState({searchquery, loading:true,message:''},()=>{
             this.fetchSearchResults(searchquery);//callbackfunction
         
         });      
        }
      
     };
     renderSearchResults=()=>{
         const {results}=this.state;//pulling data out of state..results is an object
         if(Object.keys(results).length && results.length){
 
            return(
                <div className="results-container">
                {
                    results.map(result=>{
                        return(
                        <a key={result.isbnNumber} className="result-item"> 

                        <h6>{result.title}</h6>

                        </a>
                        )
                        }
                    )
                }
                </div>
            )
         }
     };
   
render(){
     const {searchquery,message,loading}=this.state;   //  pulling state out of constructor
    return(
        <div className="container">
            <h2 className="heading">Search Express</h2>
           <label className="search-label" htmlFor="search-input">
               <input  
               name="searchquery"
               type="text"
               value={searchquery} 
               id="search-input"
               placeholder="Search.."
               onChange={this.handleOnInputChange}
               />
               <i className="fa fa-search search-icon"/>
               
           </label>
            {/* //errormsg */}
          {message && <p className="message">{message}</p>}
          <img src={ Loader } className={`search-loading ${ loading ? 'show' : 'hide' }`} alt="loader"/>
           {/* Results */}
           {this.renderSearchResults()}
        </div>
    )
}
}
export default SearchExpressUI