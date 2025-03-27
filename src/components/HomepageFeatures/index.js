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
          <p>這是一個奇幻與科幻的世界，存在著「人類屬」和其他擁有智能的生物「異獸」</p>
          <p>人類屬擁有超能力「異能力」與兵裝「生鎧」，異獸天生擁有強大能力「異場」和其他遠超人類屬的力量。</p>
          <p>在第二次遠古大戰結束後500餘年，一名古老異獸的殞落讓人類跟異獸的戰力平衡打破。</p>
		  <p>在這之後，異獸的國家「異獸邦聯」與人類生鎧國度「代卡玻」開始了戰爭。</p>
		  <p>在這個關頭，一位普通人「納西瑟斯．歐菲爾」忽然因為不明原因穿越到了此世界，故事便這樣開始了。</p>
		  <p>他並非天選之子，相反，在這個充斥著暴力與不公的世界，他比起一般人類的體能差了不少，還沒有任何的能力。</p>
		  <p>沒辦法穿上任何生鎧，宛若不存在於世界上，只能仰賴從原本世界帶來的化學知識，艱難的去習慣這世界。</p>
		  <p>然而，哪怕是這樣的他也是這世界不可或缺的存在，要如何改變世界，就由玩家自己來決定了。</p>
		  <p>成為破壞世界，反人類的存在。抑或是發明出這世界無法容忍的藥劑，以此發家致富。</p>
		  <p>天使或惡魔，異獸方與人類方，多結局與不同視角將在此顯現。</p>
		  <p>或許有些東西正要原本不在這世界的他，才能破解。</p>
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
