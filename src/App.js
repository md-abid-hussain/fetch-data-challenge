import { useState } from 'react';
import { useEffect } from 'react';
import Form from './Form'
import Table from './Table';


function App() {
  const API_URL = 'https://jsonplaceholder.typicode.com'

  const [data, setdata] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState(false);
  const [currentData, setCurrentData] = useState('users');

  useEffect(() => {
    document.title = 'Fetch Details'
  }, [])

  useEffect(() => {
    setLoading(true)
    setFetchError(false)
    setdata([])
    const fetchItems = async () => {
      try {
        const reqURL = `${API_URL}/${currentData}`
        const response = await fetch(reqURL);
        if (!response.ok) {
          throw new Error('Please reload the application')
        }
        const listItems = await response.json();
        setdata(listItems)
        setFetchError(null)
      } catch (err) {
        setFetchError(err.message)
      } finally {
        setLoading(false)
      }
    }

    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);
  }, [currentData])

  return (
    <div>
      <Form currentData={currentData} setCurrentData={setCurrentData} />
      {isLoading ? <p>Loading...</p> : !fetchError ? <Table data={data} /> : <p style={{ color: 'red' }}>Error loading data</p>}
    </div>
  );
}

export default App;
