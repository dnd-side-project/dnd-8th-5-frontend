import { useNavigate, useParams } from 'react-router-dom';

export const goToAdd = () => {
  const { roomUuid } = useParams();

  const navigate = useNavigate();
  navigate(`/add/${roomUuid}`);
};

export const goToCurrent = () => {
  const { roomUuid } = useParams();

  const navigate = useNavigate();
  navigate(`/current/${roomUuid}`);
};

export const goToResult = () => {
  const { roomUuid } = useParams();

  const navigate = useNavigate();
  navigate(`/result/${roomUuid}`);
};
