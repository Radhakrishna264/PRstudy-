// Immutable audit logging (SuperAdmin visibility)

export function logAuditEvent({
  actorId,
  actorRole,
  action,
  target,
  metadata = {},
}) {
  const auditEvent = {
    actorId,
    actorRole,
    action,
    target,
    metadata,
    timestamp: Date.now(),
    immutable: true,
  };

  console.log("[AUDIT]", auditEvent);
  return auditEvent;
}
