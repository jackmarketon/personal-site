import React from "react";
import { RoughNotationGroup } from "react-rough-notation";
import RainbowHighlight from "./RainbowHighlight";
import Image from "next/image";
import profilePic from '../../public/personal_photo.jpg'

const Hero = () => {
  const colors = ["rgba(132, 204, 22, 0.25)", "rgba(16, 185, 129, 0.25)", "rgba(59, 130, 246, 0.25)", "rgba(245, 158, 11, 0.25)"];

  return (
    <div className="flex flex-col">
      <div className="flex justify-center w-full bg-sky-400 mb-10">
        <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-grey-200 m-2 mx-8">
          Howdy, I&apos;m Jackson Marketon!
        </h1>
      </div>
      <div className="flex flex-row">
        <div className="flex flex-col w-1/2 items-center flex-start justify-center gap-4">
          <div className="flex content-start">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-grey-200 m-2 mx-8">
              I am a:
            </h2>
          </div>
          <div className="flex content-start">
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[0]}>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-4">
                  Staff Engineer
                </h1>
              </RainbowHighlight>
          </RoughNotationGroup>
          </div>
          <div className="flex content-start">
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[1]}>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-4">
                  Product Builder
                </h1>
              </RainbowHighlight>
          </RoughNotationGroup>
          </div>
          <div className="flex content-start">
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[2]}>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-4">
                  Team Leader
                </h1>
              </RainbowHighlight>
          </RoughNotationGroup>
          </div>
          <div className="flex content-start">
            <RoughNotationGroup show={true}>
              <RainbowHighlight color={colors[3]}>
                <h1 className="text-2xl md:text-4xl font-bold text-gray-700 dark:text-gray-200 m-4">
                  SAR Responder
                </h1>
              </RainbowHighlight>
          </RoughNotationGroup>
          </div>
        </div>
        <div className="flex flex-center self-center w-1/2">
          <div className="overflow-hidden rounded-full max-h-[75%] h-full max-w-[75%] w-full">
          <Image src={profilePic} alt="Capybara representation of Jackson" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero