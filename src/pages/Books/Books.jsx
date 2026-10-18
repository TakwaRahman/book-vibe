import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book'
import { useLoaderData } from 'react-router';


const Books = () => {

    const [allBooks, setAllBooks] = useState([])

    const data = useLoaderData()


    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res=>res.json()).then(data => setAllBooks(data))
    // }, [])

    return (
        <div>
            <h1 className='text-center text-4xl p-5 font-semibold'>Books</h1>
            <Suspense fallback={<h2>Loading.....</h2>}>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        data.map((singleBook) => <Book singleBook={singleBook} key={singleBook.bookId}></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;