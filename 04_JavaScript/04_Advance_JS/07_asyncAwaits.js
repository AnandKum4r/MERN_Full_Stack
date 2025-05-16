function fetchPostData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Post Data Fetched");
    }, 2000);
  });
}
function fetchCommentData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Comment Data Fetched");
    }, 3000);
  });
}
async function getBlogData() {
  try {
    console.log("Fetching blog data...");
    // const blogData = await fetchPostData();
    // const commentData = await fetchCommentData();
    const [postData, commentData] = await Promise.all([
      fetchPostData(),
      fetchCommentData(),
    ]);

    console.log(blogData);
    console.log(commentData);

    console.log("Fetch complete");
  } catch (error) {
    console.log("Error fetching blog data");
  }
}
getBlogData();
