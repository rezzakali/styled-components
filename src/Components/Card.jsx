import React from "react";
import {
  CardBody,
  CardContainer,
  H4,
  Image,
  P,
} from "../Styles/Container.style";
import Heading from "./Heading";

function Card() {
  return (
    <CardContainer>
      <Heading />
      <div>
        <Image src="nerd.png" alt="" />
        <CardBody>
          <H4>React Styled Components</H4>
          <P>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            cum
          </P>
        </CardBody>
      </div>
    </CardContainer>
  );
}

export default Card;
