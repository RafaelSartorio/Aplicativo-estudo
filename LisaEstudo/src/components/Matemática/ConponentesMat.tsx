import { IonAccordion, IonAccordionGroup, IonButton, IonContent, IonIcon, IonItem, IonLabel } from "@ionic/react";
import './ConponentesMat.css'
import MatemáticaBasica from "./MatmáticaBasica";
import Aritimética from "./Aritimética";

const ComponentesMat: React.FC = () =>{
    return(
        <IonContent>
            <IonAccordionGroup>
                <div className="header">
                    <h1>Materias de Matemática</h1>
                </div>
                <IonAccordion value="1">
                    <IonItem slot="header" color='dark'>
                        <IonLabel>Matemáica Básica</IonLabel>
                    </IonItem>
                    <div className="ion-padding custom-background" slot="content" >
                      <MatemáticaBasica/>
                    </div>
                </IonAccordion>
                <IonAccordion value="2">
                    <IonItem slot="header" color='dark'>
                        <IonLabel>Aritimética</IonLabel>
                    </IonItem>
                    <div className="ion-padding custom-background" slot="content" >
                        <Aritimética/>
                    </div>
                </IonAccordion>
                
                
            </IonAccordionGroup>
        </IonContent>
    );
}

export default ComponentesMat

