import React from 'react';
import wilson from '../../images/wilson.png';
import ema from '../../images/ema.png';
import aliza from '../../images/aliza.png';
import BlogPost from '../BlogPost/BlogPost';

const blogData = [
    {
        name: 'Wilson Harry',
        date: '23 April 2022',
        img: wilson,
        blogTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        quort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores officia, et laudantium cumque.',
    },
    {
        name: 'Ema Gomez',
        date: '23 April 2022',
        img: ema,
        blogTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        quort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores officia, et laudantium cumque.',
    },
    {
        name: 'Aliza farari',
        date: '23 April 2022',
        img: aliza,
        blogTitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
        quort: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem maiores officia, et laudantium cumque.',
    }
]
const Blog = () => {
    return (
        <section className='my-5 py-5'>
            <div className='container'>
                <div className='section-header text-center'>
                    <h5 className='text-uppercase' style={{color: '#1CC7C1'}}>Our Blog</h5>
                    <h1>From Our Blog News</h1>
                </div>
                <div className='row'>
                    {
                        blogData.map(info => <BlogPost info={info}/>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Blog;