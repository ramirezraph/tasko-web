import { Avatar } from 'components/avatar/loadable';
import { Icon } from 'components/icon/loadable';

interface ProjectCardProps {
   title: string;
   dateCreated: string;
   status: string;

   onClick?: () => void;
}

export function ProjectCard(props: ProjectCardProps) {
   const { title, dateCreated, status } = props;

   return (
      <button className="rounded-md p-4 transition-colors duration-300 ease-in-out hover:bg-[#272D36]">
         <div className="flex justify-between">
            <h2 className="text-xl font-semibold text-primary">{title}</h2>
            <Icon icon="arrowRight" />
         </div>
         <div className="mt-4 flex items-center justify-between">
            <div className="flex -space-x-4">
               <Avatar
                  initials="GG"
                  className="p-1"
                  backgroundColor="#6CFF69"
               />
               <Avatar
                  initials="RR"
                  className="p-1"
                  backgroundColor="#FFD369"
               />
               <Avatar
                  initials="DA"
                  className="p-1"
                  backgroundColor="#698AFF"
               />
               <Avatar
                  initials="+5"
                  className="p-1"
                  backgroundColor="#FAFAFA"
               />
            </div>
            <div className="flex space-x-6">
               <span className="hidden md:inline">{dateCreated}</span>
               <div className="flex items-center space-x-2">
                  <div className="h-2 w-2 bg-primary"></div>
                  <span>{status}</span>
               </div>
            </div>
         </div>
      </button>
   );
}
