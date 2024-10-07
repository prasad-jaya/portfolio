import React, { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  
  const boxRef = useRef(null);
  const prevScrollPos = useRef(0);

  const handleClick = (anchor) => () => {
    const id = `${anchor}-section`;
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  const socialLinks = socials.map((item) => {
    return (
      <Box   p='1'>
        <a href={item.url}>
          <FontAwesomeIcon icon={item.icon} size="2x" spacing={8} />
        </a>
      </Box>
    
    )
  });

  useEffect(()=>{
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      const boxElement = boxRef.current;

      if (currentScrollPos > prevScrollPos.current) {
        boxElement.style.transform = "translateY(-200px)";
      } else {
        boxElement.style.transform = "translateY(0)";
      }
      prevScrollPos.current = currentScrollPos;
    };

    window.addEventListener('scroll',handleScroll)

    return (()=>{
      window.removeEventListener('scroll', handleScroll)
    })
  },[])

  return (
    <Box
      ref={boxRef}
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack>
            {/* Add social media links based on the `socials` data */}
            {socialLinks}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              {/* Add links to Projects and Contact me section */}
              <a onClick={handleClick("contactme")} href="/#contact-me" >Contact Me</a>
              <a onClick={handleClick("projects")} href="/#projects" >Projects</a>

            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
