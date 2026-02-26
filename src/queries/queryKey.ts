const authKeys = {
  participantMe: (roomId: string) =>
    ['room', roomId, 'auth', 'participant-me'] as const,
};

const availableTimeKeys = {
  all: (roomId: string) => ['room', roomId, 'available-time'] as const,
  byOne: (roomId: string, userName: string) =>
    [...availableTimeKeys.all(roomId), 'by-one', userName] as const,
  overview: (roomId: string, participants: string[]) =>
    [...availableTimeKeys.all(roomId), 'overview', participants] as const,
};

const resultKeys = {
  all: (roomId: string) => ['room', roomId, 'result'] as const,
  candidateTimes: (roomId: string, sort: string, names?: string[]) =>
    [...resultKeys.all(roomId), 'candidate-times', sort, names] as const,
};

const roomKeys = {
  all: (roomId: string) => ['room', roomId] as const,
  info: (roomId: string) => [...roomKeys.all(roomId), 'info'] as const,
  auth: authKeys,
  availableTime: availableTimeKeys,
  result: resultKeys,
};

export const queryKeys = {
  all: ['room'] as const,
  room: roomKeys,
};
