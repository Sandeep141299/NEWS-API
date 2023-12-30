import React, { Component } from "react";

export default class News extends Component {
  articles = [
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "TIMESOFINDIA.COM",
      title: "Coronavirus: Do you have a COVID cough? Experts reveal the best sleeping position for relief - Times of India",
      description: "Persistent cough was one of the most reported symptoms of COVID-19 during the second wave of coronavirus. While with the Omicron variant, sore throat, runny nose, and body pain have become more common, cough continues to be one of the reigning COVID-19 sympto…",
      url: "https://timesofindia.indiatimes.com/life-style/health-fitness/health-news/coronavirus-do-you-have-a-covid-cough-experts-reveal-the-best-sleeping-position-for-relief/photostory/92432521.cms",
      urlToImage: "https://static.toiimg.com/photo/92432531.cms",
      publishedAt: "2022-06-24T12:30:00Z",
      content: 'There are several other ways to treat COVID cough.\r\nThe NHS recommends, "To help ease a cough, try having a teaspoon of honey. But do not give honey to babies under 12 months. If this does not help, … [+723 chars]',
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title: "As Both Sides Claim To Be The Real Sena, Here's The Legal Battle - NDTV",
      description: "The battle for Shiv Sena's control has moved from the streets to the drawing room, where the legal teams of Chief Minister Uddhav Thackeray and Sena rebel MLA leader Eknath Shinde are working to make a claim as the rightful owner.",
      url: "https://www.ndtv.com/india-news/in-uddhav-thackeray-vs-rebels-a-legal-clash-now-blazes-3097091",
      urlToImage: "https://c.ndtvimg.com/2021-08/mbu6kcl4_uddhav-thackeray-650_625x300_02_August_21.jpg",
      publishedAt: "2022-06-24T12:09:00Z",
      content: "Uddhav Thackeray has the support of less than 13 MLAs\r\nMumbai: The battle for Shiv Sena's control has moved from the streets to the drawing room, where the legal teams of Chief Minister Uddhav Thacke… [+2231 chars]",
    },
    {
      source: {
        id: null,
        name: "India.com",
      },
      author: "India.com Sports Desk",
      title: "Highlights Madhya Pradesh vs Mumbai, Ranji Trophy 2022 Final Day 3 Cricket Score: Dubey-Sharma Slam Hundred; - India.com",
      description: "<B>LIVE Mumbai vs Madhya Pradesh Scorecard, Ranji Trophy 2022 Final, Day 3: Yash Dubey, Shubham Sharma and Rajat Patidar led Madhya Pradesh's batting domination on day three of Ranji Trophy Final against Mumbai, bringing the side in touching distance of takin…",
      url: "https://www.india.com/sports/highlights-madhya-pradesh-vs-mumbai-ranji-trophy-2022-final-day-3-cricket-score-dubey-sharma-slam-hundred-mp-on-the-verge-of-first-innings-lead-5471850/",
      urlToImage: "https://static.india.com/wp-content/uploads/2022/06/WhatsApp-Image-2022-06-21-at-7.58.34-PM.jpeg",
      publishedAt: "2022-06-24T12:08:59Z",
      content: "DAY 3 HIGHLIGHTS: Yash Dubey, Shubham Sharma and Rajat Patidar led Madhya Pradesh’s batting domination on day three of Ranji Trophy Final against Mumbai, bringing the side in touching distance of tak… [+4970 chars]",
    },
    {
      source: {
        id: null,
        name: "Pragativadi.com",
      },
      author: "Pradeep Sahoo",
      title: "Poco F4 5G With 120Hz AMOLED Display Launched In India: Check Price, Specs, Offers - Pragativadi",
      description: "New Delhi: Poco has launched its latest premium offering, the Poco F4 5G in India, which comes as the first smartphone from the company since last year’s Poco F3 GT. Let us take a look at how much the Poco F4 5G is priced in India, and what it offers",
      url: "https://pragativadi.com/poco-f4-5g-with-120hz-amoled-display-launched-in-india-check-price-specs-offers/",
      urlToImage: "https://pragativadi.com/wp-content/uploads/2022/06/Screenshot-2022-06-24-172159.png",
      publishedAt: "2022-06-24T12:07:27Z",
      content: "New Delhi: Poco has launched its latest premium offering, the Poco F4 5G in India, which comes as the first smartphone from the company since last years Poco F3 GT. Let us take a look at how much the… [+1636 chars]",
    },
    {
      source: {
        id: null,
        name: "Devdiscourse",
      },
      author: "Devdiscourse News Desk",
      title: "A star transcended death and came back more powerful after supernova explosion - Devdiscourse",
      description: "Read more about A star transcended death and came back more powerful after supernova explosion on Devdiscourse",
      url: "https://www.devdiscourse.com/article/science-environment/2085306-a-star-transcended-death-and-came-back-more-powerful-after-supernova-explosion",
      urlToImage: "https://www.devdiscourse.com/remote.axd?https://devdiscourse.blob.core.windows.net/devnews/24_06_2022_17_35_08_3771841.png?width=920&format=jpeg",
      publishedAt: "2022-06-24T12:07:07Z",
      content: "Supernova, a super-powerful explosion that takes place at the end of a star's life cycle, is the largest explosion that takes place in the universe, leaving nothing behind. However, a team of astrono… [+1821 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Soumyarendra Barik",
      title: "Parameswaran Iyer to take over as Niti Aayog CEO as Amitabh Kant leaves - The Indian Express",
      description: "Parameswaran Iyer, a 1981-batch IAS officer of Uttar Pradesh cadre and a well-known sanitation specialist, has been appointed the chief executive officer of Niti Aayog, after Amitabh Kant retires on June 30.",
      url: "https://indianexpress.com/article/india/parameswaran-iyer-as-niti-aayog-ceo-amitabh-kant-leaves-7988736/",
      urlToImage: "https://images.indianexpress.com/2022/06/iyer_updated_express_final.jpeg",
      publishedAt: "2022-06-24T11:21:18Z",
      content: "Niti Aayog CEO Amitabh Kant is set to leave the government think tank at the end of June after a six-year-long stint of heading the organisation. He will be replaced by Parameswaran Iyer, the former … [+1283 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: "Vedant Yadav",
      title: "India vs Leicestershire, Day 2: Mohammed Shami Dismisses Cheteshwar Pujara For A Duck, Celebrates By.. - NDTV Sports",
      description: "After the dismissal, both Pujara and Shami had a smile on their face, and the India pacer gave Pujara a hug while he was walking back to the dugout.",
      url: "https://sports.ndtv.com/cricket/india-vs-leicestershire-day-2-mohammed-shami-dismisses-cheteshwar-pujara-for-a-duck-celebrates-by-giving-him-a-hug-3096850",
      urlToImage: "https://c.ndtvimg.com/2022-06/o58duvs8_cheteshwar-pujara-mohammed-shami-806_625x300_24_June_22.jpg",
      publishedAt: "2022-06-24T11:13:58Z",
      content: "Pacer Mohammed Shami has given India a bright start on Day 2 of the ongoing four-day tour game against Leicestershire at the Uptonsteel Cricket Ground. After India declared their innings at their ove… [+1485 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title: 'Ranbir Kapoor On Marrying Alia Bhatt: "Used To Say Shaadi Is Like Dal Chawal. Now..." - NDTV Movies',
      description: '"I couldn\'t have asked for a better life partner," said Ranbir Kapoor',
      url: "https://www.ndtv.com/entertainment/ranbir-kapoor-on-marrying-alia-bhatt-used-to-say-shaadi-is-like-dal-chawal-now-3096904",
      urlToImage: "https://c.ndtvimg.com/2022-06/eig88gc8_alia_625x300_24_June_22.jpg",
      publishedAt: "2022-06-24T10:42:31Z",
      content: "Alia Bhatt with Ranbir Kapoor. (courtesy: aliaabhatt)\r\nNew Delhi: Ranbir Kapoor, during the trailer launch of Shamshera, interacted with the media, where he was in a chatty mood. The highlight of the… [+1461 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Tech Desk",
      title: "Stunning close-up of Mercury captured by European-Japanese BepiColombo - The Indian Express",
      description: "BepiColombo is the European Space Agency's mission to Mercury, in collaboration with the Japan Aerospace Exploration Agency.",
      url: "https://indianexpress.com/article/technology/science/stunning-close-up-of-mercury-captured-by-european-japanese-bepicolombo-7988779/",
      urlToImage: "https://images.indianexpress.com/2022/06/BepiColombo-mercury-close-up-image.jpg",
      publishedAt: "2022-06-24T10:41:33Z",
      content: "The BepiColombo mission, a collaboration between the European Space Agency (ESA) and Japan Aerospace Exploration Agency (JAXA) captured this beautiful image of Mercurys crater-marked surface as the s… [+2453 chars]",
    },
    {
      source: {
        id: null,
        name: "India Today",
      },
      author: null,
      title: "South Korea cancels plans to visit asteroid Apophis coming close to Earth - India Today",
      description: "The mission was called off following a preliminary feasibility study conducted by the Ministry of Science and Technology terming the possibility of success to be uncertain.",
      url: "https://www.indiatoday.in/science/story/south-korea-cancels-plans-to-visit-asteroid-apophis-coming-close-to-earth-1966352-2022-06-24",
      urlToImage: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202206/Apophis-647x363.jpeg?LTkSlAuM8JPGETUxxqoeVM5v8k0Frfbf",
      publishedAt: "2022-06-24T10:35:59Z",
      content: "South Korea has for now called off its plan to visit Apophis, an asteroid that is expected to come close to Earth in 2029. The mission was likely canceled on the grounds of the agency's lack of techn… [+2536 chars]",
    },
    {
      source: {
        id: null,
        name: "News18",
      },
      author: "News18",
      title: "Newer Omicron Subvariants Escape Immunity Provided by Vaccination, Previous Infection: Study - News18",
      description: "The study provides the immunologic context for current surges among populations with high rates of vaccinations and previous infection, the researchers said",
      url: "https://www.news18.com/news/world/newer-omicron-subvariants-escape-immunity-provided-by-vaccination-previous-infection-study-5433709.html",
      urlToImage: "https://images.news18.com/ibnlive/uploads/2022/04/covid-164967397016x9.jpg",
      publishedAt: "2022-06-24T10:31:44Z",
      content: "The newer Omicron sub variants of SARS-CoV-2 substantially escape neutralising antibodies induced by both vaccination and previous infection, according to a study published in the New England Journal… [+1541 chars]",
    },
    {
      source: {
        id: null,
        name: "Moneycontrol",
      },
      author: "Moneycontrol News",
      title: "WHO holds meeting on monkeypox: Top 5 developments - Moneycontrol",
      description: "There are over 3,200 confirmed cases of monkeypox worldwide, according to the World Health Organization.",
      url: "https://www.moneycontrol.com/news/trends/health-trends/monkeypox-world-health-organization-holds-meeting-top-5-developments-8733911.html",
      urlToImage: "https://images.moneycontrol.com/static-mcnews/2022/06/Collage-Maker-24-Jun-2022-03.54-PM-770x433.jpg",
      publishedAt: "2022-06-24T10:25:19Z",
      content: "Viral infection monkeypox has been declared a pandemic by global coalition World Health Network. The disease has so far been detected in 48 countries.\r\nHere are the five latest developments related t… [+1360 chars]",
    },
    {
      source: {
        id: null,
        name: "PINKVILLA",
      },
      author: "Pinkvilla Desk",
      title: "JugJugg Jeeyo review, box office & more of Varun Dhawan-Kiara Advani's film, Shamshera trailer out; LIVE - PINKVILLA",
      description: "Varun Dhawan, Kiara Advani, Neetu Kapoor and Anil Kapoor starrer JugJugg Jeeyo hits theatres today, whereas Ranbir Kapoor's Shamshera trailer will also take social media by storm.",
      url: "https://www.pinkvilla.com/entertainment/news/varun-dhawan-kiara-advanis-jugjugg-jeeyo-review-box-office-more-shamshera-trailer-out-today-live-updates",
      urlToImage: "https://www.pinkvilla.com/files/styles/fbimagesection/public/live_updates_jjj_and_shamshera_social.jpg?itok=koVtLA89",
      publishedAt: "2022-06-24T09:51:06Z",
      content: "Last night, at the JugJugg Jeeyo screening, apart from the celebs, Varun's wife and designer Natasha Dalal also arrived with him. She was seen clad in a white outfit. After the screening, when Varun … [+418 chars]",
    },
    {
      source: {
        id: null,
        name: "Telangana Today",
      },
      author: "IANS",
      title: "Scientists use human breast milk to treat prolonged Covid - Telangana Today",
      description: "Scientists use human breast milk to treat prolonged Covid",
      url: "https://telanganatoday.com/scientists-use-human-breast-milk-to-treat-prolonged-covid",
      urlToImage: "https://telanganatoday.com/wp-content/uploads/2022/06/Scientists-use-human-breast-milk-to-treat-prolonged-Covid.jpg",
      publishedAt: "2022-06-24T09:30:12Z",
      content: null,
    },
    {
      source: {
        id: null,
        name: "India.com",
      },
      author: "Zee Media Bureau",
      title: "Varun Dhawan-Kiara Advani`s `Jug Jugg Jeeyo` leaked online in full HD version on Tamilrockers, Movierulz, F... - Zee News",
      description: "Karan Johar Dharma Productionss latest release Jug Jugg Jeeyo is the latest victim of piracy.",
      url: "https://zeenews.india.com/bollywood/varun-dhawan-kiara-advanis-jug-jugg-jeeyo-leaked-online-in-full-hd-version-on-tamilrockers-movierulz-filmyzilla-2477427.html",
      urlToImage: "https://english.cdn.zeenews.com/sites/default/files/2022/06/24/1057342-jugjuggjeeyo-poster.gif",
      publishedAt: "2022-06-24T08:47:24Z",
      content: "NEW DELHI: Karan Johar' Dharma Productions's latest release 'Jug Jugg Jeeyo' is the latest victim of piracy. The mult-starrer film helmed by Raj Mehta stars Varun Dhawan, Kiara Advani, Neetu Singh, A… [+1464 chars]",
    },
    {
      source: {
        id: null,
        name: "The Indian Express",
      },
      author: "Express Web Desk",
      title: "Maharashtra Political Crisis News Live Updates: Deputy Speaker recognises Ajay Chaudhary Shiv Sena as party group leader; Eknath Shinde leaves for Mumbai - The Indian Express",
      description: 'Maharashtra News Live Updates, June 24, 2022: Shiv Sena MP Sanjay Raut challenged the rebel camp to come to Mumbai, adding, We are not going to concede defeat... This government will last its entire term."',
      url: "https://indianexpress.com/article/cities/mumbai/maharashtra-political-crisis-live-updates-shiv-sena-eknath-uddhav-thackeray-7987211/",
      urlToImage: "https://images.indianexpress.com/2022/06/thackeray-shinde.jpg",
      publishedAt: "2022-06-24T08:26:08Z",
      content: "Even as the Shiv Sena-led MVA dispensation is currently facing a survival crisis due to a rebellion by Sena minister Eknath Shinde, the departments - mostly controlled by ruling allies NCP and Congre… [+1348 chars]",
    },
    {
      source: {
        id: null,
        name: "NDTV News",
      },
      author: null,
      title: "For Droupadi Murmu, Running For President, A Show Of Strength Led by PM - NDTV",
      description: "Droupadi Murmu, the BJP-led NDA's pick for president, today filed her nomination for the post in the presence of Prime Minister Narendra Modi and senior BJP and alliance leaders, in a big show of strength ahead of the July 18 presidential election.",
      url: "https://www.ndtv.com/india-news/droupadi-murmu-to-file-nomination-for-president-polls-today-pm-narendra-modi-present-3096157",
      urlToImage: "https://c.ndtvimg.com/2022-06/p4unur7g_droupadi-murmu-nomination-for-presidential-polls-_625x300_24_June_22.jpg",
      publishedAt: "2022-06-24T08:16:00Z",
      content: "Draupadi Murmu is the first woman tribal leader to file her nomination for the post of President.New Delhi: Droupadi Murmu, the BJP-led NDA's pick for president, today filed her nomination for the … [+1595 chars]",
    },
    {
      source: {
        id: "the-times-of-india",
        name: "The Times of India",
      },
      author: "Prabhash K Dutta",
      title: "SC dismisses Zakia Jafri's plea: What was the case in which Modi got a clean chit from SIT? - Times of India",
      description: "India News: NEW DELHI: The Supreme Court on Friday dismissed a plea filed by Zakia Jafri, widow of former Congress MP Ehsan Jafri, challenging the clean chit give.",
      url: "https://timesofindia.indiatimes.com/india/sc-dismisses-zakia-jafris-plea-what-was-the-case-in-which-modi-got-a-clean-chit-from-sit/articleshow/92430832.cms",
      urlToImage: "https://static.toiimg.com/thumb/msid-92431170,width-1070,height-580,imgsize-734793,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg",
      publishedAt: "2022-06-24T07:51:00Z",
      content: "",
    },
  ];
  constructor() {
    super();
    console.log("news fatch");
    this.state = {
      articles: this.articles,
    };
  }

  render() {
    return (
      <div className='container text-center ' id='news'>
        <br />
        <h2> Indian Top News Head Line </h2> <br />
        <div className='row'>
          {" "}
          {this.state.articles.map((element) => {
            return (
              <div className='col-md-4' Key={element.url}>
                <h6> {element.publishedAt} </h6>{" "}
                <div class='card'>
                  <img src={element.urlToImage} class='card-img-top' alt='...' />
                  <div class='card-body'>
                    <h5 class='card-title'> {element.title} </h5> <h6 class='card-subtitle mb-2 text-muted'> {element.name} </h6> <p class='card-text'> {element.description} </p>
                    <a href='#' class='card-link'>
                      {" "}
                      {element.url}{" "}
                    </a>{" "}
                  </div>{" "}
                </div>{" "}
              </div>
            );
          })}{" "}
        </div>{" "}
      </div>
    );
  }
}
