import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators'
import { Router } from '@angular/router';
import {Post} from '../models/post.model'




@Injectable({
  providedIn: 'root'
})
export class PostService {

  itemRefs: AngularFireList<Post>;
  items$: Observable<Post[]>;

  constructor(private afdb: AngularFireDatabase, private router: Router) {
    this.itemRefs = afdb.list('/posts');
    this.items$ = this.itemRefs
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  create(post: Post) {
    this.router.navigate(['/posts'])
    return this.itemRefs.push(post);
  }

  update(key: string, updatedObject) {
    return this.itemRefs.update(key, updatedObject);
  }

  delete(key: string) {
    return this.itemRefs.remove(key);
  }
}
