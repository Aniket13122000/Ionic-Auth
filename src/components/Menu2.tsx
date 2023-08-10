import React,{useEffect,useState} from 'react';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import { useHistory } from "react-router-dom";
import jwtDecode from 'jwt-decode';

import { IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonPage, IonTitle, IonToolbar,IonMenuToggle,IonItem ,IonLabel,IonIcon} from '@ionic/react';
function Menu2() {

    const userJSON = localStorage.getItem('user');
    console.log(userJSON); // Output: {"access_token": "your_token_here", ...}
    const [mail, setmail] = useState<string | null>(null);
    const history = useHistory();
const MakeLogout=()=>{
    localStorage.clear();
    history.push('/')
}
    useEffect(() => {
        if (userJSON) {
            try {

              const user = JSON.parse(userJSON);
              console.log(user);
              
              const decodedToken: any = jwtDecode(user.access_token); // Type assertion here
              if (decodedToken.exp * 1000 > Date.now()) {
                setmail(decodedToken.sub)
                console.log('Token is not expired');
              } else {
                
                localStorage.clear()
                console.log('Token is expired');
              }
            } catch (error) {
              console.log('Token decoding failed or invalid token');
            }
          }else{
           

          }
    }, [userJSON]);
  return (
    <>
      <IonMenu contentId="main-content">
        <IonHeader>
          <IonToolbar>
            <IonTitle>Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
       
        <IonMenuToggle  className="ion-padding" autoHide={false}>
                <IonItem className={location.pathname === '/page/Profile' ? 'selected' : ''} routerLink='/profile' routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={bookmarkOutline} md={bookmarkOutline} />
                  <IonLabel>Profile</IonLabel>
                </IonItem>
              </IonMenuToggle>
             
              <IonContent className="ion-padding">
                {
                    (mail)?( <IonMenuToggle  autoHide={false}>
                        <IonItem className={location.pathname === '/login' ? 'selected' : ''}  onClick={MakeLogout}  routerLink='/login' routerDirection="none" lines="none" detail={false}>
                          <IonIcon aria-hidden="true" slot="start" ios={bookmarkOutline} md={bookmarkOutline} />
                          <IonLabel>Logout</IonLabel>
                        </IonItem>
                      </IonMenuToggle>):( <IonMenuToggle autoHide={false}>
                <IonItem className={location.pathname === '/login' ? 'selected' : ''} routerLink='/login' routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={bookmarkOutline} md={bookmarkOutline} />
                  <IonLabel>Login</IonLabel>
                </IonItem>
              </IonMenuToggle>)
                }
             
              </IonContent>
      </IonMenu>
      <IonPage id="main-content">

     
        <IonContent className="ion-padding">Tap the button in the toolbar to open the menu.</IonContent>
      </IonPage>
    </>
  );
}
export default Menu2;