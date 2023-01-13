const router = require('express').Router();
const {
  createThought,
  getThoughts,
  getaThought,
  updateThought,
  deleteThought,
  addaReaction,
  deleteaReaction,
} = require('../../controllers/thoughtController.js');

//Get thoughts
router.route('/').get(getThoughts)

//post a thought
router.route('/').post(createThoughts)

//Get a thought
router.route('/:thoughtId').get(getaThought);

//Update a thought
router.route('/:thoughtId').put(updateThought);

//Delete a thought
router.route('/:thoughtId').delete(deleteThought);

//Add reaction to thought
router.route('/:thoughtId/reactions').post(addaReaction);

//Delete reaction from thought
router.route('/:thoughtId/reactions').delete(deleteaReaction);

module.exports = router;