import Image from "next/image";
import styles from "./blogslug.module.css";
import Blog from "../../../../public/blog1.jpg";
import Author from "../../../../public/author.jpg";
const BlogById = ({ params }) => {
  const { slug } = params;
  return (
    <section className={styles.blogSlugContainer}>
      <div className={`container`}>
        <div className={`row ${styles.blogSlugWrapper}`}>
          <div className={`col-xl-3 col-lg-3 col-md-3`}>
            <div className={styles.leftSide}>
              <div className={styles.blogImgContainer}>
                <Image src={Blog} fill={true} alt="blog" />
              </div>
            </div>
          </div>
          <div className={`col-xl-9 col-lg-9 col-md-9`}>
            <div className={styles.rightSide}>
              <p>Title</p>
              <div className={styles.blogDetailsWarapper}>
                <div className={styles.authorImg}>
                  <Image src={Author} fill={true} />
                </div>
                <div className={styles.authorName}>
                  <p className={styles.nameHeading}>Author</p>
                  <p className={styles.name}>Terry Jefferson</p>
                </div>
                <div className={styles.publishWrapper}>
                  <p className={styles.nameHeading}>Published</p>
                  <p className={styles.name}>17-1-2024</p>
                </div>
              </div>
              <div className={styles.blogText}>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea
                  ratione, mollitia quibusdam harum qui necessitatibus
                  praesentium quos nam tempore. Laudantium ea similique ducimus
                  dolore quibusdam dignissimos sequi eveniet saepe voluptatum?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogById;
