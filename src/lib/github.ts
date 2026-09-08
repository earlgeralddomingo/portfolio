const GITHUB_API_URL = "https://api.github.com/graphql";

const CONTRIBUTIONS_QUERY = `
    query ($username: String!) {
        user(login: $username) {
            login
            name
            avatarUrl
            url

            repositories(ownerAffiliations: OWNER, first: 1) {
                totalCount
            }

            followers {
                totalCount
            }

            following {
                totalCount
            }

            contributionsCollection {
                contributionCalendar {
                    totalContributions

                    weeks {
                        contributionDays {
                            date
                            contributionCount
                            color
                        }
                    }
                }
            }
        }
    }
`;

export async function getGitHubProfile() {
    const token = process.env.GITHUB_TOKEN;
    const username = process.env.GITHUB_USERNAME;

    if (!token) {
        throw new Error("GITHUB_TOKEN is not configured.");
    }

    if (!username) {
        throw new Error("GITHUB_USERNAME is not configured.");
    }

    const response = await fetch(GITHUB_API_URL, {
        method: "POST",
        headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            query: CONTRIBUTIONS_QUERY,
            variables: {
                username,
            },
        }),
        next: {
            revalidate: 3600,
        },
    });

    if (!response.ok) {
        throw new Error(`GitHub API request failed: ${response.status}`);
    }

    const result = await response.json();

    if (result.errors) {
        throw new Error(
            result.errors[0]?.message ?? "GitHub API error"
        );
    }

    return result.data.user;
}