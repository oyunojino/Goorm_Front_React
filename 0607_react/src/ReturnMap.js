import React,{Component} from "react";
class ReturnMap extends Component{
    render(){
        const element_Array=[
            <li>react</li>,
            <li>1000</li>,
            <li>Array Map</li>
        ]
        return(
            <ul>
                {element_Array.map((array_val)=>array_val)}
            </ul>
        )
    }
}
export default ReturnMap;