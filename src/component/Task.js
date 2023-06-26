
import "./TaskStyles.css";
import { useState } from "react";

function MultiSelect( props ){
   
    const values = props.values;
  
   
     const products= [
             'Australia',
             'Bermuda',
             'Canada',
             'Cameroon',
             'denmark',
             'France',
             'Finland',
             'Germany',
             'Bangladesh',
             'USA',
             'Alaska',
             'Iceland',
             'Scotland',
             'Switzerland',
             'Greenland',
             'Bhutan',
             'Nepal'
            
             
     ];

     const [readonly, setReadOnly] = useState(props.readonly);
     const [display, setDisplay] = useState(false);
     const toggleDropdown = function(){
         setDisplay(!display);
     }
     const updateList = function(e){
         console.log(e);
     }

     const list = [];

     for (const [i,product] of
          products.entries())
     {  console.log( values,"includes",product,"=", values.includes(product) );
       
         list.push(
            <li key={i} style={{paddingTop:"20px",marginTop:"-10px"}}>
              <input
                 id={"item"+i}
                 type="checkbox"
                 value={product}
                 onChange={updateList}
                 defaultChecked={(product == (values[0]))||(product == (values[1]))}
                 disabled={((values.includes(product) || values.includes(product))) || readonly}
               
              />
              <label htmlFor={"item"+i} >
                 {product}
              </label>
            </li>
         )
     }

     return (
       <div className="task">
            
            <input type="text"
             placeholder="e.g: Australia"
             onClick={toggleDropdown}
         />
         <ul className={display?"":"d-none"}>
             {list}
         </ul>
            
       </div>                                                                                                              )

}

export default MultiSelect;

