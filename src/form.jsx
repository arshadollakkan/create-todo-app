

import { useState,useEffect } from "react";
import { useRef } from "react";
const Form = () => {
    let [data,setdata]=useState([])
    let we=useRef(null)
    let qs=useRef(null)
    let pol=(e)=>{
        e.preventDefault()
        let perr=we.current.value
        let address=qs.current.value
        let data={perr,address}
        fetch('http://localhost:4000/ok',{
            method:'post',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert("sucess")

    }



    
    useEffect(()=>{
        let fetchdata=async()=>{
            let responce=await fetch('http://localhost:4000/ok')
            let data=await responce.json()
            setdata(data)
           
        }
        fetchdata()
       

    })
    let edit=(id)=>{
        let perr=we.current.value
        let address=qs.current.value
        let data={perr,address}

        fetch(`http://localhost:4000/ok/${id}`,{
            method:'PUT',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(data)
        })
        alert("sucess")
    }
 

    return ( <div className="lk">
        <h1>form</h1>
        <form action="" onSubmit={pol}>
            <div className="one">
                <label htmlFor="">name</label>
                <input type="text" placeholder="enter your name" ref={we}/>
            </div>
            <div className="two">
                <label htmlFor="">address</label>
                <input type="text" placeholder="enter your address" ref={qs} />
            </div>
            <button>submit</button>
            
            
        </form>
        <div className="lop">
            {
                data.map((x)=>(
                    <div className="oop">
                        <h1>name:{x.perr}</h1>
                        <h2>address:{x.address}</h2>
                        <button onClick={()=>edit(x.id)}>edit</button>
                    </div>
                ))
            }
        </div>
    </div>
    );
}
 
export default Form;