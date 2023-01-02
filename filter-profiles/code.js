const profiles = [
  {
    name: 'ankit',
    active: true,
  },
  {
    name: 'ankit',
    active: true,
  },
  {
    name: 'rahul',
    active: false,
  },
  {
    name: 'shivam',
    active: true,
  },
  {
    name: 'mitesh',
    active: false,
  },
];

const filterProfiles = profiles.filter((profile) => profile.active);
console.log(filterProfiles);
