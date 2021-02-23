import React from "react";
import { Link } from "react-router-dom";
import Container from "../../components/Container";
import { ReactComponent as Image404 } from "../../assets/img/404.svg";

const NotFound: React.FC = () => (
  <Container>
    <div className="flex flex-col items-center">
      <Image404 className="max-w-sm" />
      <Link to="/products">
        Let&apos;s go <span className="text-red">Home</span>
      </Link>
    </div>
  </Container>
);

export default NotFound;
