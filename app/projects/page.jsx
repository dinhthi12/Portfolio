"use client";
import React, { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { TabsContent } from "@radix-ui/react-tabs";

const projectData = [
  {
    image: "/work/249426261-a04bdcf1-4f61-471f-9b96-a4777dc272a4.png",
    category: "ruby on Rails",
    name: "Football Field Management",
    description:
      "Software for field booking management and soccer field payment for investors.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/Screenshot from 2024-05-08 16-53-15.png",
    category: "Rails and react js",
    name: "Ziu Shop",
    description: "E-commerce website specializing in clothing accessories.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/Screenshot from 2024-05-08 16-56-09.png",
    category: "react js",
    name: "Camera Website",
    description:
      "Website advertising distribution channels for cameras and accompanying equipment.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/Screenshot from 2024-05-08 16-44-35.png",
    category: "Rails and react js",
    name: "Manage personal tasks",
    description:
      "Software for managing personalization tasks and statistical data.",
    link: "/",
    github: "/",
  },
];

const uniqueCategories = [
  "all projects",
  ...new Set(projectData.map((item) => item.category)),
];

const projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState("all projects");

  const filteredProjects = projectData.filter((project) => {
    return category === "all projects"
      ? project
      : project.category === category;
  });
  console.log(category);
  return (
    <section className="min-h-screen pt-12">
      <div className="container mx-auto">
        <h2 className="section-title mb-8 xl:mb-16 text-center mx-auto">
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className="nb-24 xl:mb-48">
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none">
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  key={index}
                  value={category}
                  className="capitalize w-[162px] md:w-auto"
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className="text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4">
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default projects;
