import React from "react";
import Link from "next/link";
import Analytics from "../src/components/animations/analitcs.js"; //"../animations/analytics.js";
import Section from "../src/components/section";
const Thing: React.FC<{ msg: string }> = (props) => {
  return <div>{props.msg}</div>;
};

export default () => (
  <div>
    <Section
      title="Advanced Analytics"
      description="AI/ML-based system that reflects business Intelligence in real-time and provides a recommended course of action"
      animation={<Analytics />}
      //number={<Number4 />}
    ></Section>
    Hello World. <Thing msg="hello" />
    <Link href="/about">
      <a>About</a>
    </Link>
  </div>
);
