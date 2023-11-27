import { useState } from 'react';
import './App.css';
import MyLineChart from './components/MyLineChart/MyLineChart';
import SpecialChart from './components/SepecialChart/SpecialChart';
import { useSpring, animated } from 'react-spring';

function App() {
 const [flip, set] = useState(false);

  const props = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
    reset: true,
    reverse: flip,
    delay: 200,
    onRest: () => set(!flip),
  });
  return (
    <div className="App">
      <animated.div style={props} className={'text-6xl my-8 font-bold'}>I will fade in</animated.div>
      <MyLineChart></MyLineChart>
      <SpecialChart></SpecialChart>
    </div>
  );
}

export default App;
