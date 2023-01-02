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
import notePencilFill from './ph_note-pencil-fill.svg';
import mdiTrash from './mdi_trash.svg';
import sidePanelClose from './carbon_side-panel-close.svg';
import doubleArrowRight from './material-symbols_keyboard-double-arrow-right.svg';

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
   notePencilFill: notePencilFill,
   trash: mdiTrash,
   modalClose: sidePanelClose,
   doubleArrowRight: doubleArrowRight,
};

export type IconTypes = keyof typeof icons;
