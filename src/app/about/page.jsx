import Image from "next/image";
import styles from "./about.module.css";
import AboutImg from "../../../public/about.png";
const About = () => {
  const statsData = [
    {
      id: 1,
      number: "l0K+",
      title: "Years of Experience",
    },
    {
      id: 2,
      number: "234K+",
      title: "People Reached",
    },
    {
      id: 3,
      number: "5K+",
      title: "Services and Plugins",
    },
  ];
  return (
    <section className={styles.aboutMain}>
      <div className={`container`}>
        <div className={`row ${styles.aboutWrapper}`}>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className={styles.leftSide}>
              <p className={styles.title}>About Agency</p>
              <p className={styles.desc}>
                We Create digital ideas
                <br />
                that are bigger,bolder,
                <br />
                braver and better.
              </p>
              <p className={styles.details}>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Deserunt accusantium nisi commodi inventore corrupti laboriosam
                animi, provident dolorum ratione quam aperiam voluptates!
                Assumenda cupiditate culpa quam tenetur officiis, recusandae
                voluptas.
              </p>
              <div className={styles.stats}>
                {statsData.map((item) => {
                  return (
                    <div key={item.id}>
                      <p className={styles.statsNumber}>{item.number}</p>
                      <p className={styles.statsTitle}>{item.title}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className={styles.rightSide}>
              <div className={styles.AboutImgContainer}>
                <Image
                  style={{ objectFit: "cover" }}
                  src={AboutImg}
                  fill={true}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
