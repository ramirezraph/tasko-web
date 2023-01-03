import { DeleteButton } from 'components/delete-button/loadable';
import { SideModal } from 'components/side-modal/loadable';
import { Portal } from 'components/portal/loadable';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskDetailsAssignees } from 'components/task-details-assignees/loadable';
import { TaskDetailsSubtasks } from 'components/task-details-subtasks/loadable';

import tasksJson from 'data/tasks.json';
import { TaskProgress } from 'components/task-progress/loadable';
import { TaskDetailsTitlebar } from 'components/task-details-titlebar/loadable';
import { Task, TaskStatus } from 'data/models';
import { TaskDetailsDescription } from 'components/task-details-description/loadable';
import { TaskDetailsTimeEstimate } from 'components/task-details-timeEstimate/loadable';

export function TaskDetailsModal() {
   const { taskId } = useParams();

   const navigate = useNavigate();

   const onClose = () => {
      navigate(-1);
   };

   let taskJson = tasksJson.find((task) => task.id === taskId);
   if (!taskJson) {
      return null;
   }

   const task: Task = Object.assign(taskJson, {
      status: taskJson.status as TaskStatus,
   });

   return (
      <Portal>
         <SideModal visible={true} onClose={onClose}>
            <TaskDetailsTitlebar title={task.title} status={task.status} />
            <TaskProgress progressPercentage={task.progressPercentage} />
            <TaskDetailsDescription description={task.description} />
            <TaskDetailsTimeEstimate timeEstimate={task.timeEstimate} />
            <TaskDetailsSubtasks subtasks={task.subtasks} />
            <TaskDetailsAssignees assigneeIds={task.assigneeIds} />
            <div>
               <DeleteButton text="Delete this task" className="mt-10" />
            </div>
         </SideModal>
      </Portal>
   );
}
