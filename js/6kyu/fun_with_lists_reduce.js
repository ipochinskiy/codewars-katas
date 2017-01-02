const reduce = (head, f, init) => {
  if (head === null) {
    return init;
  }
  return reduce(head.next, f, f(init, head.data));
};
