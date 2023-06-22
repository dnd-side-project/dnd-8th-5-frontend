export const useAuth = (uuid: string) => {
  const savedUserName = localStorage.getItem('name');
  const savedRoomUUID = localStorage.getItem('uuid');
  const userName = localStorage.getItem('userName');

  if (uuid === savedRoomUUID && savedUserName === userName) return true;
  else return false;
};
