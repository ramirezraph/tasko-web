import { UserProfile } from './userProfile';

export class User {
   id: string;
   firstName: string;
   middleName: string;
   lastName: string;
   avatarColor: string;
   projectIds: string[];

   constructor(
      id: string,
      firstName: string,
      middleName: string,
      lastName: string,
      avatarColor: string,
      projectIds: string[]
   ) {
      this.id = id;
      this.firstName = firstName;
      this.middleName = middleName;
      this.lastName = lastName;
      this.avatarColor = avatarColor;
      this.projectIds = projectIds;
   }

   get profile(): UserProfile {
      return {
         id: this.id,
         firstName: this.firstName,
         middleName: this.middleName,
         lastName: this.lastName,
         avatarColor: this.avatarColor,
      };
   }
}
