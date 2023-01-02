import image from 'assets/images/undraw_scrum_board.png';
import { RoundButton } from 'components/round-button/loadable';
import { TextArea } from 'components/text-area/loadable';
import { TextInput } from 'components/text-input/loadable';

export function CreateProject() {
   return (
      <div className="flex h-full w-full flex-col items-center justify-center">
         <div className="w-full max-w-xl md:w-1/2">
            <div className="flex flex-col items-center">
               <img src={image} />
               <div className="mx-12 mt-6 text-center">
                  <q>Alone we can do so little; together we can do so much</q>
                  <p className="mt-2 text-right text-xs">- Helen Keller</p>
               </div>
            </div>
            <div className="mt-12">
               <h1 className="text-3xl font-semibold text-primary">
                  New Project
               </h1>
               <TextInput
                  icon="pencil"
                  placeholder="What's the title of the project?"
                  className="mt-6"
               />
               <TextArea
                  icon="pencil"
                  placeholder="Tell something about the project."
                  className="mt-4"
               />
               <RoundButton
                  className="mt-4 w-full rounded-md !bg-primary"
                  text={'Submit and Create'}
                  textClassName="text-center text-background"
               />
            </div>
         </div>
      </div>
   );
}
