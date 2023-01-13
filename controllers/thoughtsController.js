
const { thoughts, users } = require('../models');

module.exports = {
  // Get all thoughts
  getThoughts (req, res) {
    Thought.find()
//       .then((thoughts) => res.json(thoughts))
//       .catch((err) => res.status(500).json(err));
  },
  // Get a thought
  getathought(req, res) {
    thought.findOne({ _id: req.params.thoughtId })
      .select('-__v')
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
  // Create a thought
  createthought(req, res) {
    thought.create(req.body)
      .then((thought) => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Delete a thought
  deletethought (req, res) {
    thought.findOneAndDelete({ _id: req.params.thoughtId })
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with that ID' })
          : Student.deleteMany({ _id: { $in: thought.students } })
      )
      .then(() => res.json({ message: 'thought and students deleted!' }))
      .catch((err) => res.status(500).json(err));
  },
  // Update a thought
  updatethought(req, res) {
    thought.findOneAndUpdate(
      { _id: req.params.thoughtId },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((thought) =>
        !thought
          ? res.status(404).json({ message: 'No thought with this id!' })
          : res.json(thought)
      )
      .catch((err) => res.status(500).json(err));
  },
};
