import { UserProfile } from './userProfile';

export class User {
   constructor(
      public id: string,
      public firstName: string,
      public middleName: string,
      public lastName: string,
      public avatarColor: string,
      public projectIds: string[]
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
