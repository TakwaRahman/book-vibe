import React from 'react';

import bookimage from '../../assets/books.jpg'

const Banner = () => {
    return (
        <div className='flex border border-none mt-10 rounded-lg bg-gray-100 justify-between items-center p-16 w-full'>
            <div>
                <h1 className='font-bold text-5xl leading-17'>Books to freshen up <br /> your bookshelf</h1>
                <button className='btn btn-primary p-5 mt-10'>View The List</button>
            </div>
            <div><img className='w-100' src={bookimage} alt="" /></div>
        </div>
    );
};

export default Banner;