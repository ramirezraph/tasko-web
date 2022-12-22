import { Project } from 'pages/projects';
import { ProjectCard } from '../project-card/loadable';

interface ProjectListProps {
   projects: Project[];
}

export function ProjectList(props: ProjectListProps) {
   const { projects } = props;

   return (
      <div className="h-3/4 w-full max-w-xl lg:w-1/2">
         <h1 className="text-center text-3xl font-semibold text-primary">
            My Projects
         </h1>
         <div className="mt-12 flex flex-col space-y-12">
            {projects.map((item, index) => (
               <ProjectCard
                  key={index}
                  title={item.title}
                  dateCreated={item.dateCreated}
                  status={item.status}
               />
            ))}
         </div>
      </div>
   );
}
