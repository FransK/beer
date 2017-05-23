import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';

import { Review } from '../review';

@Injectable()
export class FirebaseService {

  constructor(private db: AngularFireDatabase) { }

  getFeatures() : FirebaseListObservable<any> {
    return this.db.list('/features');
  }

  getReview(beerid: string, reviewerid: string) : FirebaseObjectObservable<any> {
    return this.db.object(`/reviews/${beerid}/${reviewerid}`);
  }

}
