"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { GitlabIcon as GitHub } from "lucide-react";

interface Repo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
}

export default function GitHubReposOnly() {
  const username = "Tarush5253";

  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      setLoading(true);
      setError(null);

      try {
        const res = await axios.get<Repo[]>(
          `https://api.github.com/users/${username}/repos?per_page=100&sort=updated`
        );
        setRepos(res.data);
      } catch (err) {
        setError("Failed to load GitHub repositories.");
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  if (loading) return <p className="text-center py-10">Loading GitHub repos...</p>;
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="flex items-center gap-2 mb-6">
        <GitHub size={24} className="text-gray-800" />
        <h3 className="text-xl font-bold">GitHub Repositories</h3>
      </div>
      <ul className="space-y-4 max-h-[400px] overflow-y-auto">
        {repos.map((repo) => (
          <li
            key={repo.id}
            className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <h3 className="text-lg font-semibold">{repo.name}</h3>
            <p className="text-sm text-gray-600 mb-2">{repo.description || "No description"}</p>
            <a
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline text-sm"
            >
              View on GitHub
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
