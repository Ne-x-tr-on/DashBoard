import PropTypes from 'prop-types';
function List() {
  const fruits = [
    { name: "Apple", calorie: 95 },
    { name: "Banana", calorie: 34 },
    { name: "Orange", calorie: 62 },
    { name: "Mango", calorie: 150 },
    { name: "Pineapple", calorie: 82 },
    { name: "Strawberry", calorie: 4 },
    { name: "Watermelon", calorie: 30 }
  ];

  fruits.sort((a,b)=> b.calorie - a.calorie);

  const listItems = fruits.map((fruit, index) => (
    <li key={index}>
      {fruit.name} - {fruit.calorie} calories
    </li>
  ));

  const lowCalFruits = fruits.filter(fruit => fruit.calorie<90);
  const lowCalItems = lowCalFruits.map((item,index)=>(
    <li key={index}>
      {item.name} - {item.calorie}
    </li>
  ));

  return (
    <>
    <div>
      <ul>
        <h2>FruitsA</h2>
         <ol>{listItems}</ol>;

         <h2>FruitsB</h2>
      <ol>{lowCalItems}</ol>
      </ul>
    </div>
    </>
  );
}
List.PropTypes = {
  calorie: PropTypes.int,
}
export default List;
