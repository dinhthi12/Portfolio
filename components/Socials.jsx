"use client";

import { SiLeetcode } from "react-icons/si";

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiFacebookFill,
  RiCodeBoxFill,
} from "react-icons/ri";

import Link from "next/link";

const icons = [
  {
    path: "https://www.facebook.com/profile.php?id=100025230006086",
    name: <RiFacebookFill />,
  },
  {
    path: "https://www.youtube.com/channel/UCK9nL1AikfpMvRTwed0NDxQ",
    name: <RiYoutubeFill />,
  },
  {
    path: "https://github.com/dinhthi12",
    name: <RiGithubFill />,
  },
  {
    path: "https://www.linkedin.com/in/nguyen-dinh-thi-819471214/",
    name: <RiLinkedinFill />,
  },
  {
    path: "https://leetcode.com/u/dinhthi12/",
    name: <SiLeetcode />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <Link href={icon.path} key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
