import { useNavigate } from 'react-router-dom';

function BackButton() {
  const navigate = useNavigate();

  return (
    <div>
      <button type="button" onClick={() =>  navigate(-1)}>
        <span />
        {' '}
        Back
      </button>
    </div>
  );
}

export default BackButton;
