// Core DM messaging engine

export function sendDM({
  senderId,
  receiverId,
  message,
  consentGranted,
}) {
  if (!consentGranted) {
    throw new Error("DM consent not granted");
  }

  const dm = {
    senderId,
    receiverId,
    message,
    sentAt: Date.now(),
    reported: false,
  };

  console.log("[DM]", dm);
  return dm;
}
