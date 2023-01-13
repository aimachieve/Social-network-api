
// * `createdAt`
//   * Date
//   * Set default value to the current timestamp
//   * Use a getter method to format the timestamp on query


// * `reactions` (These are like replies)
//   * Array of nested documents created with the `reactionSchema`

// **Schema Settings**:

// Create a virtual called `reactionCount` that retrieves the length of the thought's `reactions` array field on query.

// ---

const { Schema, model, Types } = require('mongoose');


const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxlength: 280,
      minlength: 1,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      //   * Use a getter method to format the timestamp on query
    }
  }
);
                              //     },
                              //   },
                              //   {
                              //     toJSON: {
                              //       getters: true,
                              //     },
                              //     id: false,
                              //   }
                              // );

                              // module.exports = reactionSchema;


const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      min_length: 1,
      max_length: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
      // default: true,
        // default: () => new Date(+new Date() + 84 * 24 * 60 * 60 * 1000),
      // Use a getter method to format the timestamp on query
    },
    username: {
      type: String,
      required: true,
    },

    thoughts: [
      {
        type: Schema.Types.ObjectId,
        ref: 'thoughts',
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

const Thoughts = model('course', thoughtSchema);

module.exports = Course;
