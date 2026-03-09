import { IMenuDT } from "@/types/menu-d-t";

const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
    services_mega_menu: {
      services: [
        {
          title: "Creative",
          description: "Logo creation, brand implementation & roadmap, event programs and more.",
          link: "/services/creative",
          icon: "palette",
        },
        {
          title: "Media",
          description: "Radio jingles, TVC production and strategic media placement.",
          link: "/services/media",
          icon: "radio",
        },
        {
          title: "Outdoor",
          description: "Out-of-home advertising including billboards, signage and transit ads.",
          link: "/services/outdoor",
          icon: "billboard",
        },
        {
          title: "Experiential Marketing",
          description: "Modern trade activations, market activation, road shows and sampling.",
          link: "/services/experiential",
          icon: "event",
        },
        {
          title: "Branding",
          description: "Showroom branding, office branding, uniforms and corporate gift items.",
          link: "/services/branding",
          icon: "brand",
        },
        {
          title: "Production",
          description: "Printing, calendars, journals, jotters, banners and signage production.",
          link: "/services/production",
          icon: "print",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 4,
    title: "About Us",
    link: "/team",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];

export default menu_data;

// mobile menus
export const mobile_menu_data: {
  id: number;
  title: string;
  link: string;
  dropdown_menus?: {
    title: string;
    link: string;
  }[];
}[] = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Services",
    link: "/services",
    dropdown_menus: [
      { title: "All Services", link: "/services" },
      { title: "Creative", link: "/services/creative" },
      { title: "Media", link: "/services/media" },
      { title: "Outdoor", link: "/services/outdoor" },
      { title: "Experiential Marketing", link: "/services/experiential" },
      { title: "Branding", link: "/services/branding" },
      { title: "Production", link: "/services/production" },
    ],
  },
  {
    id: 3,
    title: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 4,
    title: "About Us",
    link: "/team",
  },
  {
    id: 5,
    title: "Blog",
    link: "/blog",
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
  },
];
