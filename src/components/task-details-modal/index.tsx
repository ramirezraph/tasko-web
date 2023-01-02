import { DeleteButton } from 'components/delete-button/loadable';
import { Modal } from 'components/modal/loadable';
import { Portal } from 'components/portal/loadable';
import { Subheading } from 'components/subheading/loadable';
import { useNavigate, useParams } from 'react-router-dom';
import { TaskDetailsAssignees } from 'components/task-details-assignees/loadable';
import { TaskDetailsSubtasks } from 'components/task-details-subtasks/loadable';

import tasksJson from 'data/tasks.json';
import { TaskProgress } from 'components/task-progress/loadable';
import { TaskDetailsTitlebar } from 'components/task-details-titlebar/loadable';
import { Task, TaskStatus } from 'data/models';

interface TaskDetailsModalProps {}

export function TaskDetailsModal(props: TaskDetailsModalProps) {
   const { taskId } = useParams();

   const {} = props;

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
         <Modal visible={true} onClose={onClose}>
            <TaskDetailsTitlebar title={task.title} status={task.status} />
            <TaskProgress progressPercentage={task.progressPercentage} />
            <div>
               <Subheading>Description</Subheading>
               <p className="mt-1 text-sm text-whitesmoke">
                  {task.description}
               </p>
            </div>
            <div>
               <Subheading>Due</Subheading>
               <p className="mt-1 text-sm text-whitesmoke">{task.dueDate}</p>
            </div>
            <TaskDetailsSubtasks subtasks={task.subtasks} />
            <TaskDetailsAssignees assigneeIds={task.assigneeIds} />
            <div>
               <DeleteButton text="Delete this task" className="mt-10" />
            </div>
         </Modal>
      </Portal>
   );
}
