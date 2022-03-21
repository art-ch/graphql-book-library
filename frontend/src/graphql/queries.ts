export const GET_SINGLE_BOOK = (id: string) => {
  return `{
  book(id: ${parseInt(id)}){
    id
    name
    price
    rating
    reviews
    author{
      name
    }
  }
}`;
};

export const BOOKS_QUERY = `{
	books {
    id
    name
    price
    rating
    reviews
    author{
      name
    }
  }
}`;
