import { useNavigate, useParams } from 'react-router-dom';
const navigate = useNavigate();

export const goToAdd = () => {
  const { roomUuid } = useParams();
  navigate(`/add/${roomUuid}`);
};

export const goToCurrent = () => {
  const { roomUuid } = useParams();
  navigate(`/current/${roomUuid}`);
};

export const goToResult = () => {
  const { roomUuid } = useParams();
  navigate(`/result/${roomUuid}`);
};
