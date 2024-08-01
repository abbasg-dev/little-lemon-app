import Images from "assets/images";
import Icons from "assets/icons";
import {
  Contacts,
  Socials,
  Links,
  Customers,
  Meals,
} from "interfaces/main.model";
import * as ROUTES from "constants/routes";
export const contacts: Contacts[] = [
  { icon: Icons.LOCATION, info: "123 Fake Ave, Chicago, IL 60602" },
  { icon: Icons.PHONE, info: "+1 (012) 345-6789" },
  { icon: Icons.MAIL, info: "info@littlelemon.com" },
];
export const socials: Socials[] = [
  { icon: Icons.FACEBOOK, name: "facebook" },
  { icon: Icons.INSTAGRAM, name: "instagram" },
  { icon: Icons.TWITTER, name: "twitter" },
  { icon: Icons.YOUTUBE, name: "youtube" },
];
export const links: Links[] = [
  {
    name: "home",
    path: `/#${ROUTES.HOME}`,
    hashLink: true,
  },
  {
    name: "about",
    path: `/#${ROUTES.ABOUT}`,
    hashLink: true,
  },
  {
    name: "menu",
    path: `/#${ROUTES.MENU}`,
    hashLink: true,
  },
  {
    name: "reservations",
    path: ROUTES.BOOKING_FORM,
    hashLink: false,
  },
  {
    name: "order-online",
    path: ROUTES.ORDER_ONLINE,
    hashLink: false,
  },
  {
    name: "login",
    path: ROUTES.LOGIN,
    hashLink: false,
  },
];
export const customers: Customers[] = [
  {
    fullName: "george",
    image: Images.CUSTOMER_1,
    rating: [1, 1, 1, 1, 1],
    says: "george-says",
  },
  {
    fullName: "christina",
    image: Images.CUSTOMER_2,
    rating: [1, 1, 1, 1, 0.5],
    says: "christina-says",
  },
  {
    fullName: "joseph",
    image: Images.CUSTOMER_3,
    rating: [1, 1, 1, 1, 0],
    says: "joseph-says",
  },
  {
    fullName: "jennifer",
    image: Images.CUSTOMER_4,
    rating: [1, 1, 1, 1, 1],
    says: "jennifer-says",
  },
];
export const meals: Meals[] = [
  {
    name: "greek-salad",
    image: Images.MEAL_1,
    price: "$10.00",
    description: "greek-salad-desc",
  },
  {
    name: "bruschetta",
    image: Images.MEAL_2,
    price: "$6.79",
    description: "bruschetta-desc",
  },
  {
    name: "lemon-dessert",
    image: Images.MEAL_3,
    price: "$8.50",
    description: "lemon-dessert-desc",
  },
];
