"use client";
import Link from "next/link";
import { Button } from "./ui/button";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

import ProjectCard from "@/components/ProjectCard";

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
const Work = () => {
  return (
    <section className="relative mb-12 xl:mb-48">
      <div className="container mx-auto">
        {/* test */}
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="section-title mb-4">Latest Projects</h2>
          <p className="subtitle mb-8">
            Projects I have participated in and contributed to with the
            development team in recent times.
          </p>
          <Link href="/projects">
            <Button>All Project</Button>
          </Link>
        </div>
        {/* slider */}
        <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
          <Swiper
            className="h-[480px]"
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first projects for the slides */}
            {projectData.slice(0, 10).map((project, index) => {
              return (
                <SwiperSlide key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
