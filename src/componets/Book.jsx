import { useLoaderData, useNavigation } from "react-router-dom";
import BookItems from "./BookItems";
import LoadingSpainer from "./LoadingSpainer";

const Book = () => {
    const {books}= useLoaderData()
  //  console.log(books)
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <LoadingSpainer></LoadingSpainer>
    }
    return (
        <div className="mt-10">
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-3">
                {
                    books.map(items =><BookItems
                    key={items.isbn13}
                    items={items}
                    ></BookItems>)
                }
            </div>
            <div className="text-center">
                <button className="btn bg-orange-400 w-48 mt-3">See mor book</button>
            </div>
        </div>
    );
};

export default Book;