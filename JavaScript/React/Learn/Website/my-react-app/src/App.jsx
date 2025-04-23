import PropTypes from 'prop-types';
import Header from './Header.jsx';
import Footer from './footer.jsx';
import Food from './food.jsx';
import List from './list.jsx';
import Card from './Card';
import Shop from './shop.jsx';
import Name from './name.jsx';
import Stack from './mystack.jsx';
import Button from './button.jsx';
import Student from './Student.jsx';
import Parents from './Parent.jsx';
import UserGreeting from './userGreeting.jsx';

function App() {
  return (
    <>
      <Card />
      <Student/>
      <Header />
      <Food />
      <Footer />
      <Shop />
      <UserGreeting isLoggedIn = {false} username="Nextron"/>
      <Name />
      <Stack />
      <Button/>
      <Parents name = "David" age={54}/>
      {/* <Student name = "Nextron" age={19}/> */}
      <Student/>
      <List/>
     
    </>
  );
}

export default App;
