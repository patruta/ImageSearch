import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID mHbcxz37k5d_JWY35Ae8j6H5UBW1BktZQJHAoFeu41M",
  },
});
