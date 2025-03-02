import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: '世界觀與設定',
    image: '/img/crazy_battle.jpg',
    description: (
      <>
        總之就是世界觀與設定。
      </>
    ),
  },
  {
    title: '劇本試讀',
    image: '/img/myo.png',
    description: (
      <>
        收錄已公開的故事片段。
      </>
    ),
  },
  {
    title: '開發日誌',
    image: '/img/myo_chibi.png',
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

function Feature({Svg, image, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        {
          image ? (
            <img src={useBaseUrl(image)} className={styles.featureImage} alt={title} />
        ) : Svg ? (
          <Svg className={styles.featureSvg} role="img" />
        ) : null }
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{/*description*/}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="text--left">
          <p>這是一個奇幻與科幻的世界。人類擁有異能與機械，異獸天生擁有強大能力和肉體，雙方無止盡的鬥爭著。</p>
          <p>在遙遠的過去曾發生過讓整個世界動盪不安的兩次大戰，現在是第二次遠古大戰結束後快600年。在相對平穩的數百年後，一名古老異獸的殞落讓人跟異獸的戰力平衡打破，世界再度陷入戰亂。</p>
          <p>在這個關頭，忽然一位普通人「納西瑟斯．歐菲爾」因為不明能力與原因穿越到了此世界，故事便這樣開始了。他不知道的是，他所經歷的故事在近兩年後，會演變成牽扯了整個世界絕大多數勢力的重大事件「代卡波事變」。</p>
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
