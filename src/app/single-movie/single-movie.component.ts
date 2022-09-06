import { Component, OnInit } from '@angular/core';
import { Imovie } from './movie';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.css'],
})
export class SingleMovieComponent implements OnInit {
  movies: Imovie[] = [];
  isDisable: boolean = false;
  private  _searchValue:string=''
  filterdMovie:Imovie[]=[];
  constructor() {}

  set searchvalue(val:string){
    this._searchValue=val;
    this.filterdMovie=this.searchMovies(val);
    
  }

  ngOnInit(): void {
   this.movies = [
      {
        adult: false,
        backdrop_path: '/ifUfE79O1raUwbaQRIB7XnFz5ZC.jpg',
        id: 646385,
        original_language: 'en',
        original_title: 'Scream',
        overview:
          'Twenty-five years after a streak of brutal murders shocked the quiet town of Woodsboro, a new killer has donned the Ghostface mask and begins targeting a group of teenagers to resurrect secrets from the town’s deadly past.',
        popularity: 340.974,
        poster_path: '/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg',
        release_date: '2022-01-12',
        title: 'Scream',
        video: false,
        vote_average: 6.7,
        vote_count: 1629,
        rating:4.5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/6MKr3KgOLmzOP6MSuZERO41Lpkt.jpg',
        id: 337404,
        original_language: 'en',
        original_title: 'Cruella',
        overview:
          'In 1970s London amidst the punk rock revolution, a young grifter named Estella is determined to make a name for herself with her designs. She befriends a pair of young thieves who appreciate her appetite for mischief, and together they are able to build a life for themselves on the London streets. One day, Estella’s flair for fashion catches the eye of the Baroness von Hellman, a fashion legend who is devastatingly chic and terrifyingly haute. But their relationship sets in motion a course of events and revelations that will cause Estella to embrace her wicked side and become the raucous, fashionable and revenge-bent Cruella.',
        popularity: 301.891,
        poster_path: '/wToO8opxkGwKgSfJ1JK8tGvkG6U.jpg',
        release_date: '2021-05-26',
        title: 'Cruella',
        video: false,
        vote_average: 8.1,
        vote_count: 7440,
        rating:4,
        isvisable: false,
        
      },
      {
        adult: false,
        backdrop_path: '/620hnMVLu6RSZW6a5rwO8gqpt0t.jpg',
        id: 508943,
        original_language: 'en',
        original_title: 'Luca',
        overview:
          'Luca and his best friend Alberto experience an unforgettable summer on the Italian Riviera. But all the fun is threatened by a deeply-held secret: they are sea monsters from another world just below the water’s surface.',
        popularity: 317.449,
        poster_path: '/8tABCBpzu3mZbzMB3sRzMEHEvJi.jpg',
        release_date: '2021-06-17',
        title: 'Luca',
        video: false,
        vote_average: 7.9,
        vote_count: 6640,
        rating:3.7,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/i0zbSmiyyylh7H3Qb4jgscz46Pm.jpg',
        id: 893370,
        original_language: 'es',
        original_title: 'Virus :32',
        overview:
          'A virus is unleashed and a chilling massacre runs through the streets of Montevideo.',
        popularity: 308.785,
        poster_path: '/qDNZWDJGU2LTPpPpVGPQMxKv8xl.jpg',
        release_date: '2022-04-21',
        title: 'Virus:32',
        video: false,
        vote_average: 7.1,
        vote_count: 128,
        rating:5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/9yBVqNruk6Ykrwc32qrK2TIE5xw.jpg',
        id: 460465,
        original_language: 'en',
        original_title: 'Mortal Kombat',
        overview:
          "Washed-up MMA fighter Cole Young, unaware of his heritage, and hunted by Emperor Shang Tsung's best warrior, Sub-Zero, seeks out and trains with Earth's greatest champions as he prepares to stand against the enemies of Outworld in a high stakes battle for the universe.",
        popularity: 318.128,
        poster_path: '/nkayOAUBUu4mMvyNf9iHSUiPjF1.jpg',
        release_date: '2021-04-07',
        title: 'Mortal Kombat',
        video: false,
        vote_average: 7.2,
        vote_count: 4838,
        rating:2,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/A5OlbPn10H3E16CY8CT8fplWZy7.jpg',
        id: 689700,
        original_language: 'en',
        original_title: 'Clean',
        overview:
          'Tormented by a past life, garbage man Clean attempts a life of quiet redemption. But when his good intentions mark him a target of a local crime boss, Clean is forced to reconcile with the violence of his past.',
        popularity: 284.811,
        poster_path: '/kRpKJstAW7DsoPAEBW2Kk1uD9Q6.jpg',
        release_date: '2022-01-28',
        title: 'Clean',
        video: false,
        vote_average: 6.5,
        vote_count: 204,
        rating:3,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/yIDS5QLvKtgzfu43eUWx5JkGW6p.jpg',
        id: 126963,
        original_language: 'ja',
        original_title: 'ドラゴンボールZ 神と神',
        overview:
          'The events of Battle of Gods take place some years after the battle with Majin Buu, which determined the fate of the entire universe. After awakening from a long slumber, Beerus, the God of Destruction is visited by Whis, his attendant and learns that the galactic overlord Frieza has been defeated by a Super Saiyan from the North Quadrant of the universe named Goku, who is also a former student of the North Kai. Ecstatic over the new challenge, Goku ignores King Kai\'s advice and battles Beerus, but he is easily overwhelmed and defeated. Beerus leaves, but his eerie remark of "Is there nobody on Earth more worthy to destroy?" lingers on. Now it is up to the heroes to stop the God of Destruction before all is lost.',
        popularity: 300.867,
        poster_path: '/nxZEdYcHMuD8SSuwusDnK9CD2H1.jpg',
        release_date: '2013-03-30',
        title: 'Dragon Ball Z: Battle of Gods',
        video: false,
        vote_average: 6.8,
        vote_count: 1258,
        rating:5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/gU84vBGG2x8K3x1zrz4SggiN5hr.jpg',
        id: 120,
        original_language: 'en',
        original_title: 'The Lord of the Rings: The Fellowship of the Ring',
        overview:
          'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.',
        popularity: 324.335,
        poster_path: '/6oom5QYQ2yQTMJIbnvbkBL9cHo6.jpg',
        release_date: '2001-12-18',
        title: 'The Lord of the Rings: The Fellowship of the Ring',
        video: false,
        vote_average: 8.4,
        vote_count: 21441,
        rating:4.5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/iDeWAGnmloZ5Oz3bocDp4rSbUXd.jpg',
        id: 823625,
        original_language: 'en',
        original_title: 'Blacklight',
        overview:
          'Travis Block is a shadowy Government agent who specializes in removing operatives whose covers have been exposed. He then has to uncover a deadly conspiracy within his own ranks that reaches the highest echelons of power.',
        popularity: 297.654,
        poster_path: '/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg',
        release_date: '2022-02-10',
        title: 'Blacklight',
        video: false,
        vote_average: 6.3,
        vote_count: 603,
        rating:1.8,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/Ktn3lkVHlaLpymvp7cCIPdb65g.jpg',
        id: 39108,
        original_language: 'ja',
        original_title: 'ドラゴンボールZ 龍拳爆発!!悟空がやらねば誰がやる',
        overview:
          'The Z Warriors discover an unopenable music box and are told to open it with the Dragon Balls. The contents turn out to be a warrior named Tapion who had sealed himself inside along with a monster called Hildegarn. Goku must now perfect a new technique to defeat the evil monster.',
        popularity: 304.958,
        poster_path: '/gd3argrGcs6mEHYPmnVHrP11sCG.jpg',
        release_date: '1995-07-15',
        title: 'Dragon Ball Z: Wrath of the Dragon',
        video: false,
        vote_average: 7.2,
        vote_count: 526,
        rating:3.2,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/blJVWug8FJggb9gs6NuooyOWBTP.jpg',
        id: 21208,
        original_language: 'en',
        original_title: 'Orphan',
        overview:
          'After losing their baby, a married couple adopt 9-year old Esther, who may not be as innocent as she seems.',
        popularity: 294.427,
        poster_path: '/lCGpOgoTOGLtZnBiGY9HRg5Xnjd.jpg',
        release_date: '2009-07-24',
        title: 'Orphan',
        video: false,
        vote_average: 7,
        vote_count: 4315,
        rating:2.5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/kpM7wX8K66bGZkYvfHXIrnXvDRS.jpg',
        id: 619803,
        original_language: 'ko',
        original_title: '범죄도시 2',
        overview:
          'The ‘Beast Cop’ Ma Seok-do heads to a foreign country to extradite a suspect, but soon after his arrival, he discovers additional murder cases and hears about a vicious killer who has been committing crimes against tourists for several years.',
        popularity: 318.465,
        poster_path: '/tqHXCshqysM6DPnXeFIR74fNdKw.jpg',
        release_date: '2022-05-18',
        title: 'The Roundup',
        video: false,
        vote_average: 7.3,
        vote_count: 59,
        rating:4.5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/gYwzKR1T8Hk2g1TaTQalV7A76eP.jpg',
        id: 980078,
        original_language: 'en',
        original_title: 'Winnie the Pooh: Blood and Honey',
        overview:
          'Christopher Robin is headed off to college and he has abandoned his old friends, Pooh and Piglet, which then leads to the duo embracing their inner monsters.',
        popularity: 241.493,
        poster_path: '/wtFwgFFk1ze789ghcadWGEVjj3N.jpg',
        release_date: '',
        title: 'Winnie the Pooh: Blood and Honey',
        video: false,
        vote_average: 0,
        vote_count: 0,
        rating:4.5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/rRGl4Uqo962I2iqQSOT8nArWNWd.jpg',
        id: 887357,
        original_language: 'en',
        original_title: 'Green Lantern: Beware My Power',
        overview:
          "Recently discharged Marine sniper John Stewart is at a crossroads in his life, one which is only complicated by receiving an extraterrestrial ring which grants him the powers of the Green Lantern of Earth. Unfortunately, the ring doesn't come with instructions - but it does come with baggage, like a horde of interplanetary killers bent on eliminating every Green Lantern in the universe. Now, with the aid of the light-hearted Green Arrow, Adam Strange and Hawkgirl, this reluctant soldier must journey into the heart of a galactic Rann/Thanagar war and somehow succeed where all other Green Lanterns have failed.",
        popularity: 316.166,
        poster_path: '/nS41LN1m2HYvVotvgOTcbPW2cjL.jpg',
        release_date: '2022-07-12',
        title: 'Green Lantern: Beware My Power',
        video: false,
        vote_average: 7.2,
        vote_count: 92,
        rating:5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/4OTYefcAlaShn6TGVK33UxLW9R7.jpg',
        id: 476669,
        original_language: 'en',
        original_title: "The King's Man",
        overview:
          "As a collection of history's worst tyrants and criminal masterminds gather to plot a war to wipe out millions, one man must race against time to stop them.",
        popularity: 303.911,
        poster_path: '/nj5HmHRZsrYQEYYXyAusFv35erP.jpg',
        release_date: '2021-12-22',
        title: "The King's Man",
        video: false,
        vote_average: 6.9,
        vote_count: 3096,
        rating:2,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/rshlQ6LfPRSWFhpGL4s5ZkIPR51.jpg',
        id: 324786,
        original_language: 'en',
        original_title: 'Hacksaw Ridge',
        overview:
          'WWII American Army Medic Desmond T. Doss, who served during the Battle of Okinawa, refuses to kill people and becomes the first Conscientious Objector in American history to receive the Congressional Medal of Honor.',
        popularity: 326.5,
        poster_path: '/fTuxNlgEm04PPFkr1xfK94Jn8BW.jpg',
        release_date: '2016-10-07',
        title: 'Hacksaw Ridge',
        video: false,
        vote_average: 8.2,
        vote_count: 11365,
        rating:4.5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/1Wlwnhn5sXUIwlxpJgWszT622PS.jpg',
        id: 585245,
        original_language: 'en',
        original_title: 'Clifford the Big Red Dog',
        overview:
          'As Emily struggles to fit in at home and at school, she discovers a small red puppy who is destined to become her best friend. When Clifford magically undergoes one heck of a growth spurt, becomes a gigantic dog and attracts the attention of a genetics company, Emily and her Uncle Casey have to fight the forces of greed as they go on the run across New York City. Along the way, Clifford affects the lives of everyone around him and teaches Emily and her uncle the true meaning of acceptance and unconditional love.',
        popularity: 283.801,
        poster_path: '/oifhfVhUcuDjE61V5bS5dfShQrm.jpg',
        release_date: '2021-11-10',
        title: 'Clifford the Big Red Dog',
        video: false,
        vote_average: 7.3,
        vote_count: 1379,
        rating:4.5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/1zgob2Z8xVE3RZUgOKnHKcVPzOE.jpg',
        id: 877183,
        original_language: 'en',
        original_title: 'The Simpsons in Plusaversary',
        overview:
          "The Simpsons host a Disney+ Day party and everyone is on the list… except Homer. With friends from across the service and music fit for a Disney Princess, Plusaversary is Springfield's event of the year.",
        popularity: 294.574,
        poster_path: '/p5jzbffrXuBTjsiwrQ3aOMTrvCj.jpg',
        release_date: '2021-11-12',
        title: 'The Simpsons in Plusaversary',
        video: false,
        vote_average: 6.6,
        vote_count: 325,
        rating:4.5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/mruT954ve6P1zquaRs6XG0hA5k9.jpg',
        id: 800510,
        original_language: 'en',
        original_title: 'Kimi',
        overview:
          'A tech worker with agoraphobia discovers recorded evidence of a violent crime but is met with resistance when she tries to report it. Seeking justice, she must do the thing she fears the most: she must leave her apartment.',
        popularity: 297.53,
        poster_path: '/okNgwtxIWzGsNlR3GsOS0i0Qgbn.jpg',
        release_date: '2022-02-10',
        title: 'Kimi',
        video: false,
        vote_average: 6.2,
        vote_count: 492,
        rating:4.5,
        isvisable: false,
      },
      {
        adult: false,
        backdrop_path: '/wdcSkdKRwiABA5SdNth1uAnErzw.jpg',
        id: 928270,
        original_language: 'en',
        original_title: 'Heatwave',
        overview:
          "A woman's life takes an unexpected turn when she falls for her boss's wife. She must soon defend herself as she becomes entangled in a web of malice.",
        popularity: 320.991,
        poster_path: '/AeeXeyiiPOyybnjSnJoSTixOZQq.jpg',
        release_date: '2022-01-17',
        title: 'Heatwave',
        video: false,
        vote_average: 7,
        vote_count: 57,
        rating:3,
        isvisable: false,
      },
    ];
    this.filterdMovie=this.movies;
  }

  greet(): void {
    alert('welcome from single movie component');
  }

  toggleDetails(movieId:number) {
    this.movies.forEach((item)=>{
       if(item.id==movieId){
         console.log(item.id,movieId);
         item.isvisable=!item.isvisable;
       }
       console.log(item.isvisable);
       
    });
    // this.showDiscription = !this.showDiscription;
  }

  searchMovies(value:string){
    return this.movies.filter((mov)=>{
      return mov.title.toLocaleLowerCase().includes(value.toLocaleLowerCase());
    })
  }

  recivedChildData(data:string){
    alert(data)
  }
}
