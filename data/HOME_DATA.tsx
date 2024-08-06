import featuredImg from "@/images/tourist-8183867_1280.png";
import alien from "@/images/alien.png";
import cat from "@/images/cat.png";
import fish from "@/images/fish.png";
import univers from "@/images/univers.png";
import cobra from "@/images/cobra_1362523.png";

interface PostProps {
  img: {};
  title: string;
  date: string;
}

const featuredPost: PostProps = {
  img: featuredImg,
  title: "Exploring the Tourist Spots",
  date: "July 29, 2024",
};

const postsList: PostProps[] = [
  {
    img: alien,
    title: "Alien Encounter",
    date: "August 1, 2024",
  },
  {
    img: cat,
    title: "Cats and Their Mysteries",
    date: "August 5, 2024",
  },
  {
    img: fish,
    title: "Underwater World",
    date: "August 10, 2024",
  },
  {
    img: univers,
    title: "Exploring the Universe",
    date: "September 29, 2024",
  },
  {
    img: cobra,
    title: "The World of Cobras",
    date: "October 15, 2024",
  },
];

export default featuredPost;
export { postsList };
