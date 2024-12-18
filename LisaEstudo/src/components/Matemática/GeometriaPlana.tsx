import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from "@ionic/react"
import ListaExercicio from "../ListaExercicios"
import { questõesGeometriaPlana } from "./QuestõesMat"

const GeometriaPlana: React.FC = () => {
    return(
        <IonAccordionGroup>
        <IonAccordion value="10">
            <IonItem slot="header" color="warning">
                <IonLabel>Fundamentação teórica</IonLabel>
            </IonItem>
            <div className="ion-padding Categoria" slot="content">
                <p>
                   Clique no botão abaixo para ser levado a um site que conta a teoria sobre
                   geometria plana. 
                </p>
                <br />
                <IonButton color="tertiary">
                    <a
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        href="https://brasilescola.uol.com.br/matematica/geometria-plana.htm"
                    >
                    Fundamentação téorica Geometria plana        
                    </a>
                </IonButton>
            </div>
        </IonAccordion>
        <IonAccordion value="20">
            <IonItem slot="header" color="warning">
                <IonLabel>Playlist com videoaulas sobre as matérias</IonLabel>
            </IonItem>
            <div className="ion-padding Categoria" slot="content">
                <iframe 
                    
                    src="https://www.youtube.com/embed/videoseries?si=jTJ8Gy4zINzBmax-&amp;list=PLEfwqyY2ox86GfOHvSgN5iJZKNN_AUlU_" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                >
                </iframe>
            </div>
        </IonAccordion>
        <IonAccordion value="30">
            <IonItem slot="header" color="warning">
                <IonLabel>Alguns exercicios sobre Geometria plana</IonLabel>
            </IonItem>
            <div className="ion-padding Categoria" slot="content" >
                <ListaExercicio questions={questõesGeometriaPlana} />
                <br />
                <IonButton>
                    <a 
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        href="https://exercicios.brasilescola.uol.com.br/exercicios-matematica/enem-lista-de-exercicios-sobre-areas-de-figuras-planas.htm"
                    >
                        Clique aqui para mais exercicios sobre geometria plana
                    </a>
                </IonButton>
            </div>
        </IonAccordion>
    </IonAccordionGroup>
    )
}

export default GeometriaPlana