import { ITeamDT } from "@/types/team-d-t";

// Team page order: CEO first, then ED, Studio Director, Client Service, HR/Admin, Oluchi, Mofe
const team_data: ITeamDT[] = [
  {
    id: 1,
    image: "/assets/img/team/PHOTO-2026-02-13-00-46-29.jpg",
    designation: "Managing Director / CEO",
    name: "Olamide Blessing-Kayode",
    bio: "A result-oriented strategic communicator with over three decades of professional experience spanning Creative, Media, Out-of-Home, Branding and Experiential Marketing. She founded Vert Idee Limited in 2013. A Fellow, Registered Practitioner in Advertising (frpa) with a degree in Linguistics from EKSU and a Diploma in Advertising from APCON.",
  },
  {
    id: 2,
    image: "/assets/img/team/Kunle-Blessing-Kayode.jpeg",
    designation: "Managing Partner / Executive Director",
    name: "Kunle Blessing-Kayode",
    bio: "An Associate member (arpa) of ARCON with a BSc in Microbiology from EKSU and over 25 years of postgraduate experience. After a stint in Oil and Gas, he co-founded Vert Idee Limited in 2013. Kunle is in charge of Production and Procurement, driving operational excellence and delivering results that matter.",
  },
  {
    id: 3,
    image: "/assets/img/team/Bayo-Oluduro.jpeg",
    designation: "Studio Director",
    name: "Bayo Oluduro",
    bio: "An astute graphics designer who has mastered the art of designing using old and new methods. He started his career in Advertising in 1991 and joined Vert Idee in 2013 to head the creative department. An HND graduate of Graphic Design from Yaba College of Technology and Associate member of ARCON (arpa).",
  },
  {
    id: 4,
    image: "/assets/img/team/Dolapo-Edem.jpeg",
    designation: "Client Service Manager",
    name: "Dolapo Kasali-Edem",
    bio: "An HND Mass Communications graduate from Lagos State Polytechnic with a Diploma in Advertising from ARCON and an Associate member (arpa). A marketing and brand communications practitioner with the ability to work with set goals in enriching value for both company and clients.",
  },
  {
    id: 5,
    image: "/assets/img/team/Oluchi-Iheduru.jpeg",
    designation: "NYSC",
    name: "Oluchi Iheduru",
    bio: "Passionate, hardworking and strives to make a positive impact wherever she finds herself. An Accounting graduate from Michael Okpara University of Agriculture Umudike, Abia State.",
  },
  {
    id: 6,
    image: "/assets/img/team/PHOTO-2026-02-18-06-26-23.jpg",
    designation: "HR / Admin",
    name: "Ajibola Kolawole",
    bio: "A graduate of Federal University of Agriculture Abeokuta with a passion for HR administration and people management. Jibola is a self-motivated individual who is skilled and committed to supporting efficient HR operations.",
  },
  {
    id: 7,
    image: "/assets/img/team/1743296890767 copy.jpeg",
    designation: "Software Consultant",
    name: "Eyimofe Blessing-Kayode",
    bio: "Passionate about solving today's problems with code. He completed his Mechanical Engineering degree from Northeastern University Boston, Massachusetts. Right from college, he began leading engineering teams at startups ranging from cancer imaging technology to Fintech.",
    location: "San Francisco, California",
  },
];

export default team_data;

// Home page slider: Bayo first, founders center, Mofe last
export const team_data_slider: ITeamDT[] = [
  team_data[2], // Bayo
  team_data[3], // Dolapo
  team_data[0], // Olamide (CEO) - center
  team_data[1], // Kunle (ED) - center
  team_data[4], // Oluchi
  team_data[5], // Ajibola
  team_data[6], // Mofe
];
