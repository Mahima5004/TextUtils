import React from 'react'
// function Functional(){
//     return <h1>Hello Mahima</h1>
// }
//props is object through which we can add properties by adding it as parameter

const Functional=(props) => 
   <div>
      <h1>Hello Functional Component by {props.name} a.k.a {props.hero}</h1>
      {props.children}
   </div>
 export default Functional
