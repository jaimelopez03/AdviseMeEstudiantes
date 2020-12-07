import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireStorage } from '@angular/fire/storage';
import { map, take } from 'rxjs/operators';
import { firestore } from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  constructor(private afs: AngularFirestore,
              private afStorage: AngularFireStorage) { }

  getCourses() {
    return this.afs.collection('Cursos').snapshotChanges().pipe(
      map(docs => docs.map(doc => doc.payload.doc.data()))
    );
  }

  getCoursesByUser(id: string) {
    return this.afs.collection('Cursos', ref => ref
      .where('Enrolled', 'array-contains', id))
      .snapshotChanges()
      .pipe(
        map(docs => docs.map(doc => doc.payload.doc.data()))
      );
  }


  getCourse(courseID: string) {
    return this.afs.doc(`Cursos/${courseID}`).snapshotChanges().pipe(
      map(doc => doc.payload.data())
    );
  }

  deleteCourse(courseID: string) {
    return this.afs.doc(`Cursos/${courseID}`).delete();
  }

  updateCourse(courseID: string, course: any) {
    return this.afs.doc(`Cursos/${courseID}`).update(course);
  }

}
