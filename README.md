### README.md

```markdown
# GitHub User Activity

This project fetches and displays the recent activity of a GitHub user. It allows filtering of activities by event type.

## Features

- Fetch recent GitHub activity for a specified user.
- Display activities in a readable format.
- Filter activities by event type.

## Prerequisites

- Node.js installed on your machine.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/your-username/github-user-activity.git
   cd github-user-activity
   ```

2. Install the dependencies:

   ```sh
   npm install
   ```

## Usage

To fetch and display the recent activity of a GitHub user, run the following command:

```sh
node 

index.js

 <GitHub-username> [event-type]
```

- `<GitHub-username>`: The GitHub username of the user whose activity you want to fetch.
- `[event-type]` (optional): The type of event to filter by (e.g., `PushEvent`, `IssuesEvent`, etc.).

### Examples

1. Fetch and display all recent activities for a user:

   ```sh
   node src/index.js octocat
   ```

2. Fetch and display only `PushEvent` activities for a user:

   ```sh
   node src/index.js octocat PushEvent
   ```

## Code Overview

### `fetchGitHubActivity(username)`

Fetches the recent activity of a GitHub user.

- `username`: The GitHub username.

### `displayActivity(events, eventType)`

Displays the fetched activities.

- `events`: The list of events fetched from GitHub.
- `eventType` (optional): The type of event to filter by.


This project was an inspiration from https://roadmap.sh/projects/github-user-activity
```
