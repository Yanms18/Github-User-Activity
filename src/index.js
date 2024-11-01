 async function fetchGitHubActivity(username) {
  const response = await fetch(
    `https://api.github.com/users/${username}/events`,
    {
      headers: {
        "user-Agent": "node.js",
      },
    },
  ),

if (!response.ok) {
  if (response.status === 404) {
    throw new Error("User not found. Please check the username.");
  } else {
    throw new Error (`Error fetching data: ${response.status}`);
    }
  }

  return response.json();
};

//fucntion to display

function displayActivity(events) {
  if (events.length === 0) {
    console.log("no recent activity found");
    return;
  }
  
  events.forEach((event) => {
    let action;
    switch (event.type) {
      case "PushEvent":
        const commitCount =  event.payload.commits.length;
        action = `Pushed ${commitCount} commit(s) to ${event.repo.name}`;
        break;
      case "IssuesEvent":
        action = `${event.payload.action.charAt(0).toUpperCase() + event.payload.action.slice(1)} an issue in ${event.repo.name}`;
        break;
      case "watchEvent":
        action = `Starred ${event.repo.name}`;
        break;
      case "ForkEvent":
        action = `Forked ${event.repo.name}`;
        break;
      case "CreateEvent":
        action = `Created ${event.payload.ref_type} in ${event.repo.name}`;
        break;
      default:
        action = `${event.type.replace("Event", "")} in ${event.repo.name}`;
        break;
    }
    console.log (`-${action}`);
  });
}

// Main CLI logic
const username = process.argv[2];
if (!username) {
  console.error('please provide a GitHub username.');
  process.exit(1);
}

fetchGitHubActivity(username)
.then((events) => {
  displayActivity(events);
})

.catch((err) => {
  console.error(err.message);
  process.exit(1);
});