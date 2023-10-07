import { useLoaderData, useNavigation } from "react-router-dom";
import BookItems from "./BookItems";
import LoadingSpainer from "./LoadingSpainer";
import { useState } from "react";

const Book = () => {
    const { books } = useLoaderData()
    const [showAll, setShowAll] = useState(false)
    //  console.log(books)
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <LoadingSpainer></LoadingSpainer>
    }

    const handeDataShow = () => {
        setShowAll(true)
    }
    return (
        <div className="mt-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
                {
                    books?.slice(0, showAll ? 20 : 6).map(items => <BookItems
                        key={items.isbn13}
                        items={items}
                    ></BookItems>)
                }
            </div>
            {
                !showAll &&
                <div className="text-center">
                    <button onClick={handeDataShow} className="btn bg-orange-400 w-48 mt-3">See mor book</button>
                </div>
            }
        </div>
    );
};

export default Book;