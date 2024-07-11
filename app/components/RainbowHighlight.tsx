import React from "react";
import { RoughNotation } from "react-rough-notation";

const RainbowHighlight = ({ color, children }: Readonly<{ color: string, children: any}>) => {
  // Change the animation duration depending on length of text we're animating (speed = distance / time)
  const animationDuration = Math.floor(100 * children.length);

  return (
    <RoughNotation
      type="highlight"
      multiline={true}
      padding={[10, 20]}
      iterations={4}
      animationDuration={animationDuration}
      color={color}
    >
      {children}
    </RoughNotation>
  );
};

export default RainbowHighlight;