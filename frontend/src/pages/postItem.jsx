import { useState } from 'react';
import { requestPost } from '../services/requests';
import BackButton from '../components/backButton';
import { useNavigate } from 'react-router-dom';

function PostItems() {
  const navigate = useNavigate();
  const [itemTitle, setItemTitle] = useState('');

  const hancleClick = async () => {
    const data = await requestPost('/items', {title: itemTitle, description: 'New person'});
    console.log(data);
    navigate(`/viewItems/${data.id}`)
  };

  const handleInput = (e) => {
    setItemTitle(e)
  };

  const clearInput = () => {
    setItemTitle('');
 };

  return (
    <div>
      <BackButton />
      <div>
        <h1>Post Items</h1>
      </div>
      <main>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', margin: '1rem'}}>
          <button
            onClick={hancleClick}
            disabled={itemTitle ? false : true}
          >
            Create
          </button>
          <button
            onClick={clearInput}
            disabled={itemTitle ? false : true}
          >
            Clear
          </button>
        </div>
        <h3>Title</h3>
        <input 
          onChange={(e) => handleInput(e.target.value)}
          value={itemTitle}
          type="text"
          style={{ fontSize: 'larger'}}
        />
      </main>
    </div>
  );
}

export default PostItems;