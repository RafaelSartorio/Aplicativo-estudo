import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from "@ionic/react"
import "./ConponentesMat.css"
import ListaExercicio from "../ListaExercicios"
import Algebra from "./Algebra"
import { questionsBasic, questõesGeometriaPlana } from "./QuestõesMat"
import GeometriaPlana from "./GeometriaPlana"
import GeometriaEspacial from "./GeometriaEspacial"

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
        </IonAccordionGroup>
    )
}

export default Geometria