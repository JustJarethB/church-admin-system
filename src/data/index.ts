export const PLACEHOLDER_CHURCH = {
  id: "zCb7Xxp0Nif9xALfnVRl",
  logoUrl:
    "https://imgs.search.brave.com/I0jvzT62ce0JJ1XEHHjGL1f0avB2GQ-g2na7CaVBFCk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb2Rlc2lnbi5u/ZXQvbG9nby9jaHVy/Y2gtaW4taGV4YWdv/bi0xODMwbGQucG5n/P253bT0xJm53cz0x/JmluZHVzdHJ5PWNo/dXJjaCZzZj0",
  displayName: "Test Church",
  services: {
    "id-am": {
      displayName: "Sunday Morning",
      startTime: "11:30",
      teams: ["id-wl", "id-bv"],
    },
    "id-pm": {
      displayName: "Sunday Evening",
      startTime: "11:30",
      teams: ["id-wl", "id-bv"],
    },
  },
  people: ["5B5doOYCkwdaW8c2olMLXOKdUn12", "EXHxjvaEzIW87dm2bN0Ow1WleZh2"],
  teams: {
    "id-wl": {
      displayName: "Worship Leader",
      required: 1,
      people: ["5B5doOYCkwdaW8c2olMLXOKdUn12", "EXHxjvaEzIW87dm2bN0Ow1WleZh2"],
    },
    "id-bv": {
      displayName: "Backing Vocal",
      required: 2,
      people: ["5B5doOYCkwdaW8c2olMLXOKdUn12", "EXHxjvaEzIW87dm2bN0Ow1WleZh2"],
    },
  },
  upcomingEvents: {
    "id-1": {
      service: "id-am",
      date: new Date("2024-04-14"),
      team: {
        "id-wl": { "5B5doOYCkwdaW8c2olMLXOKdUn12": true },
        "id-bv": {
          "5B5doOYCkwdaW8c2olMLXOKdUn12": true,
          EXHxjvaEzIW87dm2bN0Ow1WleZh2: false,
        },
      },
    },
    "id-2": {
      service: "id-pm",
      date: new Date("2024-04-14"),
      team: {
        "id-wl": { "5B5doOYCkwdaW8c2olMLXOKdUn12": true },
        "id-bv": {
          "5B5doOYCkwdaW8c2olMLXOKdUn12": true,
          EXHxjvaEzIW87dm2bN0Ow1WleZh2: false,
        },
      },
    },
    "id-3": {
      service: "id-am",
      date: new Date("2024-04-21"),
      team: {
        "id-wl": { "5B5doOYCkwdaW8c2olMLXOKdUn12": true },
        "id-bv": {
          "5B5doOYCkwdaW8c2olMLXOKdUn12": true,
          EXHxjvaEzIW87dm2bN0Ow1WleZh2: false,
        },
      },
    },
  },
};
export const PLACEHOLDER_USERS = [
  {
    photoURL: null,
    displayName: null,
    email: null,
    uid: "JX3bwGJcFcWmZf6gm7NEtb03S373",
  },
  {
    photoURL:
      "https://lh3.googleusercontent.com/a/ACg8ocIoeyqbCaw2w3rpDOaWCFqBx8gICDHF417dlEuFPeVMBxo=s96-c",
    displayName: "Jareth Bower",
    email: "justjarethb@gmail.com",
    uid: "EXHxjvaEzIW87dm2bN0Ow1WleZh2",
  },
  {
    photoURL: null,
    displayName: null,
    email: null,
    uid: "5B5doOYCkwdaW8c2olMLXOKdUn12",
  },
];
