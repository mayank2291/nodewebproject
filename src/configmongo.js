const async = require("hbs/lib/async");
const mongoose = require("mongoose");

mongoose
  .connect("mongodb://localhost:27017/sixsensesolution")
  .then(() => console.log("Connection Successful...!"))
  .catch((err) => console.log(err));

const playlistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: String,
  subj: String,
  message: String,
});
 
const Playlist = new mongoose.model("employee", playlistSchema);

const createDocument = async () => {
  try {
    const reactPlaylist = new Playlist({
      name: "Harry",
      email: "harry@gmail.com",
      subj: "Overview",
      message: "Nice to see you...!",
    });

    const result = await reactPlaylist.save();
    console.log(result);
  } catch (err) {
    console.log(err);
  }
};

createDocument();
