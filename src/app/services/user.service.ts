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
    return this.afs.doc(`students/${uid}`).valueChanges();
  }

  getAllUsers() {
    return this.afs.collection('users').snapshotChanges().pipe(
      map(docs => docs.map(doc => doc.payload.doc.data()))
    );
  }

  createUser(user: any) {
    return this.afs.doc(`students/${user.id}`).set(user);
  }

  createUsername(user: any) {
    const doc = {
      username: user.username,
      uid: user.id
    };

    return this.afs.doc(`usernames/${user.username}`).set(doc);
  }

  searchUsers(username: string) {
    return this.afs.collection('students', ref => ref
      .where('username', '>=', username)
      .where('username', '<=', username + '\uf8ff')
      .limit(10)
      .orderBy('username'))
      .snapshotChanges()
      .pipe(map(actions => actions.map(a => {
        return a.payload.doc.data();
      }))
    );
  }

  async usernameExists(username: string): Promise<boolean> {
    return new Promise(async (resolve, reject) => {
      const user = await this.afs.doc(`usernames/${username}`).get().toPromise().then((doc) => doc.exists);

      if (user) {
        reject(new Error('Username is already taken.'));
      } else {
        resolve(true);
      }
    });
  }

  updateUser(id: string, updatedUser: any) {
    return this.afs.doc(`students/${id}`).update(updatedUser);
  }

  updateTeacher(id: string, updatedUser: any) {
    return this.afs.doc(`users/${id}`).update(updatedUser);
  }

  async uploadProfilePicture(uid: string, image: File) {
    return new Promise(async (resolve, reject) => {
      try {
        const filePath = `profilePictures/${uid}.jpeg`;
        const task = this.afStorage.upload(filePath, image);
        await task.snapshotChanges().toPromise();
        const pictureUrl = await this.afStorage.ref(filePath).getDownloadURL().toPromise();
        await this.updateUser(uid, { pictureUrl });

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }

  async removeProfilePicture(uid: string) {
    return new Promise(async (resolve, reject) => {
      try {
        const filePath = `profilePictures/${uid}.jpeg`;
        const task = this.afStorage.ref(filePath).delete();
        await task.toPromise();
        await this.updateUser(uid, { pictureUrl: null });

        resolve(true);
      } catch (error) {
        reject(error);
      }
    });
  }
}
