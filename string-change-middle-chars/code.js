const input = 'Every developer likes to mix kubernetes and javascript';

const output = input
  .split(' ')
  .map((item) => {
    if (item.length > 3) {
      return item[0] + (item.length - 2) + item.at(-1);
    }
    return item;
  })
  .join(' ');

console.log(output);
