import HomeIcon from '@mui/icons-material/Home';
import DiningIcon from '@mui/icons-material/Dining';
import ListIcon from '@mui/icons-material/List';
import InfoIcon from '@mui/icons-material/Info';

export const draw = [
  {
    id: '2',
    path: '/meal',
    name: 'Ofline Dining'
  },
  {
    value: <ListIcon />,
    id: '3',
    path: '/menu',
    name: 'Our Menu'
  },
  {
    value: <InfoIcon />,
    id: '4',
    path: '/about',
    name: 'About'
  },
]



export const destination = [
  {
    id: 1,
    img: '/assets/nainital.jpg',
    title: 'Nainital Lake',
    location: 'Nainital, Uttarakhand',
    description: 'A beautiful freshwater lake surrounded by hills and scenic beauty.'
  },
  {
    id: 2,
    img: '/assets/jaisalmer.jpg',
    title: 'Jaiselmer',
    location: 'Jaisalmer, Rajasthan',
    description: 'Known for its golden sand dunes and the majestic Jaisalmer Fort.'
  },
  {
    id: 3,
    img: '/assets/udeypur.jpg',
    title: 'Udaipur Lake',
    location: 'Udaipur, Rajasthan',
    description: 'Famous for its stunning lakes and palaces, often called the Venice of the East.'
  },
  {
    id: 4,
    img: '/assets/sikkim.jpg',
    title: 'East Sikkim',
    location: 'Sikkim, India',
    description: 'A region known for its breathtaking views of the Himalayas and rich cultural heritage.'
  },
  {
    id: 5,
    img: '/assets/nepal.jpg',
    title: 'North Sikkim',
    location: 'Sikkim, India',
    description: 'Home to beautiful valleys and pristine rivers, a paradise for nature lovers.'
  },
  {
    id: 6,
    img: '/assets/udaypur.jpg',
    title: 'Jaipur Lake',
    location: 'Jaipur, Rajasthan',
    description: 'A serene lake offering a peaceful escape in the Pink City.'
  },
];


export const cards = [
  {
    id: 1,
    image: '/assets/jaiselmer.jpg',
    title: 'Jaiselmer - Rajasthan',
    pickup: 'Ballia',
    stay: '4 Night 5 Days',
    price: {
      train: '7800',
      flight: '17800'
    },
    description: 'Unveil the golden sands of Jaisalmer, where every sunset paints a story of timeless beauty and royal grandeur.',
    include: [
      'Accommodation',
      'Daily Breakfast',
      'Sightseeing',
      'Transportation',
    ],
  },
  {
    id: 2,
    pickup: 'Ballia',
    image: '/assets/rishikesh.jpg',
    price: {
      train: '6999',
      flight: '16999'
    },
    title: 'Rishikesh & Haridwar',
    stay: '2 Night 3 Days',
    description: 'Embark on a soulful journey to Rishikesh and Haridwar, where the Ganges whispers tales of ancient serenity and adventure awaits at every turn.',
    include: [
      'Accommodation',
      'Daily Breakfast',
      'River Rafting',
      'Transportation',
    ],
  },
  {
    id: 3,
    pickup: 'Ballia',
    price: {
      train: "5999",
      flight: "15999"
    },
    image: '/assets/Darjelling.jpg',
    title: 'Darjeeling',
    stay: '3 Night 4 Days',
    description: 'Explore the misty hills of Darjeeling, known for its tea gardens and panoramic views.',
    include: [
      'Accommodation',
      'Daily Breakfast',
      'Toy Train Ride',
      'Transportation',
    ],
  },
  {
    id: 4,
    pickup: 'Ballia',
    price: {
      train: '23999',
      flight: '33999'
    },
    image: '/assets/nepal.jpg',
    title: 'Nepal - Kathmandu',
    stay: '6 Night 7 Days',
    description: 'A serene lake offering a peaceful escape in Nepal and Kathmandu.',
    include: [
      'Accommodation',
      'Daily Breakfast',
      'Cultural Tours',
      'Transportation',
    ],
  },
  {
    id: 5,
    pickup: 'Ballia',
    price: {
      train: '22000',
      flight: '32000'
    },
    image: '/assets/vaishnodevi.jpg',
    title: 'Vaishnodevi & Kashmir',
    stay: '5 Night 6 Days',
    description: 'Experience the magic of Kashmir, where the breathtaking landscapes guide your soul to the revered Vaishno Devi Temple, a place of divine peace and spiritual awakening.',
    include: [
      'Accommodation',
      'Daily Breakfast',
      'Darshan at Vaishno Devi',
      'Transportation',
    ],
  },
  {
    id: 6,
    pickup: 'Ballia',
    price: {
      train: '29999',
      flight: '39999'
    },
    image: '/assets/amarnath.jpeg',
    title: 'Amarnath Yatra',
    stay: '6 Night 7 Days',
    description: 'Embark on the sacred Amarnath Yatra, a pilgrimage that offers a serene and spiritual escape.',
    include: [
      'Accommodation',
      'Daily Breakfast',
      'Helicopter Ride',
      'Transportation',
    ],
  },
  {
    id: 7,
    pickup: 'Ballia',
    price: {
      train: '34999',
      flight: '44999'
    },
    image: '/assets/tamilnadu.jpg',
    title: 'Tamilnadu',
    stay: '3 Night 4 Days',
    description: 'Explore the rich cultural heritage and serene temples of Tamilnadu.',
    include: [
      'Accommodation',
      'Daily Breakfast',
      'Temple Visits',
      'Transportation',
    ],
  },
  {
    id: 8,
    pickup: 'Ballia',
    price: {
      train: '12499',
      flight: '22499'
    },
    image: '/assets/goa.jpg',
    title: 'Goa',
    stay: '4 Night 5 Days',
    description: 'Relax on the pristine beaches of Goa, where every sunset paints the sky in vibrant hues.',
    include: [
      'Accommodation',
      'Daily Breakfast',
      'Beach Activities',
      'Transportation',
    ],
  },
];


