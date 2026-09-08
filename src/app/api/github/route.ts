import { NextResponse } from "next/server";
import { getGitHubProfile } from "@/lib/github";

export async function GET() {
    try {
        const profile = await getGitHubProfile();

        return NextResponse.json(profile);
    } catch (error) {
        console.error("GitHub API error:", error);

        return NextResponse.json(
            {
                error: "Failed to fetch GitHub data",
            },
            {
                status: 500,
            }
        );
    }
}