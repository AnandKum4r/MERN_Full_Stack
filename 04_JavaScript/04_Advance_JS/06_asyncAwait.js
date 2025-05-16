// ✅ This function simulates fetching data from a server
function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // ✅ Simulating a delay of 3 seconds before resolving
      resolve({ name: "YouTube", url: "https://www.youtube.com/" });
    }, 3000);
  });
}
// ✅ This is an async function that uses `await` to handle the Promise from fetchUserData
async function getUserData() {
  try {
    console.log("Fetching user data..."); // ⏳ Log before fetching
    const userData = await fetchUserData(); // ✅ Waits here for Promise to resolve
    console.log("User data fetched successfully"); // ✅ Logged after successful fetch
    console.log("User Data", userData); // ✅ Prints the fetched data
  } catch (error) {
    // ❌ If the Promise is rejected, this block will catch the error
    console.log("Error fetching data", error);
  }
}
getUserData(); // ✅ Start the async function
