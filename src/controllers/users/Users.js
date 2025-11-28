import Users from '../../models/users/Users.js';

export const register = async (req, res) => {
  const { username, email, password } = req.body;
  const user = await Users.findOne({ email, password });
  if (user) {
    return res.status(400).json({
      message: 'user already existed!',
    });
  }
  const newUser = new Users({ username, email, password });
  await newUser.save();

  console.log('here is the new user: ', newUser);
  res.status(201).json({
    status: 'success',
    message: 'user has been created!',
  });
};
