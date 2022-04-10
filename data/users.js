export const USERS = [
  {
    user: "mario_party",
    image:
      "https://www.imore.com/sites/imore.com/files/styles/xlarge/public/field/image/2021/03/mario-with-toads-behind-him.jpg",
  },
  {
    user: "luigis_mansion",
    image:
      "https://a1cf74336522e87f135f-2f21ace9a6cf0052456644b80fa06d4f.ssl.cf2.rackcdn.com/images/characters/large/800/Luigi.Super-Mario-Bros.webp",
  },
  {
    user: "toadsworthzz",
    image:
      "https://png.pngitem.com/pimgs/s/97-971532_sms-toadsworth-artwork-super-mario-old-toad-hd.png",
  },
  {
    user: "princess_peach_",
    image:
      "https://www.looper.com/img/gallery/the-real-reason-mario-and-peach-will-never-work-as-a-couple/l-intro-1609872536.jpg",
  },
  {
    user: "bowsers_castle",
    image: "https://images.nintendolife.com/7a14e823af270/1280x720.jpg",
  },
  {
    user: "bowser_junior",
    image: "https://img.bricklink.com/ItemImage/ML/mar0003.png",
  },
  {
    user: "yoshi_run_man",
    image:
      "https://i.kym-cdn.com/entries/icons/original/000/025/999/Screen_Shot_2018-04-24_at_1.33.44_PM.png",
  },
  {
    user: "Rosalina",
    image: "https://i.pinimg.com/originals/07/d3/a4/07d3a4ef92fdbda3d696aad52ac5b1fa.jpg",
  },
];

export const POSTS = [
  {
    image_url:
      "https://www.gamespot.com/a/uploads/scale_landscape/1578/15789366/3546008-3070656-ms.jpg",
    user: USERS[0].user,
    likes: 1457,
    caption:
      "It's been too long, my friend! Gotta hit the karts soon again @sonic_gotta_go_fast",
    profile_picture: USERS[0].image,
    comments: [
      {
        user: "sonic_gotta_go_fast",
        comment:
          "for sure! Can't let you take the W every time. But, we ALL know how it'd go on foot!!!",
      },
      {
        user: USERS[0].user,
        comment: "@sonic_gotta_go_fast We ain't here for that...but it'd be me 💨🏁",
      },
    ],
  },
  {
    image_url:
      "https://www.consolecreatures.com/wp-content/uploads/2019/01/bowsette.jpg",
    user: USERS[4].user,
    likes: 3034,
    caption:
      "What a wonderful weekend this was!!! Got hitched!!!!",
    profile_picture: USERS[4].image,
    comments: [
      {
        user: USERS[3].user,
        comment:
          "Literally, I was kidnapped.",
      },
      {
        user: USERS[0].user,
        comment: "Dude I'm so happy for you guys!!!",
      },
    ],
  },
];
