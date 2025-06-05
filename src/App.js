import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

const products = [
  { title: 'Cabbage', isFruit: false, id: 1 },
  { title: 'Garlic', isFruit: false, id: 2 },
  { title: 'Apple', isFruit: true, id: 3},
];


function MyButton() {
  const [showLogo, setShowLogo] = useState(false);
  const [count, setCount] = useState(0);
  function handleClick() {
    setShowLogo(true);
    setCount(count + 1);
  };
  return (
    <div>
        <button onClick={handleClick}>Click me</button>
        {showLogo && (
          <div>
            <p>Clicked {count} times</p>
            <img src={logo} className='App-logo' alt='logo'/>
          </div>
        )}
    </div>
  )
}
function MySecondButton({count, onClick}) {
  return (
    <button onClick={onClick}>Clicked {count} times</button>
  );
}



const styleObject = {
  width: user.imageSize,
  height: user.imageSize,
  borderRadius: '50%'
};

export default function MyApp() {
  const [count, setCount] = useState(0);
  function handleClick() {
    setCount(count + 1);
  }
  const listItems = products.map(product => 
    <li 
      key={product.id}
      style={{
        color: product.isFruit ? 'lightblue' : 'lightgray'
      }}
    >
      {product.title}
    </li>
  );
  return (
    <div className='App'>
      <aside>
        <h1>{user.name}</h1>
        <img
          className='avatar'
          src={user.imageUrl}
          alt={'Photo of ' + user.name}
          // style={{
          //   width: user.imageSize,
          //   height: user.imageSize,
          //   borderRadius: '50%'
          // }}
          style={styleObject}
        />
      </aside>
      <div className='welcome'>
          <h1>Welcome to my app</h1>
          {/* <img src={logo} className='App-logo' alt='logo'/> */}
          <MyButton/>
          <MyButton/>
          <MySecondButton count={count} onClick={handleClick}/>
          <MySecondButton count={count} onClick={handleClick}/>
          <AboutPage/>
          <ul>{listItems}</ul>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <>
      <h1>About</h1>
      <p>Hello there.<br/>How do you do?</p>
    </>
  );
}

// export default MyApp;
