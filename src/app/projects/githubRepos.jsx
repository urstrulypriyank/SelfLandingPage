"use client";
import React, { useEffect, useState } from "react";

const GithubProjects = () => {
  const [projects, setProjects] = useState([]);
  const [languages, setLanguages] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/users/urstrulypriyankrai/repos"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data);

        // Extract unique languages from repositories
        const uniqueLanguages = [
          ...new Set(data.map((repo) => repo.language).filter(Boolean)),
        ];
        setLanguages(uniqueLanguages);
      } catch (error) {
        console.error("Error fetching repositories:", error);
      }
    };

    fetchProjects();
  }, []);

  const filteredProjects = selectedLanguage
    ? projects.filter((project) => project.language === selectedLanguage)
    : projects;

  return (
    <div className="w-full h-[90%] overflow-y-scroll pb-20">
      <div className="container mx-auto px-4 ">
        <h1 className="text-3xl font-bold text-center mb-8">My Projects</h1>
        <div className="mb-6 text-center">
          <label htmlFor="language" className="mr-2">
            Filter by Language:
          </label>
          <select
            id="language"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className="p-2 border border-border rounded bg-input text-foreground"
          >
            <option value="">All</option>
            {languages.map((language, index) => (
              <option key={index} value={language}>
                {language}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.name}
              description={project.description}
              githubLink={project.html_url}
              language={project.language}
              homepage={project.homepage}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubProjects;

const ProjectCard = ({
  title,
  description,
  githubLink,
  language,
  homepage,
}) => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg bg-card text-card-foreground">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-muted-foreground text-base">{description}</p>
        <p className="text-accent-foreground text-sm">{language}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-primary text-primary-foreground font-bold py-2 px-4 rounded mr-2"
        >
          View on GitHub
        </a>
        {homepage && (
          <a
            href={homepage}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-secondary text-secondary-foreground font-bold py-2 px-4 rounded"
          >
            View Live
          </a>
        )}
      </div>
    </div>
  );
};
