import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public data: any = [
    {
      'title': 'Brown fox',
      'text': 'The quick brown fox jumps over the lazy dog.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2010-02-06T17:15:30.000+0000'
    },
    {
      'title': 'Quiz',
      'text': 'Brick quiz whangs jumpy veldt fox!',
      'users': [
        'Alex Brown'
      ],
      'date': '2011-03-06T17:15:30.000+0000'
    },
    {
      'title': 'Zephyrs',
      'text': 'Quick wafting zephyrs vex bold Jim.',
      'users': [
        'Lisa Miller'
      ],
      'date': '2012-04-06T17:15:30.000+0000'
    },
    {
      'title': 'Sphinx',
      'text': 'Sphinx of black quartz judge my vow!',
      'users': [
        'Jack Jones'
      ],
      'date': '2013-05-06T17:15:30.000+0000'
    },
    {
      'title': 'Boxing wizards',
      'text': 'The five boxing wizards jump quickly.',
      'users': [
        'Emma Wilson'
      ],
      'date': '2014-06-06T17:15:30.000+0000'
    },
    {
      'title': 'Mr. Jock',
      'text': 'Mr. Jock, TV quiz Ph.D., bags few lynx.',
      'users': [
        'Alex Brown',
        'Lisa Miller'
      ],
      'date': '2015-07-06T17:15:30.000+0000'
    },
    {
      'title': 'Pack my box',
      'text': 'Pack my box with five dozen liquor jugs.',
      'users': [
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2016-08-06T17:15:30.000+0000'
    },
    {
      'title': 'Jackdaws',
      'text': 'Jackdaws love my sphinx of black quartz.',
      'users': [
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2017-09-06T17:15:30.000+0000'
    },
    {
      'title': 'Quaker',
      'text': 'Sympathizing would fix Quaker objectives.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2018-10-06T17:15:30.000+0000'
    },
    {
      'title': 'Quacking zephyrs',
      'text': 'Five big quacking zephyrs jolt my wax bed.',
      'users': [
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2019-11-06T17:15:30.000+0000'
    },
// 10
    {
      'title': 'Jack',
      'text': 'Many-wived Jack laughs at probes of sex quiz.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2010-02-06T17:15:30.000+0000'
    },
    {
      'title': 'Mix Zapf',
      'text': 'Mix Zapf with Veljovic and get quirky Beziers.',
      'users': [
        'Alex Brown'
      ],
      'date': '2011-03-06T17:15:30.000+0000'
    },
    {
      'title': 'Dumpy kibitzer',
      'text': 'Dumpy kibitzer jingles as exchequer overflows.',
      'users': [
        'Lisa Miller'
      ],
      'date': '2012-04-06T17:15:30.000+0000'
    },
    {
      'title': 'Puzzled women',
      'text': 'Puzzled women bequeath jerks very exotic gifts.',
      'users': [
        'Jack Jones'
      ],
      'date': '2013-05-06T17:15:30.000+0000'
    },
    {
      'title': 'Brawny gods',
      'text': 'Brawny gods just flocked up to quiz and vex him.',
      'users': [
        'Emma Wilson'
      ],
      'date': '2014-06-06T17:15:30.000+0000'
    },
    {
      'title': 'Viewing quizzical abstracts',
      'text': 'Viewing quizzical abstracts mixed up hefty jocks.',
      'users': [
        'Alex Brown',
        'Lisa Miller'
      ],
      'date': '2015-07-06T17:15:30.000+0000'
    },
    {
      'title': 'Playing jazz',
      'text': 'Playing jazz vibe chords quickly excites my wife.',
      'users': [
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2016-08-06T17:15:30.000+0000'
    },
    {
      'title': 'Jim',
      'text': 'Jim just quit and packed extra bags for Liz Owen.',
      'users': [
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2017-09-06T17:15:30.000+0000'
    },
    {
      'title': 'Five wine experts',
      'text': 'Five wine experts jokingly quizzed sample chablis.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2018-10-06T17:15:30.000+0000'
    },
    {
      'title': 'William Jex',
      'text': 'William Jex quickly caught five dozen Republicans.',
      'users': [
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2019-11-06T17:15:30.000+0000'
    },
// 20
    {
      'title': 'Large fawn',
      'text': 'A large fawn jumped quickly over white zinc boxes.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2010-02-06T17:15:30.000+0000'
    },
    {
      'title': 'Cozy lummox',
      'text': 'Cozy lummox gives smart squid who asks for job pen.',
      'users': [
        'Alex Brown'
      ],
      'date': '2011-03-06T17:15:30.000+0000'
    },
    {
      'title': 'Turgid saxophones',
      'text': 'Turgid saxophones blew over Micks jazzy quiff.',
      'users': [
        'Lisa Miller'
      ],
      'date': '2012-04-06T17:15:30.000+0000'
    },
    {
      'title': 'Big July',
      'text': 'Big July earthquakes confound zany experimental vow.',
      'users': [
        'Jack Jones'
      ],
      'date': '2013-05-06T17:15:30.000+0000'
    },
    {
      'title': 'Exquisite farm',
      'text': 'Exquisite farm wench gives body jolt to prize stinker.',
      'users': [
        'Emma Wilson'
      ],
      'date': '2014-06-06T17:15:30.000+0000'
    },
    {
      'title': 'Six big devils',
      'text': 'Six big devils from Japan quickly forgot how to waltz.',
      'users': [
        'Alex Brown',
        'Lisa Miller'
      ],
      'date': '2015-07-06T17:15:30.000+0000'
    },
    {
      'title': 'The vixen',
      'text': 'The vixen jumped quickly on her foe barking with zeal.',
      'users': [
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2016-08-06T17:15:30.000+0000'
    },
    {
      'title': 'Big jet planes',
      'text': 'Five or six big jet planes zoomed quickly by the tower.',
      'users': [
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2017-09-06T17:15:30.000+0000'
    },
    {
      'title': 'Crazy Fredericka',
      'text': 'Crazy Fredericka bought many very exquisite opal jewels.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2018-10-06T17:15:30.000+0000'
    },
    {
      'title': 'My grandfather',
      'text': 'My grandfather picks up quartz and valuable onyx jewels.',
      'users': [
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2019-11-06T17:15:30.000+0000'
    },
// 30
    {
      'title': 'Brown fox',
      'text': 'The quick brown fox jumps over the lazy dog.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2010-02-06T17:15:30.000+0000'
    },
    {
      'title': 'Quiz',
      'text': 'Brick quiz whangs jumpy veldt fox!',
      'users': [
        'Alex Brown'
      ],
      'date': '2011-03-06T17:15:30.000+0000'
    },
    {
      'title': 'Zephyrs',
      'text': 'Quick wafting zephyrs vex bold Jim.',
      'users': [
        'Lisa Miller'
      ],
      'date': '2012-04-06T17:15:30.000+0000'
    },
    {
      'title': 'Sphinx',
      'text': 'Sphinx of black quartz judge my vow!',
      'users': [
        'Jack Jones'
      ],
      'date': '2013-05-06T17:15:30.000+0000'
    },
    {
      'title': 'Boxing wizards',
      'text': 'The five boxing wizards jump quickly.',
      'users': [
        'Emma Wilson'
      ],
      'date': '2014-06-06T17:15:30.000+0000'
    },
    {
      'title': 'Mr. Jock',
      'text': 'Mr. Jock, TV quiz Ph.D., bags few lynx.',
      'users': [
        'Alex Brown',
        'Lisa Miller'
      ],
      'date': '2015-07-06T17:15:30.000+0000'
    },
    {
      'title': 'Pack my box',
      'text': 'Pack my box with five dozen liquor jugs.',
      'users': [
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2016-08-06T17:15:30.000+0000'
    },
    {
      'title': 'Jackdaws',
      'text': 'Jackdaws love my sphinx of black quartz.',
      'users': [
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2017-09-06T17:15:30.000+0000'
    },
    {
      'title': 'Quaker',
      'text': 'Sympathizing would fix Quaker objectives.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2018-10-06T17:15:30.000+0000'
    },
    {
      'title': 'Quacking zephyrs',
      'text': 'Five big quacking zephyrs jolt my wax bed.',
      'users': [
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2019-11-06T17:15:30.000+0000'
    },
// 40
    {
      'title': 'Jack',
      'text': 'Many-wived Jack laughs at probes of sex quiz.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2010-02-06T17:15:30.000+0000'
    },
    {
      'title': 'Mix Zapf',
      'text': 'Mix Zapf with Veljovic and get quirky Beziers.',
      'users': [
        'Alex Brown'
      ],
      'date': '2011-03-06T17:15:30.000+0000'
    },
    {
      'title': 'Dumpy kibitzer',
      'text': 'Dumpy kibitzer jingles as exchequer overflows.',
      'users': [
        'Lisa Miller'
      ],
      'date': '2012-04-06T17:15:30.000+0000'
    },
    {
      'title': 'Puzzled women',
      'text': 'Puzzled women bequeath jerks very exotic gifts.',
      'users': [
        'Jack Jones'
      ],
      'date': '2013-05-06T17:15:30.000+0000'
    },
    {
      'title': 'Brawny gods',
      'text': 'Brawny gods just flocked up to quiz and vex him.',
      'users': [
        'Emma Wilson'
      ],
      'date': '2014-06-06T17:15:30.000+0000'
    },
    {
      'title': 'Viewing quizzical abstracts',
      'text': 'Viewing quizzical abstracts mixed up hefty jocks.',
      'users': [
        'Alex Brown',
        'Lisa Miller'
      ],
      'date': '2015-07-06T17:15:30.000+0000'
    },
    {
      'title': 'Playing jazz',
      'text': 'Playing jazz vibe chords quickly excites my wife.',
      'users': [
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2016-08-06T17:15:30.000+0000'
    },
    {
      'title': 'Jim',
      'text': 'Jim just quit and packed extra bags for Liz Owen.',
      'users': [
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2017-09-06T17:15:30.000+0000'
    },
    {
      'title': 'Five wine experts',
      'text': 'Five wine experts jokingly quizzed sample chablis.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2018-10-06T17:15:30.000+0000'
    },
    {
      'title': 'William Jex',
      'text': 'William Jex quickly caught five dozen Republicans.',
      'users': [
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2019-11-06T17:15:30.000+0000'
    },
// 50
    {
      'title': 'Large fawn',
      'text': 'A large fawn jumped quickly over white zinc boxes.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2010-02-06T17:15:30.000+0000'
    },
    {
      'title': 'Cozy lummox',
      'text': 'Cozy lummox gives smart squid who asks for job pen.',
      'users': [
        'Alex Brown'
      ],
      'date': '2011-03-06T17:15:30.000+0000'
    },
    {
      'title': 'Turgid saxophones',
      'text': 'Turgid saxophones blew over Micks jazzy quiff.',
      'users': [
        'Lisa Miller'
      ],
      'date': '2012-04-06T17:15:30.000+0000'
    },
    {
      'title': 'Big July',
      'text': 'Big July earthquakes confound zany experimental vow.',
      'users': [
        'Jack Jones'
      ],
      'date': '2013-05-06T17:15:30.000+0000'
    },
    {
      'title': 'Exquisite farm',
      'text': 'Exquisite farm wench gives body jolt to prize stinker.',
      'users': [
        'Emma Wilson'
      ],
      'date': '2014-06-06T17:15:30.000+0000'
    },
    {
      'title': 'Six big devils',
      'text': 'Six big devils from Japan quickly forgot how to waltz.',
      'users': [
        'Alex Brown',
        'Lisa Miller'
      ],
      'date': '2015-07-06T17:15:30.000+0000'
    },
    {
      'title': 'The vixen',
      'text': 'The vixen jumped quickly on her foe barking with zeal.',
      'users': [
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2016-08-06T17:15:30.000+0000'
    },
    {
      'title': 'Big jet planes',
      'text': 'Five or six big jet planes zoomed quickly by the tower.',
      'users': [
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2017-09-06T17:15:30.000+0000'
    },
    {
      'title': 'Crazy Fredericka',
      'text': 'Crazy Fredericka bought many very exquisite opal jewels.',
      'users': [
        'Alex Brown',
        'Lisa Miller',
        'Jack Jones'
      ],
      'date': '2018-10-06T17:15:30.000+0000'
    },
    {
      'title': 'My grandfather',
      'text': 'My grandfather picks up quartz and valuable onyx jewels.',
      'users': [
        'Lisa Miller',
        'Jack Jones',
        'Emma Wilson'
      ],
      'date': '2019-11-06T17:15:30.000+0000'
    },
// 60
  ];

  constructor() {}

}
