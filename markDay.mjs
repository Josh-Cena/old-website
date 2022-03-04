import fs from "fs-extra";
import fetch from "node-fetch";

async function getContributions(token, username) {
  const headers = {
    Authorization: `bearer ${token}`,
  };
  const body = {
    query: `query {
  user(login: "${username}") {
    name
    contributionsCollection {
      contributionCalendar {
        weeks {
          contributionDays {
            contributionCount
            date
          }
        }
      }
    }
  }
}`,
  };
  const response = await fetch("https://api.github.com/graphql", {
    method: "POST",
    body: JSON.stringify(body),
    headers: headers,
  });
  const data = await response.json();
  return data;
}

const data = await getContributions(process.env.ACCESS_TOKEN, "Josh-Cena");
const day = data.data.user.contributionsCollection.contributionCalendar.weeks
  .at(-1)
  .contributionDays.at(-1);

if (day.contributionCount === 0) {
  await fs.outputFile(
    `./static/records/${day.date}.txt`,
    "I didn't code today!",
  );
}
