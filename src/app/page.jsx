import styles from "./page.module.css";
import DefaultButton from "@/components/defaultButton/DefaultButton";
import Link from "next/link";
import Image from "next/image";
import HomeImg from "../../public/hero.gif";
import BrandImg from "../../public/brands.png";
const Home = () => {
  return (
    <section className={styles.HomeContainer}>
      <div className={`container`}>
        <div className={`row ${styles.HomeWrapper}`}>
          <div className={`col-xl-6 col-lg-6 col-md-6 ${styles.leftSide}`}>
            <div className={styles.leftSideWrapper}>
              <div className={styles.title}>
                <p>
                  Creative
                  <br />
                  Thoughts
                  <br />
                  Agency
                </p>
              </div>
              <div className={styles.details}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero
                hic rem modi neque, laborum laudantium provident quasi quibusdam
                libero corporis? Amet inventore eos quibusdam? Vitae sapiente
                adipisci ipsum cumque similique.
              </div>
              <div className={styles.buttons}>
                <Link href={"/about"}>
                  <DefaultButton
                    text="Learn More"
                    color="#3673fd"
                    textColor="#fff"
                  />
                </Link>
                <Link href={"/contact"}>
                  <DefaultButton text="Contact" color="#fff" textColor="#000" />
                </Link>
              </div>
              <div className={styles.brandContainer}>
                <Image
                  src={BrandImg}
                  fill={true}
                  className={styles.brandImg}
                  alt="brands"
                />
              </div>
            </div>
          </div>
          <div className={`col-xl-6 col-lg-6 col-md-6 ${styles.rightSide}`}>
            <div className={styles.HomeImgContainer}>
              <Image
                src={HomeImg}
                fill={true}
                className={styles.img}
                alt="hero"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
