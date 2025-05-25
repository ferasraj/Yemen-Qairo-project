import logo from "./logo.png";
import logo_dark from "./logo_dark.svg";
import cross_icon from "./cross_icon.svg";
import menu_icon from "./menu_icon.png";
import star_icon from "./star_icon.svg";
import left_arrow from "./left_arrow.svg";
import right_arrow from "./right_arrow.svg";
import brand_img from "./brand_img.png";
import xl_brand_img from "./xl-brand_img.png";
import project_img_1 from "./project_img_1.jpg";
import project_img_2 from "./project_img_2.jpg";
import project_img_3 from "./project_img_3.jpg";
import project_img_4 from "./project_img_4.jpg";
import project_img_5 from "./project_img_5.jpg";
import project_img_6 from "./project_img_6.jpg";
import profile_img_1 from "./profile_img_1.png";
import profile_img_2 from "./profile_img_2.png";
import profile_img_3 from "./profile_img_3.png";

export const assets = {
  logo,
  logo_dark,
  cross_icon,
  menu_icon,
  star_icon,
  brand_img,
  xl_brand_img,
  project_img_1,
  project_img_2,
  project_img_3,
  project_img_4,
  left_arrow,
  right_arrow,
};

export const projectsData = [
  {
    title: "Medtown Sky",
    price: "EGP 2,180,250",
    location: "New Capital",
    image: project_img_1,
  },
  {
    title: "Oia Compound",
    price: "EGP 8,250,000",
    location: "New Capital",
    image: project_img_2,
  },
  {
    title: "I Business Park",
    price: "EGP 9,823,500",
    location: "New Capital",
    image: project_img_3,
  },
  {
    title: "I Sheraton Compound",
    price: "EGP 9,625,000",
    location: "New Capital",
    image: project_img_4,
  },
  {
    title: "Vista Verde",
    price: "$2,50,000",
    location: "San Francisco",
    image: project_img_5,
  },
  {
    title: "Serenity Suites",
    price: "$2,50,000",
    location: "Chicago",
    image: project_img_6,
  },
];

export const testimonialsData = [
  {
    name: "محمد ناجي",
    title: "رجل أعمال",
    image: profile_img_1,
    alt: "Portrait of Mohammed Naji",
    rating: 5,
    text: "من أوّل لقاء، فهموا أنا كيف أفكّر وساعدوني ألاقي العقار اللي كنت أدوّر عليه. صراحة، دقّتهم في التفاصيل وحرصهم على رضا الزبون ما له مثيل.",
  },
  {
    name: "عمرو الدسوقي",
    title: "طبيب",
    image: profile_img_2,
    alt: "Portrait of Amr El Desouki",
    rating: 4,
    text: "من أول ما اتقابلنا، فهموا أنا عايز إيه وساعدوني ألاقي العقار اللي كنت بدوّر عليه. اهتمامهم بالتفاصيل وحرصهم على رضا العميل ملوش زي.",
  },
  {
    name: "تركي العتيبي",
    title: "مستثمر",
    image: profile_img_3,
    alt: "Portrait of Turki Al Otaibi",
    rating: 5,
    text: "من أول لقاء، فهموا شنو أبي وساعدوني ألقى العقار اللي يناسبني تمام. صراحة، دقّتهم وحرصهم على رضا العميل ما له مثيل.",
  },
];
