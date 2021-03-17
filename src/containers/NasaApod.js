import React, { useEffect, useState } from 'react';
import styles from './NasaApod.module.css';
import axios from 'axios';
import Apod from '../components/Apod/Apod';

const NasaApod = () => {

  const [data, setdata] = useState();

  useEffect(() => {
    if (!data)
      axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=xU3CMrS3nNgv0djoupzpT1078bczKb8CPqYyZAZN`)
        // .get(`https://api.nasa.gov/planetary/apod?api_key=${process.env.APOD_KEY}`)
        .then(res => {
          setdata(res.data)

        })
        .catch(error => { setdata({ title: "Hi this is a dummy text for Title", date: 20, hdurl: "https://media.istockphoto.com/vectors/starry-sky-seamless-pattern-white-and-blue-dots-in-galaxy-and-stars-vector-id904278188?b=1&k=6&m=904278188&s=612x612&w=0&h=hUSezsk0k49FT7m14ClXGEX07PpT8_cg4dMVck2F1cM=", explanation: "kjhkfhioehf" }) })
  });

  return (
    <>
      {data ?
        <div className={styles.NasaAPOD}>
          <Apod data={data} />
          <footer className={styles.footer}>
              <div style={{textAlign:"left"}}>
                <b>© {new Date().getFullYear()} The NASA APOD Project</b>
                <div>This Project is powered by NASA Astronomy Picture of the Day</div>
              </div>
              <div>
                Developed with{" "}
                <span role="img" aria-label="fire">
                  ❤️
            </span>{" "}
            by{" "}
                <a
                  href="https://github.com/Souravdey777/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.developer}
                >
                  @Souravdey777
            </a>
                <br />
                <div className={styles.social_icons}>
                  <a
                    href="https://github.com/Souravdey777/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/souravdey777/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://twitter.com/Souravdey777/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
          </footer>
        </div>
        : <div />}
    </>
  );

}

export default NasaApod;
