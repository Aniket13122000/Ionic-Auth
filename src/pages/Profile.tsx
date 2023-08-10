import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import { useEffect,useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useHistory } from "react-router-dom";


const Profile: React.FC = () => {
    const userJSON = localStorage.getItem('user');
    console.log(userJSON); // Output: {"access_token": "your_token_here", ...}
    const [mail, setmail] = useState<string | null>(null);
    const history = useHistory();

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
                history.push('/login');
                localStorage.clear()
                console.log('Token is expired');
              }
            } catch (error) {
              console.log('Token decoding failed or invalid token');
            }
          }else{
            history.push('/login');

          }
    }, [userJSON]);
  

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Profile</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>

            <IonTitle size="large">Profile</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonTitle>Profile:{mail}</IonTitle>

        {/* <ExploreContainer /> */}
      </IonContent>
    </IonPage>
  );
};

export default Profile;
