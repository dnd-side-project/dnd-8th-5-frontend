export const useAuth = (uuid: string, userName: string) => {
  const savedUserName = localStorage.getItem('name');
  const savedRoomUUID = localStorage.getItem('uuid');

  if (uuid === savedRoomUUID && savedUserName === userName) return true;
  else return false;
};
