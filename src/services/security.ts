let join = false;

export const authorizeJoin = () => (join = true);

export const checkJoinOnce = () => {
  if (join) {
    join = false;
    return true;
  }
  return false;
};
