interface ISiteMetadataResult {
  siteTitle: string;
  siteUrl: string;
  description: string;
  keywords: string;
  logo: string;
  navLinks: {
    name: string;
    url: string;
  }[];
}

const data: ISiteMetadataResult = {
  siteTitle: '叔桐宇的运动轨迹',
  siteUrl: 'http://shugoal.github.io/wk-shu/',
  logo: 'https://img2.imgtp.com/2024/04/12/z9Yr3p57.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: '个人链接',
      url: 'https://space.bilibili.com/12801287',
    },
  ],
};

export default data;
