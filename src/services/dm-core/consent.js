// DM consent system (user safety)

export function canStartDM({ senderId, receiverId, isMutual }) {
  if (!senderId || !receiverId) return false;

  // mutual OR receiver accepted
  return isMutual === true;
}
