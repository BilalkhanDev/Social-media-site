import React ,{useState}from 'react'

const App = () => {
const[input,setinput]=useState("");
const[items,setitems]=useState([]);
const inputhandler=(e)=>{
     setinput(e.target.value);
}
const btn=(e)=>{
     e.preventDefault();
     setitems(prev=>{return[...prev,input]})
     setinput("")
     
}
//FOR EVENT ON ICON 
const Bt=()=>{
     document.getElementById("icon").style.display="inline";
}
//FOR DELETION OF MESSAGE
const deletehandle=(id)=>{
     setitems(pre=>{
          return pre.filter((value,index)=>{
               return index!==id
          })
        }) 

}

     
  return (
    <>
    <div className="container-fluid">
     <div className="row" id='row1'>
          <div className="col-2">
               <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoKbDrUFNhyCBQuwcSZP4lgUFu7xmP2AZyuQ&usqp=CAU" alt="" />
              
         </div>
         <div className="col-3 text-white"><h5>Bilal</h5></div>
        
     </div>
     <div className="row" id='row2'>
        <div className="col-6 offset-5 text-center">{items.map((value,index)=>{
          return (
               <>
 
                 
                 <div style={{marginleft:"auto"}} >
            
                 <p style={{fontSize:"30px",backgroundColor:"white",color:"black",borderRadius:"10px"}} onDoubleClick={Bt} >  <span class="glyphicon glyphicon-trash " id="icon"style={{fontSize:"15px"}} onClick={()=>{deletehandle(index)}} ></span>{value}</p>
                  </div>
                  </>
               
          )
       })}</div>
     </div>
     <div className="row" id='row3'>
          
     <textarea type="text" id='input' value={input} onChange={inputhandler} />
          <button className='btn ml-5' onClick={btn}>Send</button>
     </div>
    </div>
    </>
  )
}

export default App