var obj = {
  a: {
    b: {
      c: 12,
      j: false,
    },
    k: null,
  },
};

function findPath(obj, path) {
  const keysList = path.split('.');
  let pathExists = true;

  for (let i = 0; i < keysList.length; i++) {
    const key = keysList[i];

    if (obj && obj[key] !== undefined) {
      obj = obj[key];
    } else {
      pathExists = false;
      break;
    }
  }

  return pathExists ? obj : undefined;
}

console.log(findPath(obj, 'a.b.c')); // 12
console.log(findPath(obj, 'a.b')); // {c: 12, j: false}
console.log(findPath(obj, 'a.b.d')); // undefined
console.log(findPath(obj, 'a.c')); // undefined
console.log(findPath(obj, 'a.b.c.d')); // undefined
console.log(findPath(obj, 'a.b.c.d.e')); // undefined
console.log(findPath(obj, 'a.b.j')); //false
console.log(findPath(obj, 'a.b.j.k')); //undefined
console.log(findPath(obj, 'a.k')); //null
