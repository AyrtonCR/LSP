db = new Mongo().getDB("lsp");

db.forecasts.createIndex("fc", { unique: false });
db.forums.createIndex("fm", { unique: false });
db.surfboards.createIndex("sbd", { unique: false });
db.surfbreaks.createIndex("sbk", { unique: false });

db.forecasts.insert([
  {
    forecasts_name: "New Brighton Beach",
    forecasts_image:
      "https://www.nzsurfjournal.com/wp-content/uploads/2020/03/20180920_Light_0309.jpg",
    forecasts_info_1:
      "https://magicseaweed.com/New-Brighton-Beach-Surf-Report/114/",
    forecasts_info_2:
      "https://www.surf-forecast.com/breaks/New-Brighton-Beach/forecasts/latest",
    forecasts_cam_1:
      "https://www.surfline.com/surf-report/new-brighton/584204204e65fad6a770967d?camId=618dc0b3285443cca6282eeb",
    forecasts_cam_2: "http://www.waimairisurf.org.nz/webcam4",
  },
  {
    forecasts_name: "Sumner Beach",
    forecasts_image:
      "https://www.nzsurfjournal.com/wp-content/uploads/2019/09/chris_malone__29F7252.jpg",
    forecasts_info_1: "https://magicseaweed.com/Scarborough-Surf-Report/6867/",
    forecasts_info_2:
      "https://www.surf-forecast.com/breaks/Scarborough_1/forecasts/latest/six_day",
    forecasts_cam_1: "https://sumnersurf.nz/",
    forecasts_cam_2: "http://www.surfcam.co.nz/",
  },
  {
    forecasts_name: "Taylors Mistake Beach",
    forecasts_image:
      "https://assets.bonappetit.com/photos/57d6cddbc204478524d87354/master/w_1200,c_limit/new-zealand-surfing.jpg",
    forecasts_info_1:
      "https://magicseaweed.com/Taylors-Mistake-Surf-Report/7131/",
    forecasts_info_2:
      "https://www.surf-forecast.com/breaks/Taylors-Mistake/forecasts/latest",
    forecasts_cam_1: "https://www.taylorssurf.co.nz/",
    forecasts_cam_2: "",
  },
  {
    forecasts_name: "Waikuku Beach",
    forecasts_image:
      "https://img.theculturetrip.com/1440x807/smart/wp-content/uploads/2018/07/wave-1246560_1280.jpg",
    forecasts_info_1: "https://magicseaweed.com/Waikuku-Surf-Report/6884/",
    forecasts_info_2:
      "https://www.surf-forecast.com/breaks/Waikuku-Beach/forecasts/latest/six_day",
    forecasts_cam_1: "https://sumnersurf.nz/",
    forecasts_cam_2: "http://www.surfcam.co.nz/",
  },
  {
    forecasts_name: "Amberly Beach",
    forecasts_image:
      "https://i0.wp.com/beachmeter.com/wp-content/uploads/2018/09/Kahutara-sunset-surfing-new-zealand.jpg?resize=670%2C414",
    forecasts_info_1:
      "https://magicseaweed.com/Amberley-Beach-Surf-Report/6876/",
    forecasts_info_2:
      "https://www.surf-forecast.com/breaks/Amberley-Beach/forecasts/latest/six_day",
    forecasts_cam_1: "",
    forecasts_cam_2: "",
  },
  {
    forecasts_name: "Magnet Bay",
    forecasts_image:
      "https://i.pinimg.com/originals/6d/76/2a/6d762a0a421a8021413bcf86004f5195.jpg",
    forecasts_info_1: "https://magicseaweed.com/Magnet-Bay-Surf-Report/4075/",
    forecasts_info_2:
      "https://www.surf-forecast.com/breaks/Magnet-Bay/forecasts/latest/six_day",
    forecasts_cam_1: "",
    forecasts_cam_2: "",
  },
]);
db.forums.insert([
  {
    forum_image:
      "https://res.cloudinary.com/allamerican/image/fetch/t_face_s270/https://speakerdata2.s3.amazonaws.com/photo/image/884089/SteveHarvey_Headshot.png",
    forum_acc_name: "Steve Harvey",
    forum_acc_message_time: "08:24",
    forum_acc_message:
      "Wow its pumping at New Brighton beach this morning, 6ft offshore and clean!",
  },
  {
    forum_image:
      "https://investorshub.advfn.com/uicon/241482.png?cb=636168279154670000",
    forum_acc_name: "Dr. Evil",
    forum_acc_message_time: "13:42",
    forum_acc_message:
      "Flat as a pancake at Sumner this arvo, swell might come through tomorrow.",
  },
  {
    forum_image:
      "https://3.bp.blogspot.com/-l41urjyVtUU/TWVMQdNIT2I/AAAAAAAAAWc/il8SiF2elJ8/s1600/closeup_catface.jpg",
    forum_acc_name: "Surfer Cat",
    forum_acc_message_time: "16:18",
    forum_acc_message: "Im riding the wave of my life.",
  },
]);

db.surfboards.insert([
  {
    surfboard_strength: "Small",
    surfboard_description:
      "On smaller days and when starting out it is best to ride a board with more volume to help get you on the wave. Mid-lengths and longboards are the best, but bigger wide shortboards are also a good choice.",
    surfboard_image: "https://i.ytimg.com/vi/yrTI1Mdgi-4/maxresdefault.jpg",
  },
  {
    surfboard_strength: "Medium",
    surfboard_description:
      "For intermediate surfers and days when the conditions have a bit of power and good shape, you can branch out and ride boards with less volume. There is no fixed rule though so if you prefer longboards and mid-lengths they are still a good choice for these conditions.",
    surfboard_image:
      "https://waikikibeachstays.com/wp-content/uploads/2020/11/oahu-surf-spots-hawaii-facebook.jpeg",
  },
  {
    surfboard_strength: "Big",
    surfboard_description:
      "When the conditions are heavy and pumping there are certain boards that are necessary to surf the waves. At this point it is worth considering that the board is going to be fast enough to make it through the barrels.For very large beach break waves a shortboard that is squashed and stretched out to mid-length size works. If the waves are barreling with an easier take off then a high performance shortboard should work. ",
    surfboard_image:
      "https://www.theinertia.com/wp-content/gallery/mckenna-teahupoo/dsc_1155.jpg",
  },
]);

db.surfbreaks.insert([
  {
    surfbreak_image:
      "https://live.staticflickr.com/296/32295736191_91afd2f192_b.jpg",
    surfbreak_title: "New Brighton Beach",
    surfbreak_blurb:
      "New Brighton is one of the main local beach breaks in Christchurch, just 10 minutes drive from the city, it can offer anything from hollow inside sections to fat walls peeling from way out the back depending on swell. Generally though, the waves are average, and it's best to know what the forecasts will translate to when surfing here so you are not disappointed.",
    surfbreak_button: "Read More",
    surfbreak_button_forecast: "Check Forecast",
  },
  {
    surfbreak_image:
      "https://ec2-im-1.msw.ms/md/image.php?id=377508&type=PHOTOLAB&resize_type=PHOTOLAB_FULL&fromS3",
    surfbreak_title: "Sumner Beach",
    surfbreak_blurb:
      "Also referred to as Scarborough Beach, this is the main beginner break around Christchurch, about a 15 minute drive from the city it offers a generally more wally and weak wave that can peel for a  pretty good distance making it great for all levels of surfer. This break can also hold quite large short-interval swells when everywhere else is too big and messy.",
    surfbreak_button: "Read More",
    surfbreak_button_forecast: "Check Forecast",
  },
  {
    surfbreak_image:
      "https://ec2-im-1.msw.ms/md/image.php?id=397821&type=PHOTOLAB&resize_type=PHOTOLAB_FULL&fromS3",
    surfbreak_title: "Taylors Mistake Beach",
    surfbreak_blurb:
      "A solid wave when the swell and tides are right, Taylors Mistake can put out a solid hollow inside section on low tide and generally has more punch in it than other spots, though the ride is normally shorter. The sand bars can be better than other local breaks, but due to its size overcrowding is common",
    surfbreak_button: "Read More",
    surfbreak_button_forecast: "Check Forecast",
  },
  {
    surfbreak_image:
      "https://www.surf-forecast.com/system/images/8836/large/Waikuku-Beach.jpg?1380361537",
    surfbreak_title: "Waikuku Beach",
    surfbreak_blurb:
      "Heading further north, Waikuku is a beach break that has better sand bars than further south at Brighton. Not often crowded, it catches the south swells a bit better than local Christchurch breaks making it a good idea when looking for more solid waves on a SSE swell or similair.",
    surfbreak_button: "Read More",
    surfbreak_button_forecast: "Check Forecast",
  },
  {
    surfbreak_image:
      "https://www.surf-forecast.com/system/images/13743/large/Amberley-Beach.jpg?1431499023",
    surfbreak_title: "Amberly Beach",
    surfbreak_blurb:
      "Amberly Beach sits at the top of Pegasus Bay and is often the southern-most local beach break worth going to (gas permitting). The beach drops off quickly with an unsurfable dumping inside, but turns into a fairly consistent, wally wave best surfed at low-tide on a decent sized SSE swell.",
    surfbreak_button: "Read More",
    surfbreak_button_forecast: "Check Forecast",
  },
  {
    surfbreak_image:
      "https://ec2-im-1.msw.ms/md/image.php?id=386948&type=PHOTOLAB&resize_type=PHOTOLAB_FULL&fromS3",
    surfbreak_title: "Magnet Bay",
    surfbreak_blurb:
      "A little over an hours drive south of Christchurch in Banks Penninsula lies one of the best left-hand point break in the region. Although a great wave on a decent sized south-swell, Magnet Bay gets crowded very quickly and breaks quite close to sharp rocks. While this bay is probably not considered overly dangerous to the more experienced surfers, it has surely claimed many fins and flesh over the years.",
    surfbreak_button: "Read More",
    surfbreak_button_forecast: "Check Forecast",
  },
]);
