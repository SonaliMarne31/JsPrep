function deepCopy(obj) {
    let object = {};
  
    for (let key in obj) {
      if (typeof obj[key] === 'object' && obj[key] !== null) {
        object[key] = deepCopy(obj[key]);
      } else {
        object[key] = obj[key];
      }
    }
  
    return object;
  }