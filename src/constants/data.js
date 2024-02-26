import images from './images';

const wines = [
  {
    title: 'Axumit Semi-sweet red Wine',
    price: '$8',
    tags: 'IE | Bottle',
  },
  {
    title: 'Kamila-Semi sweet rose wine',
    price: '$7',
    tags: 'AU | Bottle',
  },
  {
    title: 'Gouder',
    price: '$6',
    tags: 'AU | Bottle',
  },
  {
    title: 'Red Wine',
    price: '$5',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Gebeta wine',
    price: '$4.5',
    tags: 'CA | 750 ml',
  },
  
];

const cocktails = [
  {
    title: 'Doro-wet',
    price: '$18',
    tags: 'Ethiopian traditional food',
  },
  {
    title: "Kitefo",
    price: '$16',
    tags: 'Ethiopian traditional food',
  },
  {
    title: 'Gored gored',
    price: '$14',
    tags: 'Ethiopian traditional food',
  },
  {
    title: 'Tibs',
    price: '$12',
    tags: 'Ethiopian traditional food',
  },
  {
    title: 'Gomen',
    price: '$10',
    tags: 'Ethiopian traditional food',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Bib Gourmand',
    subtitle: 'Awarded by the Michelin Guide .',
  },
  {
    imgUrl: images.award03,
    title: 'Rising Star',
    subtitle: 'Awarded by Recognition Committee.',
  },
  {
    imgUrl: images.award02,
    title: 'AA Hospitality',
    subtitle: 'Awarded by Corporate office in Bengaluru.',
  },
  {
    imgUrl: images.award05,
    title: 'Outstanding Chef',
    subtitle: 'Awareded by placement International.',
  },
];

export default { wines, cocktails, awards };
