import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from "@ionic/react"
import "./ConponentesMat.css"
import GeometriaPlana from "./GeometriaPlana"
import GeometriaEspacial from "./GeometriaEspacial"
import GeometriaAnalitica from "./GeometriaAnalistica"

const Geometria: React.FC = () =>{
    return(
        <IonAccordionGroup>
            <IonAccordion value="child1">
                <IonItem slot="header" color="dark" >
                    <IonLabel>Geometria plana</IonLabel>
                </IonItem>
                <div className="ion-padding custom-background" slot="content">
                   <GeometriaPlana/>
                </div>
            </IonAccordion>
            <IonAccordion value="child2">
                <IonItem slot="header" color="dark">
                    <IonLabel>Geometria espacial</IonLabel>
                </IonItem>
                <div className="ion-padding custom-background" slot="content">
                    <GeometriaEspacial/>
                </div>
            </IonAccordion>
            <IonAccordion value="child3">
                <IonItem slot="header" color={'dark'}>
                    <IonLabel>Geometria analitica</IonLabel>
                </IonItem>
                <div className="ion-padding custom-background" slot="content">
                    <GeometriaAnalitica/>
                </div>
            </IonAccordion>
        </IonAccordionGroup>
    )
}

export default Geometria