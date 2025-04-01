import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: '世界觀與設定',
    image: '/img/crazy_battle.jpg',
    link: './docs/intro',
    description: (
      <>
        總之就是世界觀與設定。
      </>
    ),
  },
  {
    title: '劇本試讀',
    image: '/img/myo.png',
    link: './docs/stories',
    description: (
      <>
        收錄已公開的故事片段。
      </>
    ),
  },
  {
    title: '開發日誌',
    image: '/img/myo_chibi.png',
    link: './blog',
    description: (
      <>
        紀錄開發的過程。
      </>
    ),
  },
  /*
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus lets you focus on your docs, and we&apos;ll do the chores. Go
        ahead and move your docs into the <code>docs</code> directory.
      </>
    ),
  },
  {
    title: 'Powered by React',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        Extend or customize your website layout by reusing React. Docusaurus can
        be extended while reusing the same header and footer.
      </>
    ),
  },
  */
];

function Feature({Svg, image, title, link, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
          <a href={link}>
          {
            Image({Svg, image, title})
          }
          </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{/*description*/}</p>
      </div>
    </div>
  );
}

function Image({ Svg, image, title }) { 
  return (
      image ? (
        <img src={useBaseUrl(image)} className={styles.featureImage} alt={title} />
    ) : Svg ? (
      <Svg className={styles.featureSvg} role="img" />
    ) : null 
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--left">
          <p>納西瑟斯．歐菲爾醒過來時，他遺忘了許多事情，但仍清晰記得此處非他原本的世界。</p>
          <p>剛到這個世界的他，便在各種陰錯陽差下被捲入了最強級別的戰鬥中。</p>
		  <p>戰場宛如天災中心，納西瑟斯除了瞠目結舌外甚麼都做不了，只能旁觀直至最後。</p>
		  <p>然後，逃出戰場的他被帶回了人類屬的國度，為了找出自己為何被傳送過來，以及記憶喪失的原因，他必須先取得足以在這世界立足的東西。</p>
		  <p>他沒辦法使用這世界人類屬的任何能力，宛若不存在於世界上，只能仰賴從原本世界的化學知識，艱難的去習慣這世界。</p>
		  <p>包含著開發化學資源，戰鬥，解謎，懸疑的圓舞曲正式起舞。 </p>
		</div>
        <div style={{marginBottom: "50px"}}></div>
        <div className="row" class="row mt-1">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
