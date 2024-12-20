import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from "@ionic/react"
import ListaExercicio from "../ListaExercicios"
import { questõesGeometriaAnalitica } from "./QuestõesMat"

const GeometriaAnalitica: React.FC = () =>{
    return(
       <IonAccordionGroup>
            <IonAccordion value="1">
                <IonItem slot="header" color={'warning'}>
                    <IonLabel>Fundamentação teórica</IonLabel>
                </IonItem>
                <div className="ion-padding Categoria" slot="content" >
                    <p>
                        Clique no botão abaixo que você será levado para um site que tem a teoria 
                        da matéria de geometria analitica
                    </p>
                    <IonButton color={"warning"}>
                        <a 
                        href="https://aprovatotal.com.br/geometria-analitica/"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Site sobre Geometria analitica
                        </a>
                    </IonButton>
                </div>
            </IonAccordion>
            <IonAccordion value="2">
                    <IonItem slot="header" color={"warning"}>
                        <IonLabel>VideoAula com a matéria</IonLabel>
                    </IonItem>
                    <div className="ion-padding Categoria" slot="content" >
                    <iframe 
                        src="https://www.youtube.com/embed/videoseries?si=KbSf1ta5PAx_fNib&amp;list=PLEfwqyY2ox858XssXB_f-Jx42fgTb0Vsn" 
                        title="YouTube video player" 
                    >
                    </iframe>    
                    </div>
            </IonAccordion>
            <IonAccordion value="3">
                <IonItem slot="header" color={'warning'}>
                    <IonLabel>Alguns exercicios</IonLabel>
                </IonItem>
                <div className="ion-padding Categoria" slot="content">
                    <ListaExercicio questions={questõesGeometriaAnalitica} />
                </div>
            </IonAccordion>
       </IonAccordionGroup>
    )
}

export default GeometriaAnalitica
