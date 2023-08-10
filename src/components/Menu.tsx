import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
} from '@ionic/react';

import { useLocation } from 'react-router-dom';
import { archiveOutline, archiveSharp, bookmarkOutline, heartOutline, heartSharp, mailOutline, mailSharp, paperPlaneOutline, paperPlaneSharp, trashOutline, trashSharp, warningOutline, warningSharp } from 'ionicons/icons';
import './Menu.css';

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}



const Menu: React.FC = () => {
  const location = useLocation();

  return (
    <IonMenu contentId="main" type="overlay">
      <IonContent>
        <IonList id="inbox-list">
          <IonListHeader>User</IonListHeader>
          <IonNote>hi@ionicframework.com</IonNote>
          <IonMenuToggle autoHide={false}>
                <IonItem className={location.pathname === '/page/Profile' ? 'selected' : ''} routerLink='/Profile' routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={bookmarkOutline} md={bookmarkOutline} />
                  <IonLabel>Profile</IonLabel>
                </IonItem>
              </IonMenuToggle><IonMenuToggle  autoHide={false}>
                <IonItem className={location.pathname === '/page/Login' ? 'selected' : ''} routerLink='/login' routerDirection="none" lines="none" detail={false}>
                  <IonIcon aria-hidden="true" slot="start" ios={bookmarkOutline} md={bookmarkOutline} />
                  <IonLabel>Login</IonLabel>
                </IonItem>
              </IonMenuToggle>
         
        </IonList>

       
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
