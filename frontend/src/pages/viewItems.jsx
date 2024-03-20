import { useState } from 'react';
import { requestData } from '../services/requests';
import BackButton from '../components/backButton';
import { useNavigate } from 'react-router-dom';

function ViewItems() {
  const navigate = useNavigate();
  const [itemsList, setItemsList] = useState([]);

  const hancleClick = async () => {
    const data = await requestData('/items');
    setItemsList(data);
  };

 const clearList = () => {
  setItemsList([]);
 };

  return (
    <div>
      <BackButton />
      <div>
        <h1>Items</h1>
      </div>
      <main>
        <div style={{ display: 'flex', gap: '1rem'}}>
          <button onClick={hancleClick}>
            See all items
          </button>
          <button onClick={clearList}>
            Clear List
          </button>
        </div>
        {itemsList && (
          <div style={{ margin: '1rem', textAlign: 'left'}}>
            {itemsList.map((e) => (
              <a onClick={() => navigate(`/viewItems/${e.id}`)} key={e.id}>
                <li>{e.title}</li>
              </a>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

export default ViewItems;