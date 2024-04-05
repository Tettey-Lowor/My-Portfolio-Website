import React from "react";

export default function About() {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white mt-20 "
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 mt-20">
            About
          </p>
        </div>
        <p className="text-xl mt-10 ">
          I am an aspiring environmental professional with a passion
          for using technology solutions to drive positive climate action.
          Through my experience as a research assistant studying the impacts of
          climate change on forest communities, I developed a strong interest
          in investigating environmental challenges. Since then, I have 
          taken roles with the Environmental Protection Agency and other
          organizations, deepening her expertise in areas like environmental
          monitoring, compliance, and project management. I also enjoy
          mentoring students and sharing my knowledge through workshops.
          Outside of my professional work, I am a dedicated volunteer
          with forums creating awareness on sustainability issues. I believe
          empowering youth and communities is key to driving change.
        </p>
        <br></br>

        <p className="text-xl mb-10">
          Now, My passion has grown and I choose to build a career
          in IT. Through programs with MEST and Generation Ghana, I seek to
          expand my web development skills and find ways to apply technology to
          benefit the environment. By furthering my abilities with frameworks like
          React, I hope to one day design digital solutions that
          facilitate climate action and stewardship of natural resources.
          I am committed to continuous learning and using my knowledge
          to positively impact the world, and always eager to take the
          next steps in my journey toward making a difference through
          environmental protection and climate solutions.
        </p>
      </div>
    </div>
  );
}
