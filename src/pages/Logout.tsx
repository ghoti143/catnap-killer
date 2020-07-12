import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonButton, IonLabel } from '@ionic/react';
import './Tab3.css';
import { RouteComponentProps } from 'react-router-dom';
import * as firebase from "firebase/app";

interface PropsInterface extends RouteComponentProps<any> {}

const Logout: React.FC<PropsInterface> = (props: PropsInterface) => {

  firebase.auth().signOut();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Logged out</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonButton href="login">
          <IonLabel>Login Again</IonLabel>
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Logout;
