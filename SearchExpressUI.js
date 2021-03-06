import React, { Component, Fragment } from 'react'
import '../SearchExpressUI.css'
import axios from 'axios';
import Loader from '../loader.gif';
import { Select } from 'react-select'
import SearchSuggestionList from '../SearchSuggestionList';
import 'bootstrap/dist/css/bootstrap.min.css';
import DataListInput from 'react-datalist-input';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import { useHistory } from "react-router-dom";


 class SearchExpressUI extends Component {

    constructor(props)
    {
        super(props); 
            this.state=
            {
                searchquery:'',
                selected:'',
                results:{},
                loading:false,
                message:'',
                selectedtitle:''
            };
            this.cancel=''; 
            this.renderSearchList = this.renderSearchList.bind(this);
     };


     fetchSearchResults=(searchquery)=>{
        const searchUrl='http://localhost:9000/api/home';
         if(this.cancel){  //if there is something in the current request then cancel the previous request
             this.cancel.cancel();
         }
         this.cancel=axios.CancelToken.source();//if not then we will create the token and store it

         axios.get(searchUrl,{cancelToken:this.cancel.token,})
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
                 this.setState({loading:false,searchquery,results:{},message:''});
         }
         else{
         this.setState({searchquery:searchquery, loading:true,message:''},()=>{
             this.fetchSearchResults(searchquery);//callbackfunction
         
         });      
        }
      
     };
   
handleOnSelectChange=(event)=>{
     const {selected}=event.target.value;
     const searchquery=this.state
     if(!searchquery){
    this.setState({searchquery:selected})
     }
     else{
         this.setState({searchquery:this.cancel.searchquery})
     }
}

     renderSearchList=()=>
     {
         const {results}=this.state//pulling data out of state..results is an object
          if(Object.keys[results].length && results.length){           
            return(
                <div >
                {
                   results.map(result=>{  
                     return(                                          
                      <a key={result.title}
                      className="result-item" >          
                     <h6 >{result.title}</h6> 
                     
                      </a>
                    //  results.map(result=>{
                    //     return( <div>
                    //      <h1>{result.title}</h1></div>)
                   )})
                    }
                    </div>)
                    }
                    console.log(results.title)
                }
      
            
                        
                       
                    /* // return(  
                    //     <div>
                    //      <select */
                    /* //       name="selected"         
                    //   //   onChange={(value) => this.handleOnSelectChange(value)} 
                    //      onClick={this.handleOnSelectChange.bind(this)} 
                    //      value={this.state.searchquery}                                
                    //      >      
                    //        <option selected ="selected">select..</option>      
                    //     { results.map(result=>(
                           */
                    /* //      <  option key={result.title} */
                    /* //         value={result.title}>
                    //         {result.title}
                    //         </option> */
                    /* //     ) )
                    //     } */
                    /* //       </select>   */
                    /* //       </div>                         */
                       
     
     
                
                       


render()
{  
     const {searchquery,message,loading,results}=this.state; //  pulling state out of constructor
    return( 
      <form onSubmit={this.renderSearchList}>
         <div className="container">	 
		 	<h2 className="heading">SEARCH EXPRESS</h2>
             <i className="dropdown icon"></i>
               <label className="search-label" htmlFor="search-input">
                <input 
               name="searchquery"
                type="hidden"
                type="text"
                value={searchquery} 
                id="search-input"
                placeholder="Search.."
                onChange={this.handleOnInputChange}   
                >              
                </input> 
                     
                <i className="fa fa-search search-icon"/>             
                </label> 
              
            {message && <p className="message">{message}</p>}
           <img src={ Loader } className={`search-loading ${ loading ? 'show' : 'hide' }`} alt="loader"/>   
             {/* {this.renderSearchList()}    */}

         <button  className="ui button" type ="submit">Search</button>        
         <button className="ui button">Add</button>
        </div>                                                          
      </form>   
   )
}
     
        



    //     <div className="container">
    //   <div className="input-group">
    //   <div><h2 className="heading">SEARCH EXPRESS</h2></div> 
    //   <label className="search-label" htmlFor="search-input">   
    //   <input type="text" 
    //   name="searchquery"
    //   className="form-control" 
    //   placeholder="Search"
    //   value={searchquery} 
    //   id="search-input"
    //  placeholder="Search.."
    //    onChange={this.handleOnInputChange}>
    //        {/* <datalist id="browsers">
    //     <option value="Internet Explorer"></option> */}
    //    </input>
    //    </label>   
    //   <button onClick={this.renderSearchList}>Search  
    //   </button>                      
    //   <button>Add</button>
    //    </div>     
    //    </div>    
      
 }
  
  export default SearchExpressUI

      