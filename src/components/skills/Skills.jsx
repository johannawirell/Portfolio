import React from "react";
import "./skills.css";
import {
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss3,
  SiCplusplus,
  SiOpenjdk,
  SiPython,
  SiReact,
  SiAngular,
  SiThreedotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiTerraform,
  SiMongodb,
  SiMysql,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiGitlab,
  SiJira,
  SiConfluence,
  SiLinux,
  SiGitforwindows
} from "react-icons/si";

import { FaTools, FaCloud, FaTerminal } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { TbLayoutKanban } from "react-icons/tb";

// import {SiMicrosoftazure} from '@meronex/icons/si/SiMicrosoftazure';
export const Skills = () => {
  const skills = [
    { name: "JavaScript", icon: <SiJavascript /> },
    { name: "TypeScript", icon: <SiTypescript /> },
    { name: "HTML", icon: <SiHtml5 /> },
    { name: "CSS", icon: <SiCss3 /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Java", icon: <SiOpenjdk /> },
    { name: "Python", icon: <SiPython /> },
    { name: "Ada", icon: <FaTools /> },
    { name: "Fortran", icon: <FaTools /> },
    { name: "React", icon: <SiReact /> },
    { name: "Angular", icon: <SiAngular /> },
    { name: "Three.js", icon: <SiThreedotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    { name: "Node.js", icon: <SiNodedotjs /> },
    { name: "Terraform", icon: <SiTerraform /> },
    { name: "Azure", icon: <FaCloud /> },
    { name: "MongoDB", icon: <SiMongodb /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Docker", icon: <SiDocker /> },
    { name: "Kubernetes", icon: <SiKubernetes /> },
    { name: "Git", icon: <SiGit /> },
    { name: "GitLab & Hub CI/CD", icon: <SiGitlab /> },
    { name: "Jira", icon: <SiJira /> },
    { name: "Confluence", icon: <SiConfluence /> },
    { name: "Scrum", icon: <FaPeopleGroup /> },
    { name: "Kanban", icon: <TbLayoutKanban /> },
    { name: "Linux", icon: <SiLinux /> },
    { name: "Bash", icon: <FaTerminal /> },
    { name: "Powershell", icon: <SiGitforwindows /> },
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>Tekniska kompetenser</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div
            className="skill-tag fade-in"
            key={index}
            style={{ animationDelay: `${index * 0.05}s` }}
          >
            {skill.icon && <span className="icon">{skill.icon}</span>}
            <span>{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

