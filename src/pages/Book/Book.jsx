import React from 'react';
import { FaRegStarHalfStroke } from "react-icons/fa6";
import { Link } from 'react-router';

const Book = ({ singleBook }) => {
    const { bookName, author, image, rating, category, review, tags, yearOfPublishing, bookId, publisher} = singleBook
    return (

        <Link to={`/bookDetails/${bookId}`}>
            <div>
                <div className="card bg-base-100 w-96 shadow-sm border p-6 shadow">
                    <figure className='p-4 bg-gray-100 w-2/3 mx-auto'>
                        <img
                            className='h-[166px]'
                            src={image}
                            alt="Shoes" />
                    </figure>
                    <div className="card-body">

                        <div className='flex gap-5 justify-center'>
                            {
                                tags.map(tag => <div className='badge badge-secondary'>{tag}</div>)
                            }
                        </div>

                        <h2 className="card-title">
                            {bookName}
                        </h2>

                        <p className='font-semibold'>By : {publisher}</p>
                        <div className='font-semibold flex gap-2 items-center'>Publish : <div className="badge badge-neutral">{yearOfPublishing}</div></div>
                        <div className="card-actions justify-between pt-3 font-semibold border-t-2 border-dashed">
                            <div className="">{category}</div>
                            <div className="flex items-center gap-2">{rating} <FaRegStarHalfStroke />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;