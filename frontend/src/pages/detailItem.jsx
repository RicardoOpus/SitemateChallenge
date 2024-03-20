import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { requestData } from '../services/requests';
import BackButton from '../components/backButton';

function DetailItem() {
  const { id } = useParams();
  const [item, setItem] = useState({})

  useEffect(() => {
    const hancleClick = async () => {
      const data = await requestData('/items');
      const currentItem = data.find((e) => e.id === Number(id))
      setItem(currentItem);
    };
    hancleClick();
  }, [id]);

  return (
    <div>
      <BackButton />
      <div>
        <h2>Item details</h2>
        {item && (
          <div>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
          </div>
        )}
      </div>
    </div>
  );
}

export default DetailItem;
