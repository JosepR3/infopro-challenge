import { makeRequest } from "./request-utils";

function doRequest(request = makeRequest()) {
  
  function fetchAllUsers() {
    return request({
      url: "/",
      requestMethod: "GET",
    });
  }
  return {
    fetchAllUsers: fetchAllUsers,
  };
}

export default doRequest();
