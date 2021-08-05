import React from 'react';
import web from '../../components/Images/Icons/web.png'
import seo from '../../components/Images/Icons/graphsic.png'
import digital from '../../components/Images/Icons/digital.png'
import BlogCard from './BlogCard';
import NavBar from '../Home/NavBar/NavBar';

const blogData=[
    {
        name:'Web Development',
        description:'Web design refers to the design of websites that are displayed on the internet. It usually refers to the user experience aspects of website development rather than software development. ... A good web design is easy to use, aesthetically pleasing, and suits the user group and brand of the website.',
        img:web

   },
    {
        name:'SEO',
        description:'SEO stands for search engine optimization, which is a digital marketing strategy that focuses on your websites presence in search results on search engines like Google. When you understand how SEO works, you can use different tactics to increase your visibility (or how high you rank) in search results',
        img: seo

    },   {
        name:'Digital Marketing',
        description:'What are digital marketing services? Digital marketing services are professional services that help market or advertise your business online, like through search, social media, and paid channels. They focus solely on digital channels versus traditional marketing channels like print or television.',
        img: digital

    }
   
]

const Blogs = () => {
    return (
        <div className="container">
            <NavBar></NavBar>
            <div className="row mt-5">
                {
                    blogData.map(blog=><BlogCard  blog={blog}></BlogCard>)
                }
            </div>
            
        </div>
    );
};

export default Blogs;