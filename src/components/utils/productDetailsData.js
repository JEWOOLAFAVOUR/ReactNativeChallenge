import { images } from "../../constants";

export const sliderData = [
    { img: 'https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
    { img: 'https://images.pexels.com/photos/157675/fashion-men-s-individuality-black-and-white-157675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
];

export const productDetails = {
    title: 'Clean handbag for your simple walk.',
    price: '200,000',
    createdAt: '2hrs ago',
    seller: {
        avatar: images.image1,
        username: "username",
        verified: true,
        location: "Federal University of Technology Minna",
    },
    description: "The BasicWidget 2000 is a product that's, well, basic. If you're looking for exictement, innovation, or any form of satisfaction, you might want to look elsewhere. But if you're into square, gray things with buttons that may or may not function, then the BasiciWidget 2000 could be the underwhelming choice you've been waiting for. Or not",
}