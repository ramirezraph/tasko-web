import { Button } from 'components/button/loadable';

export function NoProject() {
   return (
      <div className="flex flex-col items-center text-base text-whitesmoke">
         <p>
            You don't have any project, would you <br /> like to create?{' '}
            <button onClick={() => console.log('create new')}>
               <span className="text-primary">Create new project</span>
            </button>
         </p>
         <p className="mt-12">
            Or, join instead?{' '}
            <button onClick={() => console.log('join')}>
               <span className="text-primary">Join</span>
            </button>
         </p>
         <div className="mt-16 flex space-x-3 ">
            <Button icon="plus" text="Create new project" />
            <Button icon="invite" text="Join" />
         </div>
      </div>
   );
}
