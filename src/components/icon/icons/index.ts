import materialSymbolLogin from './material-symbols_login.svg';
import mdiUserPlus from './mdi_user-plus.svg';
import mdiBellOutline from './mdi_bell-outline.svg';
import mdiMagnify from './mdi_magnify.svg';
import mdiInvite from './mdi_invite.svg';
import icBaselinePlus from './ic_baseline-plus.svg';
import biArrowRight from './bi_arrow-right.svg';
import fePencil from './fe_pencil.svg';
import solidUsersGear from './fa6-solid_users-gear.svg';
import tablerLayoutList from './tabler_layout-list.svg';

export const icons = {
   login: materialSymbolLogin,
   userPlus: mdiUserPlus,
   bell: mdiBellOutline,
   magnify: mdiMagnify,
   invite: mdiInvite,
   plus: icBaselinePlus,
   arrowRight: biArrowRight,
   pencil: fePencil,
   usersGear: solidUsersGear,
   boxList: tablerLayoutList,
};

export type IconTypes = keyof typeof icons;
