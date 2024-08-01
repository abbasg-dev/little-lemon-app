import { ReactComponent as arrow } from "./arrow.svg";
import { ReactComponent as facebook } from "./facebook.svg";
import { ReactComponent as instagram } from "./instagram.svg";
import { ReactComponent as twitter } from "./twitter.svg";
import { ReactComponent as youtube } from "./youtube.svg";
import { ReactComponent as mail } from "./mail.svg";
import { ReactComponent as phone } from "./phone.svg";
import { ReactComponent as location } from "./location.svg";
import { ReactComponent as x_mark } from "./x-mark.svg";
import { ReactComponent as menu } from "./menu.svg";
import { ReactComponent as motor_cycle } from "./motor-cycle.svg";
import { ReactComponent as success } from "./success.svg";
import { ReactComponent as scroll } from "./scroll.svg";
export default {
  ARROW: arrow,
  FACEBOOK: facebook,
  INSTAGRAM: instagram,
  TWITTER: twitter,
  YOUTUBE: youtube,
  MAIL: mail,
  PHONE: phone,
  LOCATION: location,
  X_MARK: x_mark,
  MENU: menu,
  MOTOR_CYCLE: motor_cycle,
  SUCCESS: success,
  SCROLL: scroll,
} as {
  [key: string]: React.FC<React.SVGProps<SVGSVGElement>>;
};
