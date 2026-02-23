import { IBlogDT } from "@/types/blog-d-t";

// blog images (using template stock photos - these are generic, not branded)
import blog_1 from "@/assets/img/home-05/blog/blog-1.jpg";
import blog_2 from "@/assets/img/home-06/blog/blog-3.jpg";
import blog_3 from "@/assets/img/home-05/blog/blog-3.jpg";
import blog_4 from "@/assets/img/home-05/blog/blog-4.jpg";
import b_m_1 from "@/assets/img/inner-blog/blog-standard/blog-1.jpg";
import b_m_2 from "@/assets/img/inner-blog/blog-standard/blog-2.jpg";
import b_m_3 from "@/assets/img/inner-blog/blog-standard/blog-3.jpg";
import b_m_4 from "@/assets/img/inner-blog/blog-standard/blog-4.jpg";
import b_m_5 from "@/assets/img/inner-blog/blog-standard/blog-5.jpg";
import b_m_6 from "@/assets/img/inner-blog/blog-standard/blog-6.jpg";
import b_m_7 from "@/assets/img/inner-blog/blog-standard/blog-7.jpg";

import avatar from "@/assets/img/inner-blog/blog-sidebar/avatar/avata-1.jpg";

import blog_post_1 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-1.jpg';
import blog_post_2 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-2.jpg';
import blog_post_3 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-3.jpg';
import blog_post_4 from '@/assets/img/inner-blog/blog-sidebar/sidebar-left-4.jpg';

import blog_list_1 from '@/assets/img/inner-blog/blog-right-sidebar/blog-1.jpg';
import blog_list_2 from '@/assets/img/inner-blog/blog-right-sidebar/blog-2.jpg';
import blog_list_3 from '@/assets/img/inner-blog/blog-right-sidebar/blog-3.jpg';
import blog_list_4 from '@/assets/img/inner-blog/blog-right-sidebar/blog-4.jpg';
import blog_list_5 from '@/assets/img/inner-blog/blog-right-sidebar/blog-5.jpg';


export const blog_home_five: IBlogDT[] = [
  {
    id: 1,
    img: blog_1,
    title: "Marketing Strategies for Startup Brands",
    date: '27. OCT. 2022',
    category: 'Marketing / Strategy',
    author: 'Vert Idee',
  },
  {
    id: 2,
    img: blog_2,
    title: "How Important is Social Media to Your Business",
    date: '27. OCT. 2022',
    category: 'Digital / Marketing',
    author: 'Vert Idee',
  },
  {
    id: 3,
    img: blog_3,
    title: "Three Reasons Your Target Customers Don't Know Your Brand",
    date: '11. FEB. 2022',
    category: 'Branding / Strategy',
    author: 'Vert Idee',
  },
  {
    id: 4,
    img: blog_4,
    title: "How to Build a Brand in Five Steps",
    date: '11. FEB. 2022',
    category: 'Branding / Creative',
    author: 'Vert Idee',
  }
];


export const blog_modern: IBlogDT[] = [
  {
    id: 5,
    img: b_m_1,
    title: 'Marketing Strategies <br> for Startup Brands',
    date: '27. OCT. 2022',
    category: 'Marketing / Strategy',
    author: 'Vert Idee',
  },
  {
    id: 6,
    img: b_m_2,
    title: 'How Important is Social Media to Your Business',
    date: '27. OCT. 2022',
    category: 'Digital / Marketing',
    author: 'Vert Idee',
  },
  {
    id: 7,
    img: b_m_3,
    title: "Three Reasons Your Target Customers Don't Know Your Brand",
    date: '11. FEB. 2022',
    category: 'Branding / Strategy',
    author: 'Vert Idee',
  },
  {
    id: 8,
    img: b_m_4,
    title: 'How to Build a Brand in Five Steps',
    date: '11. FEB. 2022',
    category: 'Branding / Creative',
    author: 'Vert Idee',
  },
  {
    id: 9,
    img: b_m_5,
    title: 'The Power of Street Activations for Brand Awareness',
    date: '15. JAN. 2023',
    category: 'Activations / Marketing',
    author: 'Vert Idee',
  },
  {
    id: 10,
    img: b_m_6,
    title: 'Why Outdoor Advertising Still Works in Lagos',
    date: '22. MAR. 2023',
    category: 'Outdoor / Strategy',
    author: 'Vert Idee',
  },
  {
    id: 11,
    img: b_m_7,
    title: 'Building Brand Partnerships for Growth',
    date: '10. MAY. 2023',
    category: 'Branding / Strategy',
    author: 'Vert Idee',
  },
  {
    id: 12,
    img: b_m_2,
    title: 'Leveraging Social Media Challenges for Brand Awareness',
    date: '05. JUL. 2023',
    category: 'Digital / Marketing',
    author: 'Vert Idee',
  },
  {
    id: 13,
    img: b_m_5,
    title: 'Modern Trade Activations That Drive Sales',
    date: '18. SEP. 2023',
    category: 'Activations / Retail',
    author: 'Vert Idee',
  },
  {
    id: 14,
    img: b_m_4,
    title: 'Brand Consistency: Lessons from Global Leaders',
    date: '02. NOV. 2023',
    category: 'Branding / Strategy',
    author: 'Vert Idee',
  },
];


export const blog_classic: IBlogDT[] = [
  {
    id: 15,
    title: "Marketing Strategies for Startup Brands",
    date: '27 OCT, 2022',
    category: 'MARKETING',
    author: 'Vert Idee',
    avatar: avatar,
    blogHeroSlider: true,
  },
  {
    id: 16,
    title: "How Important is Social Media to Your Business",
    date: '27 OCT, 2022',
    category: 'DIGITAL',
    author: 'Vert Idee',
    avatar: avatar,
    blogHeroSlider: true,
  },
  {
    id: 17,
    img: blog_post_1,
    title: "Three Reasons Your Target Customers Don't Know Your Brand",
    desc: 'Imagine how it feels to have your new house collapse just when you are about to move in? Brand awareness is essential for organizational profitability.',
    date: '11 FEB, 2022',
    category: 'BRANDING',
    author: 'Vert Idee',
  },
  {
    id: 18,
    img: blog_post_2,
    title: "How to Build a Brand in Five Steps",
    desc: 'Building a brand is setting up an outward perception of your company. It involves creating an impression for everyone who comes in contact with your services and products.',
    date: '11 FEB, 2022',
    category: 'BRANDING',
    author: 'Vert Idee',
  },
  {
    id: 19,
    blogQuoteTwo: true,
    title: "GREAT BRANDS ARE BUILT ON <br/> MEMORABLE EXPERIENCES.",
    desc: 'At Vert Idee, we believe every brand touchpoint is an opportunity to create lasting impressions that drive growth.',
    date: '15 JAN, 2023',
    category: 'INSIGHTS',
    author: 'Olamide Blessing-Kayode',
  },
  {
    id: 20,
    imgSlider: true,
    images: [blog_post_1, blog_post_2, blog_post_3],
    title: "The Power of Street Activations for Brand Awareness",
    desc: 'Mobile promotions featuring entertainment, music, games, and product giveaways bring brand experiences directly to target customers in their communities.',
    date: '22 MAR, 2023',
    category: 'ACTIVATIONS',
    author: 'Vert Idee',
  },
  {
    id: 21,
    blogQuote: true,
    title: "OLAMIDE BLESSING-KAYODE, CEO",
    desc: 'When you talk to everybody, nobody hears, sees, or gets to know you. Focus your energy on your people.',
    date: '10 MAY, 2023',
    category: 'INSIGHTS',
    author: 'Olamide Blessing-Kayode',
  },
  {
    id: 22,
    img: blog_post_4,
    title: "Why Outdoor Advertising Still Works in Lagos",
    desc: 'Strategic billboard and signage placement in high-traffic locations across Lagos and Nigeria continues to deliver strong ROI for brands.',
    date: '05 JUL, 2023',
    category: 'OUTDOOR',
    author: 'Vert Idee',
  },
];


export const blog_lists: IBlogDT[] = [
  {
    id: 23,
    img: blog_list_1,
    title: "Marketing Strategies for Startup Brands",
    date: '27. OCT. 2022',
    category: 'Marketing',
    author: 'Vert Idee',
  },
  {
    id: 24,
    img: blog_list_2,
    title: "How Important is Social Media to Your Business",
    date: '27. OCT. 2022',
    category: 'Digital',
    author: 'Vert Idee',
  },
  {
    id: 25,
    img: blog_list_3,
    title: "Three Reasons Your Target Customers Don't Know Your Brand",
    date: '11. FEB. 2022',
    category: 'Branding',
    author: 'Vert Idee',
  },
  {
    id: 26,
    img: blog_list_4,
    title: "How to Build a Brand in Five Steps",
    date: '11. FEB. 2022',
    category: 'Branding',
    author: 'Vert Idee',
  },
  {
    id: 27,
    img: blog_list_5,
    title: "The Power of Street Activations",
    date: '15. JAN. 2023',
    category: 'Activations',
    author: 'Vert Idee',
  },
  {
    id: 28,
    img: blog_list_2,
    title: "Building Brand Partnerships for Growth",
    date: '10. MAY. 2023',
    category: 'Strategy',
    author: 'Vert Idee',
  },
];

export const blog_data: IBlogDT[] = [
  ...blog_lists,
  ...blog_home_five,
  ...blog_modern,
  ...blog_classic,
]
