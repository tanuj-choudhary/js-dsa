function defangIP(ip) {
  let output = '';

  for (const char of ip) {
    if (char === '.') {
      output += '[.]';
    } else {
      output += char;
    }
  }

  return output;
}

console.log(defangIP('1.1.1.1'));
console.log(defangIP('255.100.50.0'));
