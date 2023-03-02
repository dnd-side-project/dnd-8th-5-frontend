import axios from 'axios';

axios.defaults.withCredentials = true;

const postRoomInfo = (recoilRoom: object) => {
  const data = axios
    .post(`/api/room`, recoilRoom)
    .then((res) => console.log(res.data))
    .catch((e) => console.log(e));
  return data;
};

export default postRoomInfo;
