import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const FeatureList = [
  {
    title: '世界觀與設定',
    image: '/img/crazy_battle.jpg',
    link: './docs/settings',
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
          <p>納西瑟斯醒過來時，他遺忘了許多事情，但仍清晰記得此處非他原本的世界。</p>
          <p>剛到這個世界的他，便發現自己被宛若怪物的植物群包圍，還有一些尚在掙扎的生物殘骸依稀可見，情況危急。</p>
		  <p>這時，一名有著鱗片的女性人形出來搭救了他，並告知他一個震撼的事實:這世界不久前就已經被這種植物所吞沒。</p>
		  <p>世界已經變成植物地獄，幾乎所有國家都失去了機能，現在倖存者們只能艱苦的自力更生。</p>
		  <p>女性自稱莎柯特，她現在的目的是找到可以收留她懷中的小女孩『可兒』的倖存者部落。 </p>
		  <p>納西瑟斯別無選擇，只好作為可兒的保姆跟在他們身邊。</p>
		  <p>殊不知，這微不足道的相遇卻是場解救世界的旅程起點，在這絡繹慘綠林中奮戰的開篇。</p>
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
