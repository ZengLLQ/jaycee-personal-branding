import { Octokit } from "@octokit/rest";

/**
 * Server-side GitHub utility. Only import this from Server Components or
 * Route Handlers: it reads GITHUB_TOKEN from the server environment, which is
 * never bundled into client code.
 */

export const GITHUB_USER = "ZengLLQ";

// Repos whose name starts with any of these prefixes (case-insensitive) are hidden.
const EXCLUDED_PREFIXES = ["college"];

// Specific repositories to exclude from the portfolio (case-insensitive / normalized).
const EXCLUDED_NAMES = new Set([
  "prejoy.01",
  "prejoy.02",
  "michelle-birthday",
  "michelle-brithday",
  "zengllq",
  "debora-birthday",
  "debora-brithday",
]);

export function isExcluded(name) {
  const raw = name.trim().toLowerCase();
  if (EXCLUDED_PREFIXES.some((prefix) => raw.startsWith(prefix))) {
    return true;
  }
  if (EXCLUDED_NAMES.has(raw)) {
    return true;
  }
  const stripped = raw.replace(/[^a-z0-9]/g, "");
  return (
    stripped === "prejoy01" ||
    stripped === "prejoy02" ||
    stripped === "michellebirthday" ||
    stripped === "michellebrithday" ||
    stripped === "zengllq" ||
    stripped === "deborabirthday" ||
    stripped === "deborabrithday"
  );
}

const FALLBACK_DESCRIPTIONS = {
  "jaycee-personal-branding": "Personal branding & portfolio website built with Next.js, Tailwind CSS, and Framer Motion.",
  "global-mandiri-computer-ver.2": "Modern computer store inventory and point-of-sale management application.",
  "global-mandiri-computer-ver.1": "Desktop management system for Global Mandiri Computer.",
  "michelle-farewell": "A personal farewell interactive web tribute crafted with care.",
  "class-war": "Interactive web game built with JavaScript.",
};

function shape(repo) {
  return {
    id: repo.id,
    name: repo.name,
    description: repo.description || FALLBACK_DESCRIPTIONS[repo.name] || null,
    url: repo.html_url,
    language: repo.language ?? null,
    stars: repo.stargazers_count ?? 0,
    forks: repo.forks_count ?? 0,
    isPrivate: Boolean(repo.private),
    isFork: Boolean(repo.fork),
    topics: repo.topics ?? [],
    updatedAt: repo.pushed_at ?? repo.updated_at ?? null,
  };
}

function client(token) {
  return new Octokit({
    auth: token || undefined,
    request: { fetch: (url, opts) => fetch(url, { ...opts, next: { revalidate: 3600 } }) },
  });
}

async function listWithToken(token) {
  const octokit = client(token);
  return octokit.paginate(octokit.rest.repos.listForAuthenticatedUser, {
    visibility: "all",
    affiliation: "owner",
    sort: "pushed",
    per_page: 100,
  });
}

async function listPublic() {
  const octokit = client();
  return octokit.paginate(octokit.rest.repos.listForUser, {
    username: GITHUB_USER,
    type: "owner",
    sort: "pushed",
    per_page: 100,
  });
}

/**
 * Fetch repositories for ZengLLQ.
 *  - With a valid token: public + private repos the token owner can see.
 *  - With a missing/expired token: falls back to public repos only.
 * Anything starting with "COLLEGE" is excluded.
 */
export async function getRepos() {
  const token = process.env.GITHUB_TOKEN;

  let raw = null;
  if (token) {
    try {
      raw = await listWithToken(token);
    } catch (err) {
      console.error("[github] token request failed, falling back to public:", err?.status ?? "", err?.message ?? err);
    }
  }

  if (!raw) {
    try {
      raw = await listPublic();
    } catch (err) {
      console.error("[github] failed to load repositories:", err?.status ?? "", err?.message ?? err);
      return { ok: false, repos: [] };
    }
  }

  return {
    ok: true,
    repos: raw
      .filter((r) => r.owner?.login?.toLowerCase() === GITHUB_USER.toLowerCase())
      .filter((r) => !isExcluded(r.name))
      .map(shape),
  };
}
