import { CiEdit } from "react-icons/ci";
import { GrCompliance } from "react-icons/gr";
import { MdDelete } from "react-icons/md"
import { useEffect, useRef } from "react";

import { useState } from "react";
const Todo = () => {
    let[data,setdata]=useState('')
    let [todo,settodo]=useState([])
    let[edit,setedit]=useState(0)
    let we=useRef()

    useEffect(()=>{
        we.current.focus()
    })

    let asd=()=>{
        settodo([...todo,{list:data,id:Date.now(),status:false}])
        setdata("")

        if(edit){
            let as=todo.find((x)=>x.id===edit)
            let ds=todo.map((x)=>x.id===as.id ? (x={id:x.id,list:data}):(x={id:x.id,list:x.list})
               

            )
            setdata('')
            settodo(ds)
            setedit(0)
        }
    }
    let done=(e)=>{
    e.preventDefault()
    }
let one=(id)=>{
settodo(todo.filter(x=>x.id!==id))

}
let two=(id)=>{
let gg=todo.map((x)=>{
    if(x.id===id){
        return{...x,status:!x.status}
    }
    return x
})
settodo(gg)

}
let three=(id)=>{
    let po=todo.find((x)=>x.id===id)
    setdata(po.list)
    setedit(po.id)
}
    
    return ( 
        <div className="one">
            <h1>TODO APP</h1>
            <form action="" onSubmit={done}>
                <input type="text" placeholder="Enter your name" value={data} onChange={(e)=>setdata(e.target.value)} ref={we}/>
                <button onClick={asd}>{edit?'edit':'submit'}</button>
            </form>
         <ul style={{listStyleType:"none"}}>
                {
                    todo.map((x)=>(
                       <div  key={x.id}className="lo">
                         <li id={x.status?'pl':''}>{x.list}</li>
                         <span>
                          <MdDelete title="delete" onClick={()=>one(x.id)}/>

                               <GrCompliance title="complete" onClick={()=>two(x.id)}/>
                            <CiEdit title="edit" onClick={()=>three(x.id)}/>
                         </span>
                       </div>
                       
                    ))

                }
                  </ul>
                 </div>
               
     );
}
 
export default Todo;