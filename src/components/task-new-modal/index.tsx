import { DeleteButton } from 'components/delete-button/loadable';
import { SideModal } from 'components/side-modal/loadable';
import { Portal } from 'components/portal/loadable';
import { Subheading } from 'components/subheading/loadable';
import { useNavigate } from 'react-router-dom';
import { TaskDetailsAssignees } from 'components/task-details-assignees/loadable';
import { TaskDetailsSubtasks } from 'components/task-details-subtasks/loadable';

import { TaskProgress } from 'components/task-progress/loadable';
import { TaskDetailsTitlebar } from 'components/task-details-titlebar/loadable';
import { Task } from 'data/models';
import { TaskDetailsDescription } from 'components/task-details-description/loadable';
import { TaskDetailsTimeEstimate } from 'components/task-details-timeEstimate/loadable';
import { useState } from 'react';
import { CreateTaskButton } from 'components/create-task-button/loadable';
import { RoundButton } from 'components/round-button/loadable';

export function TaskNewModal() {
   const navigate = useNavigate();

   const onClose = () => {
      navigate(-1);
   };

   const [task, setTask] = useState<Task>({
      id: '',
      projectId: '',
      title: 'New Task 1',
      description: '',
      timeEstimate: 'Tue, 18 Aug 2022',
      progressPercentage: 0,
      status: 'to do',
      assigneeIds: [],
      subtasks: [],
   });

   const onSubmit = () => {
      console.log('create task submit');
      console.log(task);
   };

   const onCancel = () => {
      onClose();
   };

   return (
      <Portal>
         <SideModal visible={true} onClose={onClose}>
            <TaskDetailsTitlebar
               title={task.title}
               status={task.status}
               setTask={setTask}
            />
            {task.subtasks.length > 0 ? (
               <TaskProgress progressPercentage={task.progressPercentage} />
            ) : null}
            <TaskDetailsDescription
               description={task.description}
               setTask={setTask}
            />
            <TaskDetailsTimeEstimate timeEstimate={task.timeEstimate} />
            <TaskDetailsSubtasks subtasks={task.subtasks} />
            <TaskDetailsAssignees assigneeIds={task.assigneeIds} />
            <div>
               <div className="mt-6 flex space-x-3">
                  <CreateTaskButton onClick={onSubmit} />
                  <RoundButton
                     onClick={onCancel}
                     className="!bg-transparent hover:!bg-secondary"
                     text={'Cancel'}
                  />
               </div>
            </div>
         </SideModal>
      </Portal>
   );
}
