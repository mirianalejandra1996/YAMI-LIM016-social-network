import { Login } from "../components/Login.js";
import { Perfil } from "../components/Perfil.js";
import { Registro } from "../components/Register.js";
import { Timeline } from "../components/Timeline.js";
import { Form_Post } from "../components/Form_publicacion.js";
import { Profile } from "../components/Profile.js";
import { MiMuro } from "../components/Muro.js"

export const components = {
  login: Login,
  registro: Registro,
  timeline: Timeline,
  perfil: Perfil,
  formPost: Form_Post,
  profile: Profile,
  muro: MiMuro
};

// const DATE_UNITS = {
//   day: 86400,
//   hour: 3600,
//   minute: 60,
//   second: 1,
// };

// const getSecondDiff = (timestamp) => (Date.now() - timestamp) / 1000;

// const getUnitAndValueDate = (secondsElapsed) => {
//   for (const [unit, secondsInUnit] of Object.entries(DATE_UNITS)) {
//     if (secondsElapsed >= secondsInUnit || unit === "seconds") {
//       const value = Math.floor(secondsElapsed / secondsInUnit) * -1;
//       return { value, unit };
//     }
//   }
// };

// const rtf = new Intl.RelativeTimeFormat(locale);

// const timestamp = +new Date() - 3600000;

// const secondsElapsed = getSecondDiff(timestamp);
// const { value, unit } = getUnitAndValueDate(secondsElapsed);
// rtf.format(value, unit);
