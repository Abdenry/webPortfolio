import ProjectCard from "../components/ProjectCard";

export default function ProjectsPage() {
  return (
    <main className="px-6">
      {/* Page Description */}
      <div className="text-white">
        <h1 className="border-b w-auto font-extrabold sm:text-lg">Projects</h1>
        <p className=" mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra
          mauris in aliquam sem fringilla ut morbi tincidunt.
        </p>
      </div>

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
