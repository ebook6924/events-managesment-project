import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import SigleServiceCart from "./SigleServiceCart";

const SigleService = () => {
    const [readingBook, setReadingBok] = useState()
    const { id } = useParams()
    //    console.log(id)
    const book = useLoaderData()
    //  console.log(book)
    
    useEffect(() => {
        const booksFind = book?.find(items => items.id == id)
        setReadingBok(booksFind)
    }, [id, book])

//    console.log(readingBook)
    return (
        <div>
            <SigleServiceCart readingBook={readingBook}></SigleServiceCart>
        </div>
    );
};

export default SigleService;