const { thoughts, users } = require('../models');

module.exports = {
  // Get all users
  getusers(req, res) {
    users.find()
      .then(async (users) => {
        const userObj = {
          users,
          headCount: await headCount(),
        };
        return res.json(userObj);
      })
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single user
  getSingleuser(req, res) {
    user.findOne({ _id: req.params.userId })
      .select('-__v')
      .lean()
      .then(async (user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json({
              user })
      )
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new user
  createuser(req, res) {
    user.create(req.body)
      .then((user) => res.json(user))
      .catch((err) => res.status(500).json(err));
  },
// //   // Delete a user - cant figure issue
//   deleteuser(req, res) {
//     user.findOneAndRemove({ _id: req.params.userId })
//       .then((user) =>
//         !user
//           ? res.status(404).json({ message: 'No such user exists' })
//       .then((course) =>
//         !course
//           ? res.status(404).json({
//               message: 'user deleted, d',
//             })
//           : res.json({ message: 'user successfully deleted' })
//       )
//       .catch((err) => {
//         console.log(err);
//         res.status(500).json(err);
//       }):
//     },
}