import Header from './Header.jsx';
import Footer from './footer.jsx';
import Food from './food.jsx';
import Card from './Card';
import Shop from './shop.jsx';
import Name from './name.jsx';
import Stack from './mystack.jsx';
import Button from './button.jsx';
import Student from './Student.jsx';
import Parents from './Parent.jsx';

function App() {
  return (
    <>

      <Card />
      <Header />
      <Food />
      <Footer />
      <Shop />
      <Name />
      <Stack />
      <Button/>
      <Parents name = "David" age={54}/>
      <Student name = "Nextron" age={19}/>
    </>
  );
}

export default App;
