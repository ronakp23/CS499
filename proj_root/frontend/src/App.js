import { useState } from 'react'
import WeekDisplay from './components/WeekDisplay'
import Calendar from './components/Calendar'
import ConflictAlert from './components/ConflictAlert'
import FormInput from './components/FormInput'
import './App.css';
import DayDisplay from './components/DayDisplay'
import EventDisplay from './components/EventDisplay'


function App() {
  const eventsToday = [
    {
      "title": "Out of Ashes Exhibition",
      "date_time": "2/16/2023 08:00 AM",
      "org_name": "Studio West, Art Gallery",
      "location": "Colorado Springs, CO",
      "description": "Large-scale landscape paintings deal with the theme of wildfires and rebirth. The Colorado artists will discuss their work and inspiration and PPSC faculty will read original poems.Show runs Jan. 30\u2013March 3Gallery Hours 8am-12pm, 1pm-5pm Mon-FriOpening: Fri, Feb. 3, 5-8 pm I Artist talk 5:30 I Poetry reading  6:30\r\n"
    },
    {
      "title": "The Moose is Loose Sales Event 2023",
      "date_time": "2/16/2023 09:30 AM",
      "org_name": "The Moose is Loose",
      "location": "Woodland Park, CO",
      "description": "The Moose is Loose for 3 Weeks of Fun in the City Above the Clouds - Woodland Park! Enjoy special offers and giveaways valid at the following businesses February 11-26, 2023. For more details and updates, visit www.MooseIsLooseSale.com.February 11-12: Kickoff! February 18: Family Fun RunFebruary 26: Coffee Crawl Extravaganza! Visit https://mooseisloosesale.com/ for details, and follow along @tweeds.mooseSince 2000, the Moose is Loose EVERY February in Woodland Park! Local shops, restaurants and businesses gather to have a great time and support each other while providing great deals, entertainment and activities for all ages!"
    },
    {
      "title": "Geeks Who Drink Trivia Night at The Block Bar & Grill",
      "date_time": "2/16/2023 07:30 PM",
      "org_name": "The Block Bar & Grill",
      "location": "Colorado Springs, CO",
      "description": "Geeks Who Drink Trivia Night at The Block Bar & Grill.Modeled after pub quizzes in Ireland and the U.K., Geeks Who Drink is an authentic homegrown trivia quiz. It's a great way to drink with friends, without burning brain cells. And it's where useless knowledge means everything.Our quizzes cover everything from Hungary to The Hunger Games, from science to sports, from the Billboard Hot 100 to Better Call Saul.Each quiz consists of seven rounds of eight questions each, in a variety of formats, including audio and visual rounds.Teams can be up to six players, so bring your smartest friends (or some likable dummies)\u2014or come solo. We can always help you join a team! No reservations needed, just show up!Winning teams get bar cash and other prizes, depending on the venue. Bonus questions sprinkled throughout the quiz will net you additional goodies. But mostly it's about establishing your dominance\u2014or at least pleasantly surprising yourself. You're into that, right?This is a Weekly Recurring EventRuns from Feb 2, 2023 to Mar 30, 2023 and happens every:Thursdays:\t7:30pm - 9:30pm"
    },
    {
      "title": "Fishing 101",
      "date_time": "2/17/2023 03:00 PM",
      "org_name": "Bear Creek Nature Center",
      "location": "Colorado Springs, CO",
      "description": "Have an interest in fishing but don't know where to begin? Come learn all about freshwater fishing as we explore the exciting opportunities our state has to offer. With Colorado being one of the top freshwater fishing destinations in the world, we want you to feel confident in going out to reel in the big one. In this seminar styled program you will learn everything you need to know about fishing and how to get started. Come learn from local pros and special guest speakers about one of Colorado's greatest recreation assets.Pre-registration required\r\n"
    },
    {
      "title": "Pikes Peak Opera League Winter Wonder Fest",
      "date_time": "2/17/2023 05:00 PM",
      "org_name": "Patty Jewett Clubhouse",
      "location": "Colorado Springs, CO",
      "description": "\"Can't Help Lovin' ... Jerome Kern.\" This concert will feature Marcia Ragonetti (mezzo soprano), Travis Yamamoto (piano), and Steven Taylor (baritone). A tuneful exploration of a very special chapter in The Great American Songbook, Marcia and Steve take on the legendary composer Jerome Kern, once hailed by a joint Congressional resolution as, \"the father of American musical theatre.\"  Expect to be intrigued by historical insights while being serenaded with a musical feast of iconic songs including highlights from the celebrated musical Showboat.  This showcase of \"life upon the wicked stage\" could not be more heavenly and will leave you humming all the way home.There will be an elegant appetizer buffet and cash bar. All proceeds will go to our PPOL scholarship and Career award funds. Program Sponsors: Tiemens Private Wealth Management Group of Wells Fargo Advisors, Dr. Susan Rae Jensen and Tom Trainer, and Nicole de Naray."
    },
    {
      "title": "Brahms Clarinet Trio presented by EPIC",
      "date_time": "2/17/2023 07:00 PM",
      "org_name": "Ent Center for the Arts",
      "location": "Colorado Springs, CO",
      "description": "Do not miss a concert of Romantic era blockbusters. In this concert we feature the power duo Pianist Ieva Jokubaviciute and Cellist Sophie Shao. Their resumes boast impressive international honors like solo appearances with the Chicago Symphony Orchestra and Avery Fischer Grant recipient among others. Hear a cello sonata by Beethoven and the clarinet Trio by Brahms. Artistic director Sergei Vassiliev performs the clarinet part."
    },
    {
      "title": "The Pizza Party",
      "date_time": "2/17/2023 08:00 PM",
      "org_name": "Steel Pan PNP",
      "location": "Colorado Springs, CO",
      "description": "What's up Headbanger;Join the Professional Headbangerz along with Steel Pan Pizza as they bring you the first ever Pizza Party!Packed with a full line up of deep wubz and heavy bass lines provided to you by your local Colorado EDM Community along with Tchaikovsky - Bad Wolf Entertainment on a proper Funktion - One and Danley sound system. This show will have you moving and grooving all night long. Dance up an appetite and try one of Steel Pans hot delicious square Detroit style pizzas that are made with only the freshest ingredients daily. Then wash it down with one of there many but limited to beer and alcohol selections. Keeping on tap some of Colorado Springs's best micro brews. Professional Headbangerz and Steel Pan Pizza can't wait to see you and have a slice of some bass with you.Check out the line-up below.Thank You.SHOW LINE UP!!!1: Headliner: Omegamode (12:30am - 1:30am)2: Support: Say Word (11:30pm - 12:30am)3: Deep State (10:30pm - 11:30pm)4: Substance D (9:30pm - 10:30pm)5: Open Decks (8:30pm - 9:30pm)*open decks is on first come first serve basis\"Party starts at 8:00pm!!!\r\n"
    },
    {
      "title": "The Moose is Loose Fun Run",
      "date_time": "2/18/2023 09:00 AM",
      "org_name": "Tweeds Fine Furnishings",
      "location": "Woodland Park, CO",
      "description": "Come get loose and run with the Moose! Head up to Woodland Park, Colorado and join the Moose at 8,465 feet for a 1-mile fun run! (or run it three times for a fun 5K). This run/walk is fun for the entire family and starts at Tweeds and ends in Memorial Park. Cocoa at the finish line. The first 50 adults registered get a Moose is Loose beanie.\r\n"
    },
    {
      "title": "Geeks Who Drink Trivia Night at Jack Quinn's Irish Alehouse & Pub",
      "date_time": "2/20/2023 08:00 PM",
      "org_name": "Jack Quinn's Irish Alehouse & Pub",
      "location": "Colorado Springs, CO",
      "description": "Geeks Who Drink Trivia Night at Jack Quinn's Irish Alehouse & Pub.Modeled after pub quizzes in Ireland and the U.K., Geeks Who Drink is an authentic homegrown trivia quiz. It's a great way to drink with friends, without burning brain cells. And it's where useless knowledge means everything.Our quizzes cover everything from Hungary to The Hunger Games, from science to sports, from the Billboard Hot 100 to Better Call Saul.Each quiz consists of seven rounds of eight questions each, in a variety of formats, including audio and visual rounds.Teams can be up to six players, so bring your smartest friends (or some likable dummies)\u2014or come solo. We can always help you join a team! No reservations needed, just show up!Winning teams get bar cash and other prizes, depending on the venue. Bonus questions sprinkled throughout the quiz will net you additional goodies. But mostly it's about establishing your dominance\u2014or at least pleasantly surprising yourself. You're into that, right?\r\n"
    }
  ]
  const mylist = (someArray) =>{
    const listItems = someArray.map((item) =>
    <li>
      <EventDisplay title = {item.title} description = {item.description}/>
    </li>

    //<li title = {item.title}>{item.description} </li> 
    )
    return(
      <ol>
        {listItems}
      </ol>
    )
  }

  const dateToday = new Date()
  const weekdays = {0:"sunday", 1:"monday", 2:"tuesday", 3:"wednesday", 4:"thursday", 5:"friday", 6:"saturday"}
  const months = {0:"January", 1:"February", 2:"March", 3:"April", 4:"May", 5:"June", 6:"July", 7:"August",
  8:"September", 9:"October", 10:"November", 11:"December"}
  const dateString = `${weekdays[dateToday.getDay()]} ${months[dateToday.getMonth()]} ${dateToday.getDate()}, ${dateToday.getFullYear()}`
  console.log(dateToday)

  return (
    <div className="App">
      
      <header className="App-header">
        <h1> Your Day, Today :3 </h1>
        <DayDisplay curDate= {dateString}/>
        <ConflictAlert/>
        <WeekDisplay/>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <FormInput/>
        <h2>Events Near You:</h2>
        <EventDisplay title={'fun run'} description={'its a run thats fun!'}/>
        {mylist(eventsToday)}
        Some fun facts about platypusses. They are lay eggs, and in spanish they are called 'ornitorhincos'
        <Calendar/>
      </header>
    </div>
  );
}

export default App;
