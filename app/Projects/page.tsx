import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main>
      {/* Page Description */}
      <div className="text-white">
        <h1 className="border-b-2 border-[#333333] w-auto font-extrabold sm:text-2xl mb-2">
          Projects
        </h1>
        <p className=" mb-10">
          Below is a list of projects I have either built myself or in
          colloboration with others. Click on a project that interests you to
          learn more about it! If you are interested in the the code written for
          these projects I more than likely have a GitHub repository for it,
          make sure to check it out by clicking the GitHub link at the top of
          the screen.
        </p>
      </div>

      {/* Project: Tazer Cards */}
      <ProjectCard
        title="Tazer Cards"
        link="https://youtu.be/0fpzKOLWwhQ"
        img="/tazerCards.png"
        desc="I made a device that would convert theoretical damage taken in 
                popular card games into tangible consequences. Achieved using the 
                Arduino Nano, a custom health tracker written in python, and a modified TENS machine."
        external={true}
      />

      {/* Project: This website */}
      <ProjectCard
        title="Portfolio Website"
        link="https://github.com/Abdenry/webPortfolio"
        img="/webPortfolio.png"
        desc="This website was a project I undertaken to learn something new and make the train rides to and from QUT a little more exciting.
                It is written with the Next.Js framework and hosted with Vercel."
        external={true}
      />

      {/* Project: Sample Collecting Robot */}
      <ProjectCard
        title="Sample Collecting Robot"
        link="https://youtu.be/Dr_o5N65tek?t=120"
        img="/egb320Project.png"
        desc='In 2022, I completed the EGB320: Mechatronics Design 2 unit and
                built a prototype mars rover! The mission was to search, collect
                and return "moon rocks" scattered around the environment.'
        external={true}
      />
    </main>
  );
}
