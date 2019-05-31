
import axios from "axios";

const KEY = "AIzaSyDIEs95o00rqC__9GeX7_JUzOScO_wGu4I";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});