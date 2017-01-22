const makeHistory = (obj) => {
  let history = [];
  let index = 0;

  return {
    push: (op) => history = [ ...history.slice(0, index++), op ],
    back: () => {
      if (index === 0) {
        throw new Error('Nothing to undo');
      }
      const op = history[--index];
      op.revert();
    },
    forward: () => {
      if (index >= history.length) {
        throw new Error('Nothing to redo');
      }
      const op = history[index++];
      op.perform();
    },
  };
};

const basics = {
  set: (obj, key, value) => () => obj[key] = value,
  delete: (obj, key) => () => delete obj[key],
};

const makeOperations = (obj) => ({
  createSet: (key, newValue) => ({
    perform: basics.set(obj, key, newValue),
    revert: key in obj ?
      basics.set(obj, key, obj[key]) :
      basics.delete(obj, key),
  }),
  createDel: (key) => ({
    perform: basics.delete(obj, key),
    revert: basics.set(obj, key, obj[key]),
  }),
});

const undoRedo = (object = {}) => {
  const history = makeHistory(object);
  const { createSet, createDel } = makeOperations(object);

  const performOp = (makeOperation) => (...args) => {
    const op = makeOperation(...args);
    history.push(op);
    op.perform();
  };

  return {
    set: performOp(createSet),
    del: performOp(createDel),
    get: (key) => object[key],
    undo: history.back,
    redo: history.forward,
  };
};
