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
  siteTitle: '冯瑞恒的运动轨迹',
  siteUrl: 'https://sport.frh.life',
  logo: 'https://pic.imgdb.cn/item/6419d1b1a682492fcc0e5c1a.jpg',
  description: 'Personal site and blog',
  keywords: 'workouts, running, cycling, riding, roadtrip, hiking, swimming',
  navLinks: [
    {
      name: '个人链接',
      url: 'http://link.frh.life/',
    },
  ],
};

export default data;
