import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/compat/firestore'
import { Tarea } from '../domain/Tarea';

@Injectable({
  providedIn: 'root'
})

export class TareasFirebaseService {
  
  private path = '/tareas'

  tareasRef: AngularFirestoreCollection<any> //Crar una referencia a la base de datos de firestore

  constructor(private db: AngularFirestore) { //Clase AngularFirestore
    this.tareasRef = db.collection(this.path) //Utilizacion de la coleccion /tareas

    this.tareasRef.valueChanges().subscribe(data => {
      console.log(data)
    })
  }

  getAll(){
    return this.tareasRef.valueChanges();
  }

  save(tarea: Tarea){
    const uid = this.db.createId()
    tarea.uid = uid;
    console.log('tarea:' ,tarea)
    return this.tareasRef.doc(uid).set(Object.assign({},tarea))
  }

  getTarea(uid: String){
    console.log('uid', uid)
    return this.db.doc(this.path+'/'+uid).valueChanges()
  }

  delete(tarea: Tarea){
    this.tareasRef.doc(tarea.uid).delete();
  }

  editar(tarea: Tarea){
    this.tareasRef.doc(tarea.uid).update(Object.assign({},tarea))
  }

}

