import mockImage from '../../../../backend/src/assets/imgs/redBeetSalad.jpeg';
import mockImage2 from '../../../../backend/src/assets/imgs/boiledEggs.jpeg';
import mockImage3 from '../../../../backend/src/assets/imgs/scrambledEggs.jpeg';

const mockData = {
  user: {
    recipes: [
      {
        title: 'Eggs On Toast',
        img: mockImage,
        favourite: false,
        versions: [
          {
            cookingTime: 25,
            servingSize: 4,

            directions: ['a string', 'is a string', 'is a string'],
            ingredients: ['a carrot', 'egg', 'another egg'],
            notes: ['a string', 'is a string', 'is a string'],
          },
        ],
      },
      {
        title: 'Boiled Eggs',
        img: mockImage2,
        favourite: true,
      },
      {
        title: 'Scrambled Eggs',
        img: mockImage3,
        favourite: false,
      },
    ],
  },
};

export default mockData;
