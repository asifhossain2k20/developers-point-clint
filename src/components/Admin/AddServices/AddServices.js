import React from 'react';
import SideBar from '../SideBar/SideBar';
import axios from 'axios';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const AddServices = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const [imgUrl,setImgUrl]=useState(null);


    const onSubmit = data => {
        console.log(data);
        const eventData={
            name: data.name,
            price:data.price,
            description: data.description,
            imgURL: imgUrl
        } 
        console.log(eventData);
  
        const url='https://calm-eyrie-20283.herokuapp.com/addServices'
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


    const handleImgUpload=event => {
        console.log(event.target.files[0]);
        const imgData=new FormData();
        imgData.set('key','3056d284efcf0e25af106ff8b6a972f1')
        imgData.append('image',event.target.files[0])
        axios.post('https://api.imgbb.com/1/upload', imgData)
        .then(function (response) {
          setImgUrl(response.data.data.url);
        })
        .catch(function (error) {
          console.log(error);
        });
  
    }
    return (
        <div>
             <div className="row">
                <div className="col-md-3">
                    <SideBar></SideBar>
                </div>
                <div className="col-md-9">
                <h1>ADD services List</h1>


                <div className="container d-flex justify-content-center border bg-light rounded">
           
           <form onSubmit={handleSubmit(onSubmit)}>
           <h4>Service Name   :</h4>
           <input name="name" type="text" placeholder="Enter Book Name" {...register("name")} />
         
           <h4>Service Description :</h4>
           <input name="description" cols="20" rows="10" type="text" placeholder="Enter Service Description"  {...register("description")} />
           <h4>Price       :</h4>
           <input name="price" type="number" {...register("price")} placeholder="Enter Price"/>
           
           <h4>Upload Service Image :</h4>
           <input  type="file" onChange={handleImgUpload}/>
           <br />
           
           <input className="btn btn-primary m-3"type="submit" />
           </form>
       </div>


                
                </div>
            </div>
        </div>
    );
};

export default AddServices;