import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate();

  return (
    <div>
      <div>
        <h1>Main page</h1>
      </div>
      <main style={{ display: 'flex', gap: '1rem', justifyContent: 'center'}}>
        <button onClick={() => navigate('/viewItems')}>
          Items List
        </button>
        <button onClick={() => navigate('/postItems')}>
          Post Item
        </button>
        <button onClick={() => navigate('/DelteItem')}>
          Delete Item
        </button>
      </main>
    </div>
  );
}

export default Home;
