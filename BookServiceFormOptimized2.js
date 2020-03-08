import React ,{Component} from "react"

class BookServiceFormOptimized2 extends Component
{
    state={
        isbnnumber:"",
        Authorname:"",
        BookTitle:"",
        checkbox:"",
        title:"Miss",
        isbnnumberError:""

    };

    handleChange=(event)=>{
        const isCheckbox=event.target.type==='checkbox';
        this.setState({[event.target.name]:isCheckbox
            ?event.target.checked
            :event.target.value
        });      
    };
    
    handleCheck=event=>{
        this.setState({checkbox:event.target.checked});
    };

    validate=()=>{
        let isbnnumberError="";
         if(!this.state.isbnnumber.includes('1','2','3','4','5','6','7','8','9','0'))
         {
               isbnnumberError="invalid ISBN Number";
         }
         if(isbnnumberError){
             this.setState({isbnnumberError});
             return false;
         }
         return true;
    };
    
    handleSubmit = event=>{
        event.preventDefault();
        const isValid=this.validate();
        if (isValid){
        console.log(this.state);
        }
    }


    render()
    {
        return (
            <form  onSubmit={this.handleSubmit}>
        <p>
          <div>
            <select          
            name="title"
              value={this.state.title} 
              onChange={this.handleChange}>
                <option>Mr.</option>
                <option>Ms.</option>
                <option>Mrs.</option>               
            </select>    
            <fieldset align="center">  Enter your name  </fieldset>      
            <input 
                name="Personname"
                placeholder="Enter your name"
                value ={this.state.name} 
                onChange={
                    this.handleChange}/>
                    </div>
                    </p> 

                  <div>                
                  <fieldset align="center">  Enter ISBN Number  </fieldset>  
                <input                             
                name="isbnnumber"
                placeholder="ISBNNumber*"
                value ={this.state.name} 
                onChange={
                    this.handleChange}
                    />                  
               <div style={{fontSize:10,color:"red"}}>
                    {this.state.isbnnumberError}
                </div>               
                </div>  
                  <div>
                  <fieldset align="center">  Enter Author name  </fieldset>
                <input 
                name="Authorname"
                placeholder="Author"
                value ={this.state.name} onChange={
                    this.handleChange}/>
                    </div>

                 <div>
                 <fieldset align="center">  Enter Title  </fieldset>
                 <input 
                name="BookTitle"
                placeholder="Title*"
                value ={this.state.name} onChange={
                    this.handleChange}/>
                    </div>
                 
                 <div>
                 <fieldset align="center">  Enter Publisher  </fieldset>
                 <input 
                name="Publisher"
                placeholder="Publisher"
                value ={this.state.name} onChange={
                    this.handleChange}/>
                    </div>
               <div>
               <fieldset align="center">  Order Book? </fieldset>
                <input 
                name="rememberMe"
                type="checkbox"
                checked={this.state.rememberMe}
                onChange={this.handleChange}/>
                </div>
            
          
        {/* <button onClick={this.handleSubmit}> Submit</button> */}
        <button type ="submit">Submit</button>
            
            </form>
        );
    }
}
export default BookServiceFormOptimized2