import React from 'react'
import { useAppDispatch, useAppSelector } from './app/hooks'
import { incremented, amountAdded, decrement } from './features/counter/counterSlice'
import { useFetchBreedsQuery } from './features/dogs/dogsApiSlice'
import logo from './logo.svg'
import './App.css'

function App() {

  const count = useAppSelector((state) => state.counter.value);
  const dispatch = useAppDispatch()
  const [numDogs, setNumDogs] = React.useState(10)

  function handleClick() {
    dispatch(incremented());
  }
  function added() {
    dispatch(amountAdded(5))
  }
  function decrease() {
    dispatch(decrement())
  }
  const { data = [], isFetching, } = useFetchBreedsQuery(numDogs);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <div>
          <p>
            dogs to fetch:
          </p>
          <select value={numDogs} onChange={(e) => setNumDogs(Number(e.target.value))}>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>
        <div>
        </div>
        <div>
          number of dogs fetched: {data.length}
          <table>
            <thead>
              <tr>
                <th>
                  name
                </th>
                <th>
                  picture
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((breed) => (
                <tr key={breed.id}>
                  <td>
                    {breed.name}
                  </td>
                  <td>
                    <img src={breed.image.url} alt={breed.name} height={250}/>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p>
          <button type="button">
            count is: {count}
          </button>
        </p>
        <p>
          <button type="button"  onClick={handleClick} >
            increase by 1
          </button>
        </p>
        <p>
          <button type="button"  onClick={added} >
            increase by 5
          </button>
        </p>
        <p>
          <button type="button" onClick={decrease}>
            decrease by 1
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
