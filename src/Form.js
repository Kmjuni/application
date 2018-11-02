import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

class Form extends Component{
    constructor(props){
        super(props);
        this.state = {
            subject: [
                {name:"Computer Science", id:1,price:12333, checked: false},
                {name:"Kiswahili", id:2, price:90383, checked:false},
                {name:"Mathematics", id:3,price:45555, checked:false},
                {name:"Networking", id:4,price:98884,checked:false},
                {name:"Graphics design", id:5,price:99999,checked:false}
            ]
        };
        this.handleChange = this.handleChange.bind(this);
       
    }
    handleChange(event) {
        if(event.target.checked){
            this.setState({
                subject: this.state.subject.map((obj, i) =>{
                    if( obj.name === event.target.value){
                        obj.checked = true
                    }
                    return obj
                })
            })
        }
        else{
          
            this.setState({
                subject: this.state.subject.map((obj, i) =>{
                    if( obj.name === event.target.value){
                        obj.checked = false
                    }
                    return obj
                })
            })
        }
       
    }
       
    render(){
        const { subject } = this.state;
        return(
            <div className="container-fluid col-md-8 jumbotron">
                <div className="row">
                <div className="col">
                   <form>
                      <Checkbox 
                        subject={subject}
                        handleChange={this.handleChange}
                         />
                   </form>
               </div>
               <div className="col">
                 <ul className="list-group">
                      <p>The selected subjects</p>
                      <ListView subject={subject} />
                  </ul>
               </div>
            </div>
            </div>
           
            
        );
    }
}
const Checkbox = props => {
    const rows = props.subject.map((row,index) => {
          return(
              <div className="form-group"  key={index}>
                  <label>
                      <input type="checkbox" 
                             name="subject"
                              value={row.name}
                            
                              onClick={props.handleChange}
                              />
                      {row.name}
                  </label>
              </div>
          );
    });
    return rows;

}

const ListView = props => {
    const checked = props.subject.filter((row,index) => {
        return row.checked === true
    })
    const sum = checked.reduce((total,obj) =>{
         return total + obj.price
    },0)

    const rows = checked.map((row,index) => {
    
            return(
                    <li className="list-group-item">{row.name} <span className="float-right"> {row.price } </span></li>
            );
    })
    return(
        <div>
            {rows}
            <li className="list-group-item"><b>Total</b> <span className="float-right"><b>{sum}</b></span></li>
        </div>
    );
}
export default Form;