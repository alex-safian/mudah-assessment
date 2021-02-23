import React from "react";
import Container from "../../components/Container";
import { ReactComponent as MudahLogo } from "../../assets/img/mudah.svg";

const About: React.FC = () => {
  return (
    <Container>
      <section className="mb-4 mt-4 container flex flex-col">
        <a href="https://www.mudah.my/" className="self-center">
          <MudahLogo className="max-w-full" width="400" />
        </a>
        <p className="text-xl">
          This is an assessment for Mudah which is done by Alireza Safian. It is
          React application and includes a modal component which displays list
          of conditions.
        </p>
      </section>
    </Container>
  );
};

export default About;
