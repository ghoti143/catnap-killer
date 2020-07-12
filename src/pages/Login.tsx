import React , { useEffect } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab3.css';
import { RouteComponentProps } from 'react-router-dom';
import * as firebase from "firebase/app";
import * as firebaseui from 'firebaseui';

interface PropsInterface extends RouteComponentProps<any> {}

const Login: React.FC<PropsInterface> = (props: PropsInterface) => {

  useEffect(() => {  
  
    var ui = firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(firebase.auth());

    ui.start('#firebaseui-auth-container', {
      signInFlow: 'popup',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: '/',
      callbacks: {
        signInSuccessWithAuthResult: function(authResult, redirectUrl) {
          return true;
        },
        uiShown: function() {
          // The widget is rendered.
          // Hide the loader.
        }
      },
    });
  });

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Login</IonTitle>
          </IonToolbar>
        </IonHeader>
        <h1>Login</h1>
        <div id="firebaseui-auth-container"></div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
