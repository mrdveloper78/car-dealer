import { SiAudi, SiBmw, SiFord, SiHyundai, SiMercedes, SiMitsubishi } from "react-icons/si";
import Allitems from "../../Utils/Allitems";

import avt from "../images/pngwing.com.png";

const colorData = [
    { name: 'White', code: '#FFFFFF' },
    { name: 'Black', code: '#000000' },
    { name: 'Yellow', code: '#FDEE00' },
    { name: 'Red', code: '#7C0902' },
    { name: 'Green', code: '#8DB600' },
    { name: 'Blue', code: '#00B9E8' },
    { name: 'Orange', code: '#FF4F00' },
    { name: 'Violet', code: '#B284BE' },
    { name: 'Purple', code: '#301934' },
    { name: 'Pink', code: '#FF91AF' },
    { name: 'Mauv', code: '#E0B0FF' },
    { name: 'Puce', code: '#A95C68' },
    { name: 'Maroon', code: '#800000' },
    { name: 'All', code: '#F5F5F5' }
];

const brandIcon = [
    { Com: SiBmw ,name:'BMW' },
    { Com: SiMercedes ,name:'Mercedes-Benz' },
    { Com: SiAudi ,name:'Audi' },
    { Com: SiHyundai ,name:'Hyundai' },
    { Com: SiMitsubishi ,name:'Mitsubishi' },
    { Com: SiFord ,name:'Ford' },
    { Com: Allitems ,name:'All' },
]

const sellersData = [
    {
        name:'Milad',
        experience:'',
        phoneNumber:'',
        imgUrl:avt,
        stars:[
            '#FDEE00',
            '#FDEE00',
            '#FDEE00',
            '#FDEE00',
            '#E5E4E2',
        ]
    },

    {
        name:'Mansoor',
        experience:'',
        phoneNumber:'',
        imgUrl:avt,
        stars:[
            '#FDEE00',
            '#FDEE00',
            '#FDEE00',
            '#FDEE00',
            '#E5E4E2',
        ]
    },

    {
        name:'Arash',
        experience:'',
        phoneNumber:'',
        imgUrl:avt,
        stars:[
            '#FDEE00',
            '#FDEE00',
            '#FDEE00',
            '#FDEE00',
            '#E5E4E2',
        ]
    },

    {
        name:'Javad',
        experience:'',
        phoneNumber:'',
        imgUrl:avt,
        stars:[
            '#FDEE00',
            '#FDEE00',
            '#FDEE00',
            '#FDEE00',
            '#E5E4E2',
        ]
    },
    
    {
        name:'Amir',
        experience:'',
        phoneNumber:'',
        imgUrl:avt,
        stars:[
            '#FDEE00',
            '#FDEE00',
            '#FDEE00',
            '#FDEE00',
            '#E5E4E2',
        ]
    },
] 




export { colorData, brandIcon,sellersData };
