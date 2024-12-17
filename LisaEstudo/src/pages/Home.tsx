import { IonPage } from '@ionic/react';
import './Home.css';
import TelaPrincipal from '../components/TelaPrincipal';


const Home: React.FC = () => {
  return (
    <IonPage>
      <TelaPrincipal/>
    </IonPage>
  );
};

export default Home;
