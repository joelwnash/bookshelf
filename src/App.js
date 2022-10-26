// Config details
import firebaseConfig from "./firebase";

// NPM modules
import { useState, useEffect } from 'react';
import { getDatabase, push, ref, onValue, remove } from 'firebase/database';

const App = () => {

  // this state will track the books from our database
  const [ books, setBooks ] = useState([]);

  // this state will track user inputs from the form
  const [ userInput, setUserInput ] = useState("");

  useEffect( () => {

    // create a variable that will hold on to our database values
    const database = getDatabase(firebaseConfig);

    // create a variable that makes reference to our database
    const databaseRef = ref(database);

    // grab the information from our database
    onValue( databaseRef, (response) => {

      // create an array to store our data
      const newState = [];

      // store the return data as a variable
      const data = response.val();
      
      // loop through the returned object
      for(let key in data) {
        newState.push({ key: key, name: data[key] });
      }

      setBooks(newState);

    })

  }, [])

  // create a funtion that takes care of the update input logic
  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }

  // create the function that submits the value to firebase
  const handleFormSubmit = (event) => {
    event.preventDefault();

    // pass the info to firebase
    const database = getDatabase(firebaseConfig);
    const databaseRef = ref(database);
    push(databaseRef, userInput);
    setUserInput("");

  };

  // this will remove the book from the list
  const handleRemoveBook = (bookId) => {
    const database = getDatabase(firebaseConfig);
    const databaseRef = ref(database, `/${bookId}`);
    remove(databaseRef);
  }

  return(
    <div>
      <h1>My Bookshelf!</h1>
      <ul>
        {
          books.map( ( book, index ) => {
            return (
              <li key={book.key}>
                <p>{book.name}</p>
                <button onClick={() => {handleRemoveBook(book.key)}}>Remove book</button>
              </li>
            )
          })
        }
      </ul>

      <form action="submit">
      <label htmlFor="newBook">Add a book to your bookshelf</label>
      <input 
        type="text" 
        id="newBook"
        onChange={handleInputChange}
        value={userInput} 
      />

      <button onClick={handleFormSubmit}>Add Book</button>
    </form>


    </div>
  )
};

export default App;