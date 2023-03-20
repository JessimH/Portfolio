import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Grid } from "@nextui-org/react";
import { Card, Col, Row, Button, Text } from "@nextui-org/react";

import ProjectCard from '../../components/ProjectCard';

import {
  faLinkedin,
  faTwitter,
  faGithub
} from "@fortawesome/free-brands-svg-icons";


export default function Home() {
  return (
    <>
      <Head>
        <title>Jessim Heddadi | Fullstack Software Developer</title>
        <meta name="description" content="Jessim Heddadi a React.js and Vue.js fullstack Software Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.profile_pic}>
          <Image
              src='/profilePic.png'
              alt='User profile picture'
              width={100}
              height={100}
          />
        </div>
        <h1 className={styles.title}>Jessim Heddadi</h1>
        <p className={styles.subtitle}>Hi I'm Jessim 👋 , a Fullstack Software Developer based in Paris 🇫🇷</p>
        <ul className={styles.links_ul}>
          <li className={styles.links_li}>
            <Link target='_blank' href="https://www.linkedin.com/in/jessimheddadi/">  
              <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: 20, color: "lightgrey" }} />
            </Link>
          </li>
          <li className={styles.links_li}>
            <Link target='_blank' href="https://twitter.com/le_BigJ">  
              <FontAwesomeIcon icon={faTwitter} style={{ fontSize: 20, color: "lightgrey" }} />
            </Link>
          </li>
          <li className={styles.links_li}>
            <Link target='_blank' href="https://github.com/JessimH">  
              <FontAwesomeIcon icon={faGithub} style={{ fontSize: 20, color: "lightgrey" }} />
            </Link>
          </li>
        </ul>
        <Link className={styles.calendly_card} target='_blank' href="https://calendly.com/jessim-heddadi/30min">
          <Image
            src='/Calendly.png'
            alt='User profile picture'
            width={50}
            height={50}
          />
          reach me on calendly
        </Link>
        <div className={styles.divider}></div>
        <h2>🤯 I work with the latest frontend technologies and their ecosystem</h2>
        <div className={styles.stack_container}>
          <Image
              src='/React.png'
              alt='React.js logo'
              width={70}
              height={60}
          />
          <Image
            src='/native.png'
            alt='React native Logo'
            width={90}
            height={60}
          />
          <Image
            src='/redux.png'
            alt='Redux Logo'
            width={60}
            height={60}
          />
          <Image
            src='/Vue.png'
            alt='Vue.js Logo'
            width={70}
            height={60}
          />
          <Image
            src='/nuxt.png'
            alt='Nuxt.js Logo'
            width={90}
            height={60}
          />
          <Image
            src='/ts.png'
            alt='Typescript Logo'
            width={60}
            height={60}
          />
          <Image
            src='/jest.png'
            alt='Jest Logo'
            width={60}
            height={60}
          />
          <Image
            src='/node.png'
            alt='node.js Logo'
            width={55}
            height={60}
          />
          <Image
            src='/supabase.png'
            alt='supabase Logo'
            width={60}
            height={60}
          />
          <Image
            src='/pgsql.png'
            alt='Pgsql Logo'
            width={60}
            height={60}
          />
          <Image
            src='/mongo.png'
            alt='MongoDb Logo'
            width={60}
            height={60}
          />
        </div>
        <div className={styles.divider}></div>
        <h2>They trusted me to build their interfaces 🔥 :</h2>
        <Grid.Container gap={2} justify="center">
          <Grid xs={12} sm={4}>
            <ProjectCard title='Influence4you :' desc='Technology and influence marketing experts' projectPic='/i4y-project.png' seeMoreLink='https://www.influence4you.com/fr'/>
          </Grid>
          <Grid xs={12} sm={4}>
            <ProjectCard title='LittlexGarden :' desc='online manga reading app' projectPic='/Lg-project.png' seeMoreLink='https://littlexgarden.com/'/>
          </Grid>
          <Grid xs={12} sm={4}>
            <ProjectCard title='Rooz :' desc='asian ready meal factory' projectPic='/rooz-project.png' seeMoreLink='https://rooz.vercel.app/'/>
          </Grid>
        </Grid.Container>
      </main>
    </>
  )
}
