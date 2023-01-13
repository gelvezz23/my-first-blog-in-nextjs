import Image from "next/image";
import Link from "next/link";
import React from "react";
import MyIcon from "./../../public/assets/icon.png";

import { AsideBarContent, BorderBottom, Profile } from "./styles";
const Asidebar = ({ post }) => {
  return (
    <AsideBarContent className="sidebar">
      <Profile>
        <picture>
          <Image
            src={MyIcon}
            alt="Back"
            width={40}
            height={40}
            priority={true}
          />
        </picture>

        <h3>Carlos Gomez</h3>
        <p>Senior Frontend Developer</p>
      </Profile>
      <BorderBottom />
      <ul>
        {post.map((item, index) => (
          <li key={index}>
            <Link href={`/${item.slug}`}>
              <span className="item">{item.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </AsideBarContent>
  );
};

export default Asidebar;
