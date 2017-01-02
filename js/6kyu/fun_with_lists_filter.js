const filter = (head, p) => {
  if (head === null) {
    return null;
  }
  
  const next = filter(head.next, p);

  return p(head.data) ?
    new Node(head.data, next) :
    next;
};
