import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Order = () => {
    const[loggedInUser,setLoggedInUser]=useContext(UserContext)
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [data,setData]=useState([])
    const id = sessionStorage.getItem('id');
    console.log(data);
    useEffect(()=>{
        fetch(`https://calm-eyrie-20283.herokuapp.com/services/${id}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data);
        })
    },[])


    const paymentId = sessionStorage.getItem('paymentId');
    console.log(paymentId);
    const onSubmit = value => {
        alert("Data Added Successfully")
        
        console.log(value);
        const eventData={
            name: value.name,
            email: value.email,
            service: data.name,
            orderTime:new Date(),
            payment:paymentId,
            status:'pending'
        } 
        console.log(eventData);
  
        const url='https://calm-eyrie-20283.herokuapp.com/addOrder'
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(eventData)
        })
        .then(res=>{
            console.log('This is Response ',res);
            alert("Data Added Successfully")
        })
        
        
    }


    return (
        <div>
            <h1 className="text-center">You Ordered : {data.name} Service</h1>
            <div className="container d-flex justify-content-center border bg-light rounded">
           
           <form onSubmit={handleSubmit(onSubmit)}>
           <h4>Name   :</h4>
           <input name="name" type="text" placeholder="Enter Your Name" {...register("name")} value={loggedInUser.name}/>
         
           <h4>Email:</h4>
           <input name="email" type="text" placeholder="Enter Your Email"  {...register("email")} value={loggedInUser.email} />
           <h4>Course       :</h4>
           <input name="service" type="text" {...register("service")} placeholder="Enter Price" value={data.name}/>
           <br />   
         
           
           <input className="btn btn-primary m-3" type="submit"/>
           </form>
           <div className="m-5 bg-white p-3" style={{width:'450px'}}>
               <h5 className="mb-3">IF You Want Skip it</h5>
           <ProcessPayment></ProcessPayment>
           </div>
           

       </div>
       

        </div>
    );
};

export default Order;