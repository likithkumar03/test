import React from 'react'
import Child1 from './Compponents/Child1';
import Child2 from './Compponents/Child2';


function Parent() {
  return (
    <div>
      <Child1 name ="1" phno = "9160113541"/>
      <Child2 name ="2" phno = "9160113541"/>
      <Child1 name ="3" phno = "9160113541"/>
      <Child2 name ="4" phno = "9160113541"/>
    </div>
  )
}

export default Parent;
