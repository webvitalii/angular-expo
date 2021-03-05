import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PostInterface } from '@core/interfaces/post.interface';
import { environment } from '@env/environment';

export interface FirebaseCreateResponse {
  name: string;
}

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: any = [
    {
      id: 1,
      title: 'Brown fox',
      text: 'The quick brown fox jumps over the lazy dog.',
      author: 'admin',
      date: '2010-02-06T17:15:30.000+0000'
    },
    {
      id: 2,
      title: 'Quiz',
      text: 'Brick quiz whangs jumpy veldt fox!',
      author: 'admin',
      date: '2011-03-06T17:15:30.000+0000'
    },
    {
      id: 3,
      title: 'Zephyrs',
      text: 'Quick wafting zephyrs vex bold Jim.',
      author: 'admin',
      date: '2012-04-06T17:15:30.000+0000'
    },
    {
      id: 4,
      title: 'Sphinx',
      text: 'Sphinx of black quartz judge my vow!',
      author: 'admin',
      date: '2013-05-06T17:15:30.000+0000'
    },
    {
      id: 5,
      title: 'Boxing wizards',
      text: 'The five boxing wizards jump quickly.',
      author: 'admin',
      date: '2014-06-06T17:15:30.000+0000'
    },
    {
      id: 6,
      title: 'Mr. Jock',
      text: 'Mr. Jock, TV quiz Ph.D., bags few lynx.',
      author: 'admin',
      date: '2015-07-06T17:15:30.000+0000'
    },
    {
      id: 7,
      title: 'Pack my box',
      text: 'Pack my box with five dozen liquor jugs.',
      author: 'admin',
      date: '2016-08-06T17:15:30.000+0000'
    },
    {
      id: 8,
      title: 'Jackdaws',
      text: 'Jackdaws love my sphinx of black quartz.',
      author: 'admin',
      date: '2017-09-06T17:15:30.000+0000'
    },
    {
      id: 9,
      title: 'Quaker',
      text: 'Sympathizing would fix Quaker objectives.',
      author: 'admin',
      date: '2018-10-06T17:15:30.000+0000'
    },
    {
      id: 10,
      title: 'Quacking zephyrs',
      text: 'Five big quacking zephyrs jolt my wax bed.',
      author: 'admin',
      date: '2019-11-06T17:15:30.000+0000'
    },
// 10
    {
      id: 11,
      title: 'Jack',
      text: 'Many-wived Jack laughs at probes of sex quiz.',
      author: 'admin',
      date: '2010-02-06T17:15:30.000+0000'
    },
    {
      id: 12,
      title: 'Mix Zapf',
      text: 'Mix Zapf with Veljovic and get quirky Beziers.',
      author: 'admin',
      date: '2011-03-06T17:15:30.000+0000'
    },
    {
      id: 13,
      title: 'Dumpy kibitzer',
      text: 'Dumpy kibitzer jingles as exchequer overflows.',
      author: 'admin',
      date: '2012-04-06T17:15:30.000+0000'
    },
    {
      id: 14,
      title: 'Puzzled women',
      text: 'Puzzled women bequeath jerks very exotic gifts.',
      author: 'admin',
      date: '2013-05-06T17:15:30.000+0000'
    },
    {
      id: 15,
      title: 'Brawny gods',
      text: 'Brawny gods just flocked up to quiz and vex him.',
      author: 'admin',
      date: '2014-06-06T17:15:30.000+0000'
    },
    {
      id: 16,
      title: 'Viewing quizzical abstracts',
      text: 'Viewing quizzical abstracts mixed up hefty jocks.',
      author: 'admin',
      date: '2015-07-06T17:15:30.000+0000'
    },
    {
      id: 17,
      title: 'Playing jazz',
      text: 'Playing jazz vibe chords quickly excites my wife.',
      author: 'admin',
      date: '2016-08-06T17:15:30.000+0000'
    },
    {
      id: 18,
      title: 'Jim',
      text: 'Jim just quit and packed extra bags for Liz Owen.',
      author: 'admin',
      date: '2017-09-06T17:15:30.000+0000'
    },
    {
      id: 19,
      title: 'Five wine experts',
      text: 'Five wine experts jokingly quizzed sample chablis.',
      author: 'admin',
      date: '2018-10-06T17:15:30.000+0000'
    },
    {
      id: 20,
      title: 'William Jex',
      text: 'William Jex quickly caught five dozen Republicans.',
      author: 'admin',
      date: '2019-11-06T17:15:30.000+0000'
    },
// 20
    {
      id: 21,
      title: 'Large fawn',
      text: 'A large fawn jumped quickly over white zinc boxes.',
      author: 'admin',
      date: '2010-02-06T17:15:30.000+0000'
    },
    {
      id: 22,
      title: 'Cozy lummox',
      text: 'Cozy lummox gives smart squid who asks for job pen.',
      author: 'admin',
      date: '2011-03-06T17:15:30.000+0000'
    },
    {
      id: 23,
      title: 'Turgid saxophones',
      text: 'Turgid saxophones blew over Micks jazzy quiff.',
      author: 'admin',
      date: '2012-04-06T17:15:30.000+0000'
    },
    {
      id: 24,
      title: 'Big July',
      text: 'Big July earthquakes confound zany experimental vow.',
      author: 'admin',
      date: '2013-05-06T17:15:30.000+0000'
    },
    {
      id: 25,
      title: 'Exquisite farm',
      text: 'Exquisite farm wench gives body jolt to prize stinker.',
      author: 'admin',
      date: '2014-06-06T17:15:30.000+0000'
    },
    {
      id: 26,
      title: 'Six big devils',
      text: 'Six big devils from Japan quickly forgot how to waltz.',
      author: 'admin',
      date: '2015-07-06T17:15:30.000+0000'
    },
    {
      id: 27,
      title: 'The vixen',
      text: 'The vixen jumped quickly on her foe barking with zeal.',
      author: 'admin',
      date: '2016-08-06T17:15:30.000+0000'
    },
    {
      id: 28,
      title: 'Big jet planes',
      text: 'Five or six big jet planes zoomed quickly by the tower.',
      author: 'admin',
      date: '2017-09-06T17:15:30.000+0000'
    },
    {
      id: 29,
      title: 'Crazy Fredericka',
      text: 'Crazy Fredericka bought many very exquisite opal jewels.',
      author: 'admin',
      date: '2018-10-06T17:15:30.000+0000'
    },
    {
      id: 30,
      title: 'My grandfather',
      text: 'My grandfather picks up quartz and valuable onyx jewels.',
      author: 'admin',
      date: '2019-11-06T17:15:30.000+0000'
    }
// 30
  ];

  constructor(private http: HttpClient) {}

  create(post: PostInterface): Observable<PostInterface> {
    return this.http.post(`${environment.firebaseConfig.databaseURL}/posts.json`, post)
    .pipe(
      map((response: FirebaseCreateResponse) => {
        return {
          ...post,
          id: response.name,
          date: new Date(post.date)
        };
      })
    );
  }

  getAll(): Observable<PostInterface[]> {
    return this.http.get(`${environment.firebaseConfig.databaseURL}/posts.json`)
      .pipe(
        map((response: {[key: string]: any}) => {
          return Object
            .keys(response)
            .map(key => ({
              ...response[key],
              id: key,
              date: new Date(response[key].date)
            }));
        })
      );
  }

  getById(id: string): Observable<PostInterface> {
    return this.http.get<PostInterface>(`${environment.firebaseConfig.databaseURL}/posts/${id}.json`)
      .pipe(
        map((post: PostInterface) => {
          return {
            ...post, id,
            date: new Date(post.date)
          };
        })
      );
  }

  remove(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.firebaseConfig.databaseURL}/posts/${id}.json`);
  }

  update(post: PostInterface): Observable<PostInterface> {
    return this.http.patch<PostInterface>(`${environment.firebaseConfig.databaseURL}/posts/${post.id}.json`, post);
  }

/*
  getAllMock(): Observable<PostInterface[]> {
    const posts$: Observable<PostInterface[]> = new Observable((observer) => {
      observer.next(this.posts);
      observer.complete();
    });
    return posts$;
  }

  getByIdMock(id: string): Observable<PostInterface> {
    const post = this.posts.filter((postItem) => {
      return postItem.id === parseInt(id, 10);
    });
    const post$: Observable<PostInterface> = new Observable((observer) => {
      observer.next(post[0]);
      observer.complete();
    });
    return post$;
  }
*/
}
