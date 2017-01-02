const countIf = (head, p) => {
  if (head === null) {
    return 0;
  }
  return countIf(head.next, p) + p(head.data);
};
