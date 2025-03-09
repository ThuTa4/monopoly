export const monoData: {
  id: number;
  type: string;
  name: string;
  color?: string;
  price?: number;
  rent?: number[];
  earn?: number;
  pay?: number;
  cityImage: string;
}[] = [
  {
    id: 1,
    type: "special",
    name: "GO",
    earn: 200,
    cityImage:
      "https://miro.medium.com/v2/resize:fit:1400/1*iNZN-Dw6q4sfAPsJEo_suQ.png",
    color: "#FBDF10",
  },
  {
    id: 2,
    type: "property",
    name: "England",
    color: "#1d4ed8",
    price: 400,
    rent: [50, 200, 600, 1400, 1700, 2000],
    cityImage:
      "https://dooktravels.s3.ap-south-1.amazonaws.com/com/poi/66ab881fb00ac.webp",
  },
  {
    id: 3,
    type: "property",
    name: "France",
    color: "#1d4ed8",
    price: 350,
    rent: [35, 175, 500, 1100, 1300, 1500],
    cityImage:
      "https://th-thumbnailer.cdn-si-edu.com/S8L2tWX_zuxQQQXIVEK4EMGYCGo=/1000x750/filters:no_upscale()/https://tf-cmsv2-smithsonianmag-media.s3.amazonaws.com/filer/db/d6/dbd616d4-f52c-43cb-a9c2-4f77a5dcb2d3/eiffel-tower-night.jpg",
  },
  {
    id: 4,
    type: "property",
    name: "Spain",
    color: "#1d4ed8",
    price: 350,
    rent: [35, 175, 500, 1100, 1300, 1500],
    cityImage:
      "https://www.cuddlynest.com/blog/wp-content/uploads/2021/07/sagrada-familia-top-spain-tourist-attractions-1030x713.jpg",
  },
  {
    id: 5,
    type: "chance",
    name: "Chance",
    cityImage: "../image/placeholder/question-mark-icon.png",
    color: "#ef4444",
  },
  {
    id: 6,
    type: "tourismIndustry",
    name: "car companies",
    color: "#09090b",
    price: 200,
    rent: [25, 50, 100, 200],
    cityImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQSteeGP86VoHPh4GEiRV8Xn0IDcFupRg6nDshypWoUwsRFrrUP8P4rhRfqn_NaGa7hw8&usqp=CAU",
  },
  {
    id: 7,
    type: "chest",
    name: "Community Chest",
    cityImage: "../image/placeholder/exclamation-mark-removebg.png",
    color: "#22c55e",
  },
  {
    id: 8,
    type: "property",
    name: "Japan",
    color: "#9333ea",
    price: 320,
    rent: [28, 150, 450, 1000, 1200, 1400],
    cityImage:
      "https://media.istockphoto.com/id/677209164/photo/fuji-mountain-in-spring.jpg?s=612x612&w=0&k=20&c=vkLhf0w52ijbmKzkhj20wBdxrQ_v6NF1A2kmFT6NFyc=",
  },
  {
    id: 9,
    type: "property",
    name: "India",
    color: "#9333ea",
    price: 300,
    rent: [26, 130, 390, 900, 1100, 1275],
    cityImage:
      "https://www.planetware.com/photos-large/IND/india-top-attractions-taj-mahal.jpg",
  },
  {
    id: 10,
    type: "property",
    name: "China",
    color: "#9333ea",
    price: 300,
    rent: [26, 130, 390, 900, 1100, 1275],
    cityImage:
      "https://images.chinahighlights.com/allpicture/2014/07/a75e71599fcc40d1b72fb2b8_cut_800x534_349.jpg",
  },
  {
    id: 11,
    type: "special",
    name: "Go To Jail",
    cityImage: "../image/placeholder/go-to-jail.png",
    color: "#d97706",
  },
  {
    id: 12,
    type: "media",
    name: "Satellite Communications",
    price: 150,
    cityImage: "../image/placeholder/satellite-communication.png",
    color: "#737373",
  },
  {
    id: 13,
    type: "property",
    name: "Russia",
    color: "#84cc16",
    price: 260,
    rent: [22, 110, 330, 800, 975, 1150],
    cityImage:
      "https://upload.wikimedia.org/wikipedia/commons/5/5b/1_Saint_Basils_Cathedral.jpg",
  },
  {
    id: 14,
    type: "property",
    name: "Italy",
    color: "#84cc16",
    price: 260,
    rent: [22, 110, 330, 800, 975, 1150],
    cityImage:
      "https://www.earthtrekkers.com/wp-content/uploads/2023/02/Leaning-Tower-of-Pisa.jpg.webp",
  },
  {
    id: 15,
    type: "property",
    name: "Germany",
    color: "#84cc16",
    price: 280,
    rent: [24, 120, 360, 850, 1025, 1200],
    cityImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEgv9wk22RxuMBYYe0G0bpCWsYtDH_RdHfOg&s",
  },
  {
    id: 16,
    type: "tourismIndustry",
    name: "Air ports",
    color: "#09090b",
    price: 200,
    rent: [25, 50, 100, 200],
    cityImage:
      "https://images.ladbible.com/resize?type=webp&quality=70&width=3840&fit=contain&gravity=auto&url=https://images.ladbiblegroup.com/v3/assets/bltb5d92757ac1ee045/blte6ec2f1ede47a55c/677bad1b62492c6ff5846159/scientists-say-alarming-reason-why-turbulence-is-increasing-at-a-drastic-rate.jpg%3Fcrop%3D562%2C562%2Cx619%2Cy50",
  },
  {
    id: 17,
    type: "chance",
    name: "Chance",
    cityImage: "../image/placeholder/question-mark-icon.png",
    color: "#ef4444",
  },
  {
    id: 18,
    type: "property",
    name: "Brazil",
    color: "#f97316",
    price: 240,
    rent: [20, 100, 300, 750, 925, 1100],
    cityImage:
      "https://cdn.destguides.com/files/store/itinerarystop/51452/background_image/jpeg_large_202112291737-5cc9f8bb4e2f983d83cf7bb4f14e7b76.jpeg",
  },

  {
    id: 19,
    type: "property",
    name: "Colombia",
    color: "#f97316",
    price: 220,
    rent: [18, 90, 250, 700, 875, 1050],
    cityImage:
      "https://destinationlesstravel.com/wp-content/uploads/2018/06/DSC_0868-2.jpg",
  },
  {
    id: 20,
    type: "property",
    name: "Argentina",
    color: "#f97316",
    price: 220,
    rent: [18, 90, 250, 700, 875, 1050],
    cityImage:
      "https://www.travelblissful.com/wp-content/uploads/2017/08/ARGENTINA-TRAVEL-GUIDE.jpg",
  },
  {
    id: 21,
    type: "special",
    name: "Fee Parking",
    cityImage: "../image/placeholder/fee-parking.png",
    color: "#737373",
  },
  {
    id: 22,
    type: "chest",
    name: "Community Chest",
    cityImage: "../image/placeholder/exclamation-mark-removebg.png",
    color: "#22c55e",
  },
  {
    id: 23,
    type: "property",
    name: "Canada",
    color: "#991b1b",
    price: 200,
    rent: [14, 70, 200, 550, 750, 950],
    cityImage:
      "https://webflow-amber-prod.gumlet.io/620e4101b2ce12a1a6bff0e8/64f0ba7690d6e7fe1e73a3ac_Canada%20(1).jpg",
  },

  {
    id: 24,
    type: "property",
    name: "Mexico",
    color: "#991b1b",
    price: 180,
    rent: [14, 70, 200, 550, 750, 950],
    cityImage:
      "https://cdn.britannica.com/60/92960-050-327CF926/pyramid-Mayan-Chichen-Itza-Mex.jpg",
  },
  {
    id: 25,
    type: "property",
    name: "United States",
    color: "#991b1b",
    price: 180,
    rent: [16, 80, 220, 600, 800, 1000],
    cityImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-NnNZfZoHuAxqfG5lg_ylpTeRMZDDccS_xIGysXm9DEQUKNnXv4f1WKtZjiG2QTWN58g&usqp=CAU",
  },
  {
    id: 26,
    type: "tourismIndustry",
    name: "Railroad",
    price: 200,
    rent: [25, 50, 100, 200],
    cityImage:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXVS_zEJB9pJ9WRRJJCtlDBa53kEpCJz9e7Q&s",
    color: "#09090b",
  },

  {
    id: 27,
    type: "utility",
    name: "News TV Station",
    price: 150,
    cityImage: "../image/placeholder/tv-station.png",
    color: "#737373",
  },
  {
    id: 28,
    type: "property",
    name: "Morocco",
    color: "#422006",
    price: 160,
    rent: [12, 60, 180, 500, 700, 900],
    cityImage:
      "https://lh5.googleusercontent.com/p/AF1QipNS1k5_YUF23oz8XCWZlwUtITmhvJU_rw50JY4=w540-h312-n-k-no",
  },
  {
    id: 29,
    type: "property",
    name: "South Africa",
    color: "#422006",
    price: 140,
    rent: [10, 50, 150, 450, 625, 750],
    cityImage:
      "data:image/jpeg;base64,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",
  },
  {
    id: 30,
    type: "property",
    name: "Egypt",
    color: "#422006",
    price: 140,
    rent: [10, 50, 150, 450, 625, 750],
    cityImage:
      "https://img.freepik.com/premium-photo/great-sphinx-pyramid_219717-5429.jpg?w=360",
  },
  {
    id: 31,
    type: "special",
    name: "Jail",
    cityImage: "../image/placeholder/jail.png",
    color: "#d97706",
  },
  {
    id: 32,
    type: "property",
    name: "Singapore",
    color: "#06b6d4",
    price: 120,
    rent: [8, 40, 100, 300, 450, 600],
    cityImage:
      "https://as1.ftcdn.net/jpg/03/14/55/34/1000_F_314553478_QI0GPHmjZnJU20yuSo9ksl3aIQQNQgWh.jpg",
  },
  {
    id: 33,
    type: "property",
    name: "Malaysia",
    color: "#06b6d4",
    price: 100,
    rent: [6, 30, 90, 270, 400, 550],
    cityImage:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/06/71/b0/52.jpg",
  },
  {
    id: 34,
    type: "property",
    name: "Myanmar (Burma)",
    color: "#06b6d4",
    price: 100,
    rent: [6, 30, 90, 270, 400, 550],
    cityImage:
      "https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTKbWZZ3j598QYEGI7Qi8I8kedyvcqPLKT9rS9SOYS7t4UE15c1F1FzdrSwOQGxOuWZILGGa8dmCnUgJbtccs_QaYH-jVdGBv_5l5xTYw",
  },
  {
    id: 35,
    type: "chance",
    name: "Chance",
    cityImage: "../image/placeholder/question-mark-icon.png",
    color: "#ef4444",
  },
  {
    id: 36,
    type: "tourismIndustry",
    name: "Marine companies",
    color: "#09090b",
    price: 200,
    rent: [25, 50, 100, 200],
    cityImage:
      "https://www.marineinsight.com/wp-content/uploads/2021/07/maersk-ship-1.png",
  },
  {
    id: 37,
    type: "tax",
    name: "Income Tax",
    pay: 200,
    cityImage: "https://cdn-icons-png.flaticon.com/512/5571/5571524.png",
    color: "#713f12",
  },
  {
    id: 38,
    type: "chest",
    name: "Community Chest",
    cityImage: "../image/placeholder/exclamation-mark-removebg.png",
    color: "#22c55e",
  },
  {
    id: 39,
    type: "property",
    name: "Australia",
    color: "#d946ef",
    price: 60,
    rent: [4, 20, 60, 180, 320, 450],
    cityImage:
      "https://annaeverywhere.com/wp-content/uploads/2017/04/Circular-Quay_Charlotte-Karp.jpg",
  },
  {
    id: 40,
    type: "property",
    name: "New Zealand",
    color: "#d946ef",
    price: 60,
    rent: [2, 10, 30, 90, 160, 250],
    cityImage:
      "https://www.worldofwanderlust.com/wp-content/uploads/2018/07/wanaka-2-683x1024.jpg",
  },
];
