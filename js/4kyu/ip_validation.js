const isValidIP = (str) => {
  const chunks = str.split('.');
  if (chunks.length !== 4) {
    return false;
  }

  for (let chunk of chunks) {
    if (chunk !== chunk.trim()) {
      return false;
    }

    if (chunk[0] === '0' && chunk.length > 1) {
      return false;
    }

    const num = Number(chunk);
    if (Number.isNaN(num)) {
      return false;
    }

    if (num < 0 || num > 255) {
      return false;
    }
  }

  return true;
};
