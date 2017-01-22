const makeHistory = (initial) => {
  let history = [ initial ];
  let index = 0;
  return {
    push: (state) => {
      history = history.slice(0, ++index).concat(state);
    },
    pull: () => {
      return history[index];
    },
    back: () => {
      if (index === 0) {
        throw new Error();
      }
      index--;
    },
    forward: () => {
      if (index >= history.length - 1) {
        throw new Error();
      }
      index++;
    },
  };
};

const undoRedo = (object = {}) => {
  const history = makeHistory(object);

  return {
    set: (key, value) => {
      const oldState = history.pull();
      const newState = Object.assign({}, oldState, { [key]: value });
      history.push(newState);
    },
    get: (key) => history.pull()[key],
    del: (key) => {
      const oldState = history.pull();
      const newState = Object.assign({}, oldState);
      delete newState[key];
      history.push(newState);
    },
    undo: () => {
      history.back();
    },
    redo: () => history.forward(),
  };
};
