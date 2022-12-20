import materialSymbolLogin from './material-symbols_login.svg';
import mdiUserPlus from './mdi_user-plus.svg';

export const icons = {
   login: materialSymbolLogin,
   userPlus: mdiUserPlus,
};

export type IconTypes = keyof typeof icons;
