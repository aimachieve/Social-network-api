const router = require('express').Router();
const {
  createUser,
  updateUser,
  deleteUser,
  addFriend,
  deleteFriend,
  getAllUsers,
  getaUser,
} = require('../../controllers/userController');


// create
router.route('/:userId').post(createUser);

// update
router.route('/:userId').put(updateUser);

// delete
router.route('/:userId').delete(deleteUser);

// all user
router.route('/:userId').get(getAllUsers);

// single user
router.route('/:userId').get(getaUser);

// add friend
router.route('/:userId/friends/:friendId').post(addFriend);

// delete friend
router.route('/:userId/friends/:friendId').delete(deleteFriend);



module.exports = router;