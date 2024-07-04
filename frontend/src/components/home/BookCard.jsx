import BookSingleCard from "./BookSingleCard"

const BookCard = ({books}) => {
  return (
    <div className='grid grid-cols-4'>
        {books.map((item)=>(
            <BookSingleCard key={item._id} book={item}/>
        ))}
    </div>
  )
}

export default BookCard