import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { useAppDispatch, useAppSelector } from './hooks';
import { userSlice } from './store/reducers/usersSlice.ts';

function App() {
  // const [count, setCount] = useState(0);
  const { count } = useAppSelector((state) => state.userReducer);

  const { incCount, decCount } = userSlice.actions;

  const dispatch = useAppDispatch();

  const setCount = (direction: 'up' | 'down') => {
    if (direction === 'up') {
      dispatch(incCount(1));
    }

    if (direction === 'down') {
      dispatch(decCount());
    }
  };

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        Count is: {count}
        <button onClick={() => setCount('up')}>increment count</button>
        <button onClick={() => setCount('down')}>decrement count</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className='read-the-docs'>
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
