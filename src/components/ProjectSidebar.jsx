import Button from "./Button";

const ProjectSidebar = (props) => {
  const { onStartAddProject, projects, onSelectProject, selectedProjectId } =
    props;
  return (
    <aside className="w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul className="mt-8">
        {projects?.map((item) => {
          console.log("selectediD");


          let cssClasses =
            "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

          if (item?.id === selectedProjectId?.id) {
            cssClasses += " bg-stone-800 text-stone-200";
          }
          else{
            cssClasses += ' text-stone-400'
          }
          return (
            <li key={item?.id}>
              <button
                className={cssClasses}
                onClick={() => onSelectProject(item?.id)}
              >
                {item?.title}
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
};

export default ProjectSidebar;
