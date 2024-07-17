import { defer } from "react-router-dom";
import apiRequest from "./apiRequest";

export const singlePageLoader = async ({ request, params }) => {
  const res = await apiRequest("/guides/" + params.id);
  return res.data;
};
// listPageLoader.js

export const listPageLoader = async ({ request }) => {
  const url = new URL(request.url);
  const query = url.search; // Extract the query string
debugger;
  const postPromise = apiRequest("/guides" + query);

  return defer({
    postResponse: postPromise,
  });
};
export const profilePageLoader = async () => {
  const postPromise = apiRequest("/users/profilePosts");
  const chatPromise = apiRequest("/chats");
  return defer({
    postResponse: postPromise,
    chatResponse: chatPromise,
  });
};
