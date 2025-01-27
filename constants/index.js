import React from 'react';

// Data arrays
export const exploreWorlds = [
  {
    id: 'world-1',
    imgUrl: '/planet-01.png',
    title: 'Chillguy',
  },
  {
    id: 'world-2',
    imgUrl: '/planet-02.png',
    title: 'Pepe',
  },
  {
    id: 'world-3',
    imgUrl: '/planet-03.png',
    title: 'Shiba Inu',
  },
  {
    id: 'world-4',
    imgUrl: '/planet-04.png',
    title: 'Doge Coin',
  },
  {
    id: 'world-5',
    imgUrl: '/planet-05.png',
    title: 'Floki',
  },
];

export const startingFeatures = [
  'Find a world that suits you and you want to enter',
  'Enter the world by reading basmalah to be safe',
  'No need to beat around the bush, just stay on the gas and have fun',
];

export const newFeatures = [
  {
    imgUrl: '/vrpano.svg',
    title: 'A new world',
    subtitle: 'we have the latest update with new world for you to try never mind',
  },
  {
    imgUrl: '/headset.svg',
    title: 'More realistic',
    subtitle: 'In the latest update, your eyes are narrow, making the world more realistic than ever',
  },
];

export const insights = [
  {
    imgUrl: '/planet-06.png',
    title: 'The launch of the Metaverse makes Elon Musk ketar-ketir',
    subtitle: 'Magna etiam tempor orci eu lobortis elementum nibh tellus molestie. Diam maecenas sed enim ut sem viverra alique.',
  },
  {
    imgUrl: '/planet-07.png',
    title: '7 tips to easily master the madness of the Metaverse',
    subtitle: 'Vitae congue eu consequat ac felis donec. Et magnis dis parturient montes nascetur ridiculus mus. Convallis tellus id interdum',
  },
  {
    imgUrl: '/planet-08.png',
    title: 'With one platform you can explore the whole world virtually',
    subtitle: 'Quam quisque id diam vel quam elementum. Viverra nam libero justo laoreet sit amet cursus sit. Mauris in aliquam sem',
  },
];

export const socials = [
  {
    name: 'twitter',
    url: 'https://twitter.com',
    imgUrl: '/twitter.svg',
  },
  {
    name: 'linkedin',
    url: 'https://linkedin.com',
    imgUrl: '/linkedin.svg',
  },
  {
    name: 'instagram',
    url: 'https://instagram.com',
    imgUrl: '/instagram.svg',
  },
  {
    name: 'facebook',
    url: 'https://facebook.com',
    imgUrl: '/facebook.svg',
  },
];

// Social Links component
const SocialLinks = () => (
  <div>
    {socials.map((social) => (
      <a href={social.url} key={social.name} target="_blank" rel="noopener noreferrer">
        <img src={social.imgUrl} alt={social.name} style={{ margin: '0 10px' }} />
      </a>
    ))}
  </div>
);

// Main App component
const App = () => (
  <div>
    <h1>Explore Worlds</h1>
    {exploreWorlds.map(world => (
      <div key={world.id}>
        <img src={world.imgUrl} alt={world.title} />
        <h2>{world.title}</h2>
      </div>
    ))}
    <h2>Social Media Links</h2>
    <SocialLinks />
  </div>
);

export default App;
