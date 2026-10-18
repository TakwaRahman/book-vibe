import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import { addToDB } from '../../utility/addToDB';

const BookDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    const bookId = parseInt(id)
    const singleBook = data.find(book => book.bookId === bookId)
    const { bookName, image, author, tags, publisher, category, review, totalPages, yearOfPublishing, rating } = singleBook


    const handleMarkAsRead = (id) => {
        addToDB(id)
    }

    return (
        <div className='mt-10 mx-auto w-3/4 mb-10 flex gap-10'>
            <div className='flex-shrink-0'>
                <img className='border w-100 p-15 bg-gray-100 border-none rounded-lg shadow-2xl' src={image} alt="" />
            </div>

            <div className=''>
                <h1 className='text-4xl font-bold'>{bookName}</h1>
                <p className='pt-5'>By : {publisher}</p>

                <div className="">
                    <div className="divider divider-start"></div>
                    <p>{category}</p>
                    <div className="divider"></div>
                    <p><span className='font-bold'>Review :</span> {review}</p>

                    <div className='pt-5 flex gap-10'>
                        <p className='font-bold'>Tag</p>
                        <div className='flex gap-5'>
                            {
                                tags.map(tag => <p className='font-semibold badge bg-green-50 text-green-400'>#{tag}</p>)
                            }
                        </div>
                    </div>
                    <div className="divider divider-end"></div>

                    <div className='space-y-5 flex flex-col'>
                        <p className="flex gap-20">
                            <span>Number Of Pages :</span>
                            <span>{totalPages}</span>
                        </p>

                        <p className="flex gap-35">
                            <span>Publisher :</span>
                            <span>{publisher}</span>
                        </p>

                        <p className="flex gap-20">
                            <span>Year of Publishing :</span>
                            <span>{yearOfPublishing}</span>
                        </p>

                        <p className="flex gap-41">
                            <span>Rating :</span>
                            <span>{rating}</span>
                        </p>
                    </div>
                </div>



                <div className='mt-5'>
                    <button onClick={() => handleMarkAsRead(id)} className="btn">Mark As Read</button>
                    <button className="btn btn-info m-2 text-white">Add To Wishlist</button>
                </div>



            </div>
        </div>
    );
};

export default BookDetails;