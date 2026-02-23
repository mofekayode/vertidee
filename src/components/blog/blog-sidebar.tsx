import React from "react";
import Image from "next/image";
import banner from "@/assets/img/inner-blog/blog-sidebar/banner/banner.jpg";
import { Search } from "../svg";
import { blog_classic } from "@/data/blog-data";
import Link from "next/link";

export default function BlogSidebar() {
  const rc_posts = [...blog_classic.filter((b) => b.img)].slice(0, 3);
  return (
    <div className="sidebar__wrapper">
      <div className="sidebar__widget mb-45">
        <div className="sidebar__author text-center">
          <div className="sidebar__author-thumb">
            <Image
              src="/assets/img/logo/vertidee-logo.svg"
              alt="Vert Idee"
              width={240}
              height={100}
              style={{ width: "180px", height: "auto", objectFit: "contain" }}
            />
          </div>
          <div className="sidebar__author-content">
            <h4 className="sidebar__author-title">Vert Idee</h4>
            <p>Creative advertising agency based in Lagos, Nigeria.</p>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__search">
            <form action="#">
              <div className="sidebar__search-input-2">
                <input type="text" placeholder="Search articles" />
                <button type="submit">
                  <Search />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Category</h3>
        <div className="sidebar__widget-content">
          <ul>
            <li>
              <Link href="/blog">Branding</Link>
            </li>
            <li>
              <Link href="/blog">Activations</Link>
            </li>
            <li>
              <Link href="/blog">Outdoor</Link>
            </li>
            <li>
              <Link href="/blog">Marketing</Link>
            </li>
            <li>
              <Link href="/blog">Production</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Recent Post</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__post rc__post">
            {rc_posts.map((item) => (
              <div
                key={item.id}
                className="rc__post mb-30 d-flex align-items-center"
              >
                <div className="rc__post-thumb mr-20">
                  <Link href={`/blog-details/${item.id}`}>
                    <Image
                      style={{ width: "auto", height: "auto" }}
                      src={item.img!}
                      alt="blog-img"
                      width={100}
                      height={100}
                    />
                  </Link>
                </div>
                <div className="rc__post-content">
                  <div className="rc__meta d-flex align-items-center">
                    <span>{item.date}</span>
                  </div>
                  <h3 className="rc__post-title">
                    <Link href={`/blog-details/${item.id}`}>{item.title}</Link>
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Tags</h3>
        <div className="sidebar__widget-content">
          <div className="tagcloud">
            <Link href="#">Advertising</Link>
            <Link href="#">Branding</Link>
            <Link href="#">Activations</Link>
            <Link href="#">Outdoor</Link>
            <Link href="#">Events</Link>
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <div className="sidebar__widget-content">
          <div className="sidebar__banner-img">
            <Image src={banner} alt="banner" style={{ height: "auto" }} />
          </div>
        </div>
      </div>
      <div className="sidebar__widget mb-65">
        <h3 className="sidebar__widget-title">Follow Us</h3>
        <div className="sidebar__widget-content">
          <div className="sidebar__social">
            <Link href="https://instagram.com/vertidee" target="_blank">
              <i className="fa-brands fa-instagram"></i>
            </Link>
            <Link href="https://facebook.com/vertidee" target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </Link>
            <Link href="https://twitter.com/vertidee" target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </Link>
            <Link href="https://linkedin.com/company/vertidee" target="_blank">
              <i className="fa-brands fa-linkedin-in"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
