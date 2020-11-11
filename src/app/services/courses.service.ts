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

  async createCourse(course : any){
    return new Promise(async (resolve, reject) => {
      try {
        const courseID = this.afs.createId();
        const Title = course.name;
        const Description = course.description;
        const TeacherName = course.teachername;
        const TeacherID = course.teacherID;
        const Subject = course.subject;
        const Days = course.days;
        const CreationDate = course.creationDate;
        const Enrolled = course.enrolled;

        var temp = {
          courseID : courseID,
          Title : Title,
          Description : Description,
          TeacherName : TeacherName,
          TeacherID : TeacherID,
          Days : Days,
          Subject : Subject,
          CreationDate : CreationDate,
          Enrolled : Enrolled
          
        }
        
        await this.afs.firestore.runTransaction(async transaction => {
          const courseRef = this.afs.doc(`courses/${courseID}`).ref;
          //const userRef = this.afs.doc(`users/${course.teacherID}`).ref;
          //const increment = firestore.FieldValue.increment(1);

          transaction.set(courseRef, temp);
          //transaction.update(userRef, { postsCount: increment });
        });

        resolve(true);
        
      } catch (error) {
        console.log(error)
        reject(error);
      }
    });
  }

  getCourses() {
    return this.afs.collection('courses').snapshotChanges().pipe(
      map(docs => docs.map(doc => doc.payload.doc.data()))
    );
  }

  getCoursesByUser(id: string) {
    return this.afs.collection('courses', ref => ref
      .where('Enrolled', 'array-contains', id))
      .snapshotChanges()
      .pipe(
        map(docs => docs.map(doc => doc.payload.doc.data()))
      );
  }


  getCourse(courseID: string) {
    return this.afs.doc(`courses/${courseID}`).snapshotChanges().pipe(
      map(doc => doc.payload.data())
    );
  }

  deleteCourse(courseID: string) {
    return this.afs.doc(`courses/${courseID}`).delete();
  }

  updateCourse(courseID: string, course: any) {
    return this.afs.doc(`courses/${courseID}`).update(course);
  }

}
