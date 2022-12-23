import { ProjectFooterBar } from './components/footer/loadable';
import { ProjectHeaderBar } from './components/header/loadable';
import { TasksBoard } from './components/tasks-board/loadable';

export function Project() {
   return (
      <div className="flex h-full w-full flex-col space-y-4">
         <ProjectHeaderBar className="mt-4" />
         <TasksBoard className="flex-1" />
         <ProjectFooterBar />
      </div>
   );
}
