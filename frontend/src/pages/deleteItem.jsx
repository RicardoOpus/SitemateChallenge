import { useEffect, useState } from 'react';
import { requestDelete, requestData } from '../services/requests';
import BackButton from '../components/backButton';

function DelteItem() {
  const [itemsList, setItemsList] = useState([]);
  const [selectedItem, setSelectedItem] = useState();


  const hancleClick = async (currentItem) => {
    setSelectedItem(currentItem)
  };

  const handleDelete = async (confirm) => {
    if (confirm) {
      const data = await requestDelete(`/items/${selectedItem.id}`);
      console.log(data);
      setSelectedItem();
    } else {
      setSelectedItem();
    }
  };

 useEffect(() => {
  const getItems = async () => {
    const data = await requestData('/items');
    setItemsList(data);
  };
  getItems();
 }, [selectedItem]);

  return (
    <div>
      <BackButton />
      <div>
        <h1>Delete Items</h1>
      </div>
      <main>
        <p>
        Click on an item to select it
        </p>
        {itemsList && (
          <div style={{ margin: '1rem', textAlign: 'left'}}>
            {itemsList.map((e) => (
              <a onClick={() => hancleClick(e)} key={e.id}>
                <li>{e.title}</li>
              </a>
            ))}
          </div>
        )}
        {selectedItem && (
          <div>
            <h3>You are sure you want to delete <span style={{ textDecoration: 'underline', color: '#535bf2'}}>{selectedItem.title}</span> ?</h3>
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center',  }}>
              <button onClick={() => handleDelete(true)} type='button'>Yes</button>
              <button onClick={() => handleDelete(false)} type='button'>No</button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default DelteItem;