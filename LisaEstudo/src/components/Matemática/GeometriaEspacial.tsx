import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from "@ionic/react"
import ListaExercicio from "../ListaExercicios"
import { QuestõesAlgebra, questõesGeometriaEspacial } from "./QuestõesMat"

const GeometriaEspacial: React.FC = () => {
    return(
        <IonAccordionGroup>
            <IonAccordion value="1">
                <IonItem slot="header" color="warning">
                    <IonLabel>Fundamentaão téorica</IonLabel>
                </IonItem>
                <div className="ion-padding Categoria" slot="content" >
                    <p>
                        Clique no botão abaixo para ser levado para um site que mostra a fundamentação
                        da geometria espacial.
                    </p>
                    <IonButton color="tertiary">
                        <a 
                        href="https://brasilescola.uol.com.br/matematica/geometria-espacial.htm"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Fundamentação teórica geometria espacial
                        </a>
                    </IonButton>
                </div>
            </IonAccordion>
            <IonAccordion value="2">
                <IonItem slot="header" color="warning">
                    <IonLabel>Videoaula com a matéria</IonLabel>
                </IonItem>
                <div className="ion-padding Categoria" slot="content" >
                <iframe
                    src="https://www.youtube.com/embed/videoseries?si=IoIZKLQThSlhkT83&amp;list=PLEfwqyY2ox87GYPpLcP1kv2Nt9xu0oBTy" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                >

                </iframe>
                </div>
            </IonAccordion>
            <IonAccordion value="3">
                <IonItem slot="header" color={"warning"}>
                    <IonLabel> Alguns exerciocios</IonLabel>
                </IonItem>
                <div className="ion-padding Categoria" slot="content">
                    <ListaExercicio questions={questõesGeometriaEspacial} />
                    <br />
                    <IonButton color={'secondary'}>
                        <a 
                        href="https://exercicios.brasilescola.uol.com.br/exercicios-matematica/exercicios-sobre-geometria-espacial.htm"
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        >
                            Clique para mais exercicios sobre a matéria
                        </a>
                    </IonButton>
                </div>
            </IonAccordion>
        </IonAccordionGroup>
    )
}

export default GeometriaEspacial