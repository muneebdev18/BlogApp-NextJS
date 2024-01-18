import Image from "next/image";
import styles from "./blog.module.css";
import Link from "next/link";
import Blog1 from "../../../public/blog1.jpg";
const Blog = () => {
  const blogs = [
    {
      id: 1,
      img: Blog1,
      title: "Title 2",
      desc: "Description # 1",
    },
    {
      id: 2,
      img: Blog1,
      title: "Title 2",
      desc: "Description # 2",
    },
    {
      id: 3,
      img: Blog1,
      title: "Title 3",
      desc: "Description # 3",
    },
    {
      id: 4,
      img: Blog1,
      title: "Title 4",
      desc: "Description # 4",
    },
    {
      id: 5,
      img: Blog1,
      title: "Title 5",
      desc: "Description # 5",
    },
  ];
  return (
    <section className={styles.blogContainer}>
      <div className={`container`}>
        <div className={`row  ${styles.blogsWrapper}`}>
          {blogs.map((item) => {
            return (
              <>
                <div key={item.id} className="col-xl-4 col-lg-4 col-md-4">
                  <Link href={`/blog/${item.id}`}>
                    <div className={styles.blogs}>
                      <div className={styles.blogsImgContainer}>
                        <Image
                          src={item.img}
                          fill={true}
                          className={styles.blogImg}
                          alt="blog"
                        />
                      </div>
                      <p className={styles.title}>{item.title}</p>
                      <p className={styles.desc}>{item.desc}</p>
                      <Link href={"/"}>
                        <p>Read More</p>
                      </Link>
                    </div>
                  </Link>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Blog;
