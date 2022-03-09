import logo from './logo.svg';
import './App.css';
import Button from './button';
import Counter from './counter';

function handleClick() {
  alert.click();
}

function App() {
  let x = 5;
  let item = ['apple', 'oranges', 'banana'];
  return (
    <div className="App">
      <p>{x}</p>
      { item.map((item) =>
      (<li> {item} </li>))}
      <Button name="title1" click={handleClick}/>
      <Button name="title2"/>
      <Button name="title3"/>
      <Counter/>
    </div>
  );
}

export default App;
