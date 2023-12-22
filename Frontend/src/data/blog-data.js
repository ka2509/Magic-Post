import blog_img from "@assets/img/blog/blog-page-img-3.jpg";
import blog_img_2 from "@assets/img/blog/blog-page-img-1.jpg";
import blog_img_3 from "@assets/img/blog/blog-page-img-2.jpg";
import imgOne from "@assets/img/blog/b-1.jpg";
import imgTwo from "@assets/img/blog/b-2.jpg";
import imgThere from "@assets/img/blog/b-3.jpg";

//col-2 page img
import imageOne from '@assets/img/blog/dp-blog-12.jpg';
import imageTwo from '@assets/img/blog/dp-blog-08.jpg';
import imageThere from '@assets/img/blog/dp-blog-11.jpg';
import imageFour from '@assets/img/blog/dp-blog-07.jpg'; 
import imageFive from '@assets/img/blog/train-transport-02.jpg'; 
import imageSix from '@assets/img/blog/blog-trin.jpg'; 

const blog_data = [
  //home-2 data
  {
    id: 1,
    author: "Ramazzotti",
    image: blog_img_2,
    date: "20",
    month: "JUN",
    comments: 12,
    commentIcon: "fas fa-comments",
    userIcon: "fas fa-user",
    title: "Transportation is The Real Time Business",
    description:
      "From finance, retail, and travel, to social media, cyber security, adtech, and more, market leaders.",
  },
  {
    id: 2,
    author: "Hunhu La.",
    image: blog_img,
    date: "12",
    month: "mar",
    comments: 5,
    commentIcon: "fas fa-comments",
    userIcon: "fas fa-user",
    title: "This schematic approach was later adopted",
    description:
      "From finance, retail, and travel, to social media, cyber security, adtech, and more, market leaders.",
  },
  {
    id: 3,
    author: "Shanky",
    image: blog_img_3,
    date: "22",
    month: "mar",
    comments: 16,
    commentIcon: "fas fa-comments",
    userIcon: "fas fa-user",
    title: "Improving Your Team Members Communication In",
    description:
      "From finance, retail, and travel, to social media, cyber security, adtech, and more, market leaders.",
  },

  //blog post data
  {
    id: 4,
    title:
      "Transportation is The Real Time Business Generator That Needs to Be cool.",
    image: blog_img_2,
    userIcon: "fas fa-user",
    dateIcon: "fas fa-alarm-clock",
    commentIcon: "fas fa-comments",
    postBox: "postbox__item format-image mb-70",
    postboxThumb: "postbox__thumb w-img mb-35",
    author: "Hilixer h.",
    date: "Jan 16,2022",
    comments: 0,
    videoPlay: false,
    description:
      "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry.",
  },

  {
    id: 5,
    title:
      "This schematic approach was later adopted for many transportation maps.",
    author: "Rosalina d.",
    userIcon: "fas fa-user",
    dateIcon: "fas fa-alarm-clock",
    commentIcon: "fas fa-comments",
    postBox: "postbox__item format-image mb-70",
    postboxThumb: "postbox__thumb postbox-active w-img p-relative mb-35",
    images: [
      { id: 1, image: blog_img },
      { id: 2, image: blog_img_2 },
      { id: 3, image: blog_img_3 },
    ],
    date: "Feb 10,2022",
    comments: 7,
    videoPlay: false,
    description:
      "Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car boot squiffy loo, blimey arse over tit it’s your round cup of char horse play chimney pot old. Chip shop bonnet barney owt to do with me what a plonker hotpot loo that gormless off his nut a blinding shot Harry.",
  },
  {
    id: 6,
    title:
      "Four Ways to Fullfill Your Task For Makes Parents Happy and Healthy",
    image: blog_img_3,
    author: "Alonso d.",
    userIcon: "fas fa-user",
    dateIcon: "fas fa-alarm-clock",
    commentIcon: "fas fa-comments",
    playIcon: "fas fa-play",
    postBox: "postbox__item format-video mb-70",
    postboxThumb: "postbox__thumb postbox__video p-relative w-img mb-35",
    date: "Mar 05,2022",
    comments: 22,
    videoPlay: true,
    description:
      'Compellingly exploit B2B vortals with emerging total linkage. Appropriately pursue strategic leadership whe intermandated ideas. Proactively revolutionize interoperable"outside the box" thinking with fully researched innovation. Dramatically facilitate exceptional architectures and bricks-and-clicks data. Progressively genera extensible e-services for.',
  },

  //home data
  {
    id: 7,
    title: "Global provider products for everyone",
    date: "05",
    image: imgOne,
    month: "nov",
    author: "alonso d.",
    comments: 18,
  },
  {
    id: 8,
    title: "In promotion advertising testimonial",
    image: imgTwo,
    date: "10",
    month: "feb",
    author: "alonso d.",
    comments: 18,
  },
  {
    id: 9,
    title: "Logistics seeks to be a premier, profitable",
    image: imgThere,
    date: "13",
    month: "apr",
    author: "Marcos A.",
    comments: 18,
  },
  //home 3 data
  {
    id: 10,
    author: "Marcos A.",
    image: blog_img_2,
    date: "20",
    month: "JUN",
    comments: 14,
    commentIcon: "fas fa-comments",
    userIcon: "fas fa-user",
    title: "Transportation is The Real Time Business",
    description:
      "From finance, retail, and travel, to social media, cyber security, adtech, and more, market leaders are leverag ing web data to maintain their transt",
  },
  {
    id: 11,
    author: "Blaine H.",
    image: blog_img,
    date: "15",
    month: "JUN",
    comments: 18,
    commentIcon: "fas fa-comments",
    userIcon: "fas fa-user",
    title: "This schematic approach was later adopted",
    description:
      "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over",
  },
  {
    id: 12,
    author: "Alonso d.",
    image: blog_img_3,
    date: "10",
    month: "JUN",
    comments: 20,
    commentIcon: "fas fa-comments",
    userIcon: "fas fa-user",
    title: "Improving Your Team Members Communication In",
    description:
      "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by.",
  },
  //blog sidebar data
  {
    id: 13,
    image: imgOne,
    title: "Don't Underestimate Tree for Medicine",
    date: "4 March. 2022 ",
    author: "Alonso d.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 20,
  },
  {
    id: 14,
    image: imgTwo,
    title: "Equipping Researchers in the Developing World",
    date: "12 February. 2022 ",
    author: "Marcos A.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 20,
  },
  {
    id: 15,
    image: imgThere,
    title: "Role of Genetics in treating Heigh-grade glioma",
    date: "14 January. 2022 ",
    author: "Blaine H.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 20,
  },
  //blog-3-col page data
  {
    id: 16,
    image: imageOne,
    title: "Global turnkey logistics and",
    description:'Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car',
    date: "15 January. 2022 ",
    author: "Blaine H.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 2,
  },
  {
    id: 17,
    image: imageTwo,
    title: "Web Development Reading List",
    description:'Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car',
    date: "19 January. 2022 ",
    author: "Marcos A.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 5,
  },
  {
    id: 18,
    image: imageThere,
    title: "Taming Advanced Color Pa",
    description:'Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car',
    date: "12 June. 2022 ",
    author: "Alonso d.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 0,
  },
  {
    id: 19,
    image: imageFour,
    title: "How To Protect Your",
    description:'Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car',
    date: "14 January. 2022 ",
    author: "Rosalina d.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 9,
  },
  {
    id: 20,
    image: blog_img,
    title: "Transportation is The Real",
    description:'Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car',
    date: "14 January. 2022 ",
    author: "Ramazzotti d..",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 10,
  },
  {
    id: 21,
    image: blog_img_2,
    title: "This schematic approach was",
    description:'Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car',
    date: "14 January. 2022 ",
    author: "Hunhu La.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 3,
  },
  {
    id: 22,
    image: imageFive,
    title: "Improving Your Team Members",
    description:'Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car',
    date: "14 January. 2022 ",
    author: "Shanky d.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 0,
  },
  {
    id: 23,
    image: imageSix,
    title: "Four Ways to Fullfill",
    description:'Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car',
    date: "14 January. 2022 ",
    author: "Blaine H.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 1 ,
  },
  {
    id: 24,
    image: blog_img_2,
    title: "Things To Keep In",
    description:'Nancy boy Charles down the pub get stuffed mate easy peasy brown bread car',
    date: "14 January. 2022 ",
    author: "Hilixer h.",
    userIcon: "fas fa-user",
    commentIcon: "fas fa-comments",
    comments: 0 ,
  },
];

export default blog_data;
