import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private afs: AngularFirestore,
              private afStorage: AngularFireStorage) { }

  getUser(uid: string) {
    return this.afs.doc(`Estudiantes/${uid}`).valueChanges();
  }

  getAllUsers() {
    return this.afs.collection('Asesores').snapshotChanges().pipe(
      map(docs => docs.map(doc => doc.payload.doc.data()))
    );
  }

  createUser(user: any) {
    return this.afs.doc(`Estudiantes/${user.id}`).set(user);
  }

  // createUsername(user: any) {
  //   const doc = {
  //     username: user.username,
  //     uid: user.id
  //   };

  //   return this.afs.doc(`nombreUsuario/${user.username}`).set(doc);
  // }

  // searchUsers(username: string) {
  //   return this.afs.collection('Estudiantes', ref => ref
  //     .where('nombreUsuario', '>=', username)
  //     .where('nombreUsuario', '<=', username + '\uf8ff')
  //     .limit(10)
  //     .orderBy('nombreUsuario'))
  //     .snapshotChanges()
  //     .pipe(map(actions => actions.map(a => {
  //       return a.payload.doc.data();
  //     }))
  //   );
  // }

  // async usernameExists(username: string): Promise<boolean> {
  //   return new Promise(async (resolve, reject) => {
  //     const user = await this.afs.doc(`nombreUsuario/${username}`).get().toPromise().then((doc) => doc.exists);

  //     if (user) {
  //       reject(new Error('Nombre de Usuario no disponible.'));
  //     } else {
  //       resolve(true);
  //     }
  //   });
  // }

  updateUser(id: string, updatedUser: any) {
    return this.afs.doc(`Estudiantes/${id}`).update(updatedUser);
  }

  updateTeacher(id: string, updatedUser: any) {
    return this.afs.doc(`Asesores/${id}`).update(updatedUser);
  }

  
}
