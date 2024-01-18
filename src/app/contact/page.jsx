import Image from "next/image";
import styles from "./contact.module.css";
import ContactImg from "../../../public/contact.png";
import DefaultButton from "@/components/defaultButton/DefaultButton";
import ContactForm from "@/components/contactForm/ContactForm";

const Contact = () => {
  return (
    <section className={styles.contactContainer}>
      <div className={`container`}>
        <div className={`row ${styles.contactWrapper}`}>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className={styles.leftSide}>
              <div className={styles.contactImg}>
                <Image
                  src={ContactImg}
                  fill={true}
                  className={styles.img}
                  alt="contact"
                />
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6">
            <div className={styles.rightSide}>
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
