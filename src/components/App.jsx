
import './App.css'
import Product from './Product';
import Mailbox from './Mailbox';
import { favouriteBooks } from './favoriteBooks';
import BookList from './BookList';
import Alert from './Alert';
import LoginButton from './LoginButton';
import FollowButton from './FollowButton';


export default function App() {
   
  return (
    <div>
      <h1>Best selling</h1>
      <Product
        name="Fries and Burger"
        imgUrl="https://images.pexels.com/photos/70497/pexels-photo-70497.jpeg?dpr=2&h=480&w=640"
        price={14.29}
      />
      <Mailbox
        username="Mango"
        messages
      />
      <>
			<h1>Books of the week</h1>
      <BookList books={favouriteBooks} />
      </>
      <Alert variant='warning' outlined={1}>Please update your email!</Alert>
      <Alert variant='error' elevated={0}>There was an error during transaction!</Alert>
      <Alert variant='success'>Payment received, thank you for your purchase!</Alert>
      <LoginButton />
      <br/>
      <FollowButton/>
    </div>
  );
}


