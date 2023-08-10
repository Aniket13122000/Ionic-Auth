import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar,IonGrid ,IonRow, IonCol,IonItem,IonLabel,IonInput,IonButton, IonIcon} from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import axios from 'axios'
import { useEffect,useState,useRef } from 'react';
import { useHistory } from "react-router-dom";
import { IonAlert } from '@ionic/react';
import jwtDecode from 'jwt-decode';

const Login: React.FC = () => {
   const [code, setCode] = useState<string | null>(null);
   const usernameRef = useRef<HTMLIonInputElement>(null);
  const passwordRef = useRef<HTMLIonInputElement>(null);
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
            history.push('/profile');

          } else {
          // 
            localStorage.clear()
            console.log('Token is expired');
          }
        } catch (error) {
          console.log('Token decoding failed or invalid token');
        }
      }else{
   
        const urlParams = new URLSearchParams(window.location.search);
        const  codee = urlParams.get('code');
        setCode(codee)
        //const[flag,setflag]=useState(true)
          if (codee) {
          //  login();
            // Do something with the 'code' parameter
           // console.log('Code:', code);
      return;
            // You can now use the 'code' value in your React component's state or perform any other desired actions.
          }else{
              console.log('nocode');
              const authorizationUrl =
              'https://trial-3955846.okta.com/oauth2/default/v1/authorize' +
              '?client_id=0oa6tkkokcYByqOsx697' +
              '&response_type=code' +
              '&response_mode=query' +
              '&scope=openid email profile' +
              '&redirect_uri=http://localhost:8100/login' +
              '&state=200' +
              '&nonce=500';
        
            window.location.href = authorizationUrl;
          }
      }
}, [userJSON]);

   // const[code,setcode]=useState('')
   // const [searchParams, setSearchParams] = useSearchParams();
//     useEffect(() => {
//     let config1 = {
//       method: "get",
//       maxBodyLength: Infinity,
//       url: `https://trial-3955846.okta.com/oauth2/default/v1/authorize?client_id=0oa6tkkokcYByqOsx697&response_type=code&response_mode=query&scope=openid email profile&redirect_uri=com.okta.trial-3955846:/callback&state=200&nonce=500`,
//       headers: {
//         // Accept: "application/json",
//         // Authorization: "Basic " + base64ClientCredentials,
//         // "Content-Type": "application/x-www-form-urlencoded",
//       },
    
//     };
//     axios
//       .request(config1).then((response)=>{
//    //  console.log(response);
//      window.location.href=response;
//       })
//     }, [])
//const resp = searchParams.get("code");
//let codee;

useEffect(() => {
  
  }, []);
    const login=()=>{
        
    console.log('runns');
    
          
            axios.post(`https://us-central1-askmeidentity-website-ppe.cloudfunctions.net/as/sso/login`, {
                // email: usernameValue,
                // password: passwordValue,
                 code:code,
              }).then((res)=>{
               console.log(res);
               localStorage.setItem('user', JSON.stringify(res.data));

               history.push('/profile');

               
              }).catch((err)=>{
                console.log(err);
                
                
              })
      return
            // You can perform login logic here
          
        
       
    }
  
  return (

    <>
      <IonAlert
        isOpen={true}  // Open the alert immediately when the component mounts
        header="Alert"
        subHeader="Important message"
        message="This is an alert!"
        buttons={['OK']}
      ></IonAlert>
    {/* <IonButton onClick={login}>
                Login
                </IonButton> */}
             {
               (code)? ( <IonPage>
                <IonHeader>
                  <IonToolbar>
                    <IonTitle>Login</IonTitle>
                  </IonToolbar>
                </IonHeader>
               <IonContent className='ion-padding'>
                 
                  <IonRow  className='ion-padding'>
                        <IonCol>
                          <IonButton onClick={() => login()}>
                         Get Login
                          </IonButton>
                        </IonCol>
                    </IonRow>
               </IonContent>
              </IonPage>):(  <IonTitle>Loading okta Login</IonTitle>)
             } 
   
    </>
  );
};

export default Login;
