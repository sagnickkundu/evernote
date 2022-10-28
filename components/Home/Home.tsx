import React from "react";
import styles from "./Home.module.scss";
import Link from "next/link";
import Image from "next/image";
import heroImg from "../../public/task_hero_image@2x__en.png";
const Home = () => {
  return (
    <>
      <div className={styles.top}>
        <div className={styles.row}>
          <div className={styles.logo}>
            <Image src="/primary.svg" alt="Evernote logo" layout="fill" />
          </div>

          <nav className={styles.topNav}>
            <ul>
              <li>
                <Link href="/">Why Evernote</Link>
              </li>
              <li>
                <Link href="/">Features</Link>
              </li>
              <li>
                <Link href="/">For Individuals</Link>
              </li>
              <li>
                <Link href="/">For Teams</Link>
              </li>
            </ul>
          </nav>

          <nav className={styles.utilityNav}>
            <ul>
              <li>
                <Link href="/">Help</Link>
              </li>
              <li>
                <Link href="/login">Log In</Link>
              </li>
              <li>
                <Link href="/">
                  <button className={styles.downloadBtn}>Download</button>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <div className={styles.hero}>
        <div className={styles.row}>
          <div className={styles.content}>
            <div className={styles.valueProp}>
              <h1>Tame your work, organize your life</h1>
              <div className={styles.description}>
                Remember everything and tackle any project with your notes,
                tasks, and schedule all in one place.
              </div>

              <p className={styles.cta}>
                <Link href="/registration">
                  <button className={styles.btnPrimary}>
                    Sign up for free
                  </button>
                </Link>
              </p>

              <p className={styles.loginCta}>
                <Link href="/login">
                  Already have an account? Log in
                </Link>
              </p>
            </div>

            <div className={styles.heroRow}>
              <div className={styles.imgContainer}>
                <Image src={heroImg} alt="" />
              </div>

              <div className={styles.carouselContainer}>
                <div className={styles.carouselTexts}>
                  <div className={styles.text}>
                    <div className={styles.heading}>
                      <p>WORK ANYWHERE</p>
                    </div>

                    <div className={styles.description}>
                      <p>
                        Keep important info handy—your notes sync automatically
                        to all your devices.
                      </p>
                    </div>
                  </div>

                  <div className={styles.text}>
                    <div className={styles.heading}>
                      <p>REMEMBER EVERYTHING</p>
                    </div>

                    <div className={styles.description}>
                      <p>
                      Make notes more useful by adding text, images, audio,
                      scans, PDFs, and documents.
                      </p>
                    </div>
                  </div>

                  <div className={styles.text}>
                    <div className={styles.heading}>
                      <p>TURN TO-DO INTO DONE</p>
                    </div>

                    <div className={styles.description}>
                      <p>
                      Bring your notes, tasks, and schedules together to get
                      things done more easily.
                      </p>
                    </div>
                  </div>

                  <div className={styles.text}>
                    <div className={styles.heading}>
                      <p>FIND THINGS FAST</p>
                    </div>

                    <div className={styles.description}>
                      <p>
                      Get what you need, when you need it with powerful,
                      flexible search capabilities.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
