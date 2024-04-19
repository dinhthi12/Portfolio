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
    image: "/work/3.png",
    category: "react js",
    name: "abc",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/4.png",
    category: "ruby on rails",
    name: "abc",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/2.png",
    category: "php",
    name: "abc",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "abc",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    link: "/",
    github: "/",
  },
  {
    image: "/work/1.png",
    category: "react js",
    name: "abcd",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate
            magni ipsum officia fugiat explicabo, eligendi vitae exercitationem
            cumque aliquam deleniti, voluptatibus facere quae eum. Inventore
            officiis provident incidunt laborum eos.
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
