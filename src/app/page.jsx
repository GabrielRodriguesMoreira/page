import Image from 'next/image'
import styles from './page.module.css'
import SemicircleGraph from './componenets/Graph.jsx';
export default function Home() {

  return (
    <main className={styles.main}>
      <div className={styles.banner}>
        <img src="/image2.png" alt="anime banner" />
      </div>
      <section className={styles.content_container}>
        <section className={styles.left_block}>
          <div className={styles.left_block_image}>
            <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.themoviedb.org%2Ft%2Fp%2Foriginal%2Fz97KYWVjxwMJuUvN1kMKElMouI3.jpg" alt="anime poster" />
          </div>
          <div className={styles.left_block_data}>
            <h1>
              Tengen Toppa Gurren Lagann
            </h1>
            <div className={styles.tags}>
              <span>Adventure</span>
              <span>Mecha</span>
            </div>
            <p>
              In a distant future where humanity resides in underground villages to escape the wrath of mysterious creatures known as "Beastmen," a young orphan named Simon discovers a small, mysterious drill pendant while excavating. Kamina, a spirited and charismatic rebel, recognizes its significance and dreams of reaching the surface to explore the world above. The duo sets off on an adventure, creating their giant robot, Gurren Lagann, to battle against the Beastmen and their tyrannical leader, Lordgenome.
            </p>
          </div>
        </section>
        <section className={styles.right_block}>
          <div className={styles.right_block_upper_blocks}>
            <div className={styles.right_block_block}>
              <div className={styles.stars}>
                <img src="/star1.svg"></img>
                <img src="/star1.svg"></img>
                <img src="/star1.svg"></img>
                <img src="/star1.svg"></img>
                <img src="/star2.svg"></img>
              </div>
              <h2>4.5/5.0</h2>
              <h3>15.590 votes</h3>
            </div>
            <div className={styles.right_block_block}>
              <table>
                <tbody>
                  <tr>
                    <td>Year</td>
                    <td>2007</td>
                  </tr>
                  <tr>
                    <td>Episodes</td>
                    <td>27</td>
                  </tr>
                  <tr>
                    <td>Age Rating</td>
                    <td>13+</td>
                  </tr>
                  <tr>
                    <td style={{ border: 'none' }}>Where to Watch</td>
                    <td style={{ border: 'none' }}>
                      <a style={{ color: 'white', textDecoration: 'underline' }} href="https://www.crunchyroll.com" target="_blank">Crunchyroll  </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className={styles.right_block_staff}>
            <div className={styles.staffblock}>
              <h3>Author</h3>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fasiapoisk.com%2Fuploads%2Fcache%2Fproducts%2F1421617184_Nakashima_Kazuki_4-465x600.jpg" alt="Kazuki Nakashima" />
              <p>Kazuki Nakashima</p>
            </div>
            <div className={styles.staffblock}>
              <h3>Director</h3>
              <img src="https://br.web.img3.acsta.net/c_300_300/pictures/20/10/05/18/50/3736079.jpg" alt="Kazuki Nakashima" />
              <p>Hiroyuki Imaishi</p>
            </div>
            <div className={styles.staffblock}>
              <h3>Music</h3>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.mydramalist.com%2FW6zLO_5c.jpg" alt="Kazuki Nakashima" />
              <p>Taku Iwasaki</p>
            </div>
            <div className={styles.staffblock}>
              <h3>Productor</h3>
              <img src="https://www.isme-microbes.org/sites/default/files/images/pictures/Kamagata%20-%20cropped.jpg" alt="Kazuki Nakashima" />
              <p>Eiichi Kamagata</p>
            </div>
            <div className={styles.staffblock}>
              <h3>Studio</h3>
              <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fres.cloudinary.com%2Fteepublic%2Fimage%2Fprivate%2Fs--8Eq2ERVh--%2Ft_Preview%2Fb_rgb%3A000000%2Cc_limit%2Cf_auto%2Ch_630%2Cq_90%2Cw_630%2Fv1565494354%2Fproduction%2Fdesigns%2F5572157_0.jpg" alt="Kazuki Nakashima" />
              <p>Gainax</p>
            </div>
          </div>
          <div className={styles.right_block_graphs}>
            <div className={styles.right_block_graphs_box}>
            <SemicircleGraph percentage={25} color={"#fff"} />
            <h4>Enredo</h4>
            </div>

            <SemicircleGraph percentage={25} color={"#fff"} />
            <SemicircleGraph percentage={25} color={"#fff"} />
            <SemicircleGraph percentage={25} color={"#fff"} />
          </div>
        </section>
      </section>
    </main>
  )
}
