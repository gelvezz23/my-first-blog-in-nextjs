import React from "react";
import { useRouter } from "next/router";
import goBackIcon from "./../../../public/assets/goback.png";
import MyIcon from "./../../../public/assets/icon.png";
import {
  BorderBottom,
  ButtonBurger,
  Content,
  Line,
  NavbarContainer,
} from "./styles";
import Image from "next/image";

const Navbar = () => {
  const router = useRouter();
  const pathname = router.pathname;
  const burger = (burgers) => {
    let burger = document.querySelector(`.${burgers}`);
    burger.classList.toggle("active");
    document.querySelector("body").classList.toggle("active");
  };

  return (
    <header>
      <NavbarContainer alingContent={pathname !== "/"}>
        {pathname !== "/" && (
          <Image
            src={goBackIcon}
            alt="Back"
            width={40}
            height={40}
            onClick={() => router.back()}
            priority={true}
          />
        )}
        <Content>
          <ButtonBurger className="burger" onClick={() => burger("burger")}>
            <Line className="line" />
            <Line className="line" />
            <Line className="line" />
          </ButtonBurger>

          <picture>
            <Image
              src={MyIcon}
              alt="Back"
              width={40}
              height={40}
              onClick={() => router.back()}
              priority={true}
            />
          </picture>
        </Content>
      </NavbarContainer>
      <BorderBottom />
    </header>
  );
};

export default Navbar;
