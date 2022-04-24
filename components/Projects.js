import { useRecoilState } from "recoil";
import { projectState } from "../atoms/projectAtom";
import Banner from "./Banner";

const Projects = () => {
  const [projectData, setprojectData] = useRecoilState(projectState);

  return (
    <div className="max-w-6xl mx-auto my-20" id="projects">
      <div className="">
        <h1 className="text-4xl text-center font-joseFin text-gray-600">
          My Projects
        </h1>
        <hr className="w-[5rem] border border-red-500 mt-5 mx-auto" />
      </div>
      {/* All Projects */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-y-10 lg:gap-y-20 mt-20">
        {projectData.map((elem, i) => {
          return (
            <div key={elem.id} className="">
              <Banner {...elem} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
