const userProfiles = {
  user_profile: [
    { id: 1, name: "Administrador" },
    { id: 2, name: "Encarregat" },
    { id: 3, name: "Operari" },
  ],
};

const data = {
  users: [
    {
      id: 1,
      name: "Lorenzo",
      email: "lorenzo.cremonese10@gmail.com",
      password: "Lorenzo1!",
      user_profile_id: "1",
      image: "img/face.png",
    },
    {
      id: 2,
      name: "Ivan",
      email: "ivan@gmail.com",
      password: "Ivan123!",
      user_profile_id: "2",
      image: "img/face.png",
    },
    {
      id: 3,
      name: "Adrià",
      email: "adria@gmail.com",
      password: "Adria12!",
      user_profile_id: "3",
      image: "img/face.png",
    },
    {
      id: 4,
      name: "Lorena",
      email: "lorena@gmail.com",
      password: "Lorena123!",
      user_profile_id: "3",
      image: "img/face.png",
    },
  ],
};


localStorage.setItem("user_profile", JSON.stringify(userProfiles));
localStorage.setItem("data", JSON.stringify(data));
