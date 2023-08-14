import green from '../assets/produtores/green.png';
import grow from '../assets/produtores/grow.png';
import jennyjack from '../assets/produtores/jenny-jack.png';
import potager from '../assets/produtores/potager.png';
import salad from '../assets/produtores/salad.png';

const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

const producers = {
    title: 'Produtores',
    list: [
        {
            name: 'Green',
            image: green,
            distance: `${generateNumber(1, 500)}`,
            stars: generateNumber(1, 5),
        },
        {
            name: 'Grow',
            image: grow,
            distance: `${generateNumber(1, 500)}`,
            stars: generateNumber(1, 5),
        },
        {
            name: 'Jenny Jack',
            image: jennyjack,
            distance: `${generateNumber(1, 500)}`,
            stars: generateNumber(1, 5),
        },
        {
            name: 'Potager',
            image: potager,
            distance: `${generateNumber(1, 500)}`,
            stars: generateNumber(1, 5),
        },
        {
            name: 'Salad',
            image: salad,
            distance: `${generateNumber(1, 500)}`,
            stars: generateNumber(1, 5),
        },
    ],
};

export default producers;