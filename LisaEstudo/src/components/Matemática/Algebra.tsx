import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from "@ionic/react"
import ListaExercicio from "../ListaExercicios"
import { QuestõesAlgebra } from "./QuestõesMat"

const Algebra: React.FC = () =>{
    return(
        <IonAccordionGroup value='filho1'>
            <IonAccordion value="child">
                <IonItem slot="header" color='warning'>
                   <IonLabel>Fundamentação teórica</IonLabel>
                </IonItem>
                <div slot="content" className="ion-padding Categoria">
                    <p>
                        Abaixo estará um link que levará para uma pagina do site mundo da educação onde ele mostrará 
                        a Fundamentação teórica sobre Algebra 
                    </p>
                    <IonButton color="warning">
                       <a 
                            href="https://mundoeducacao.uol.com.br/matematica/algebra.htm"
                            target="_blank" rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }} 
                            >
                               Site de Aritimética
                            </a>
                    </IonButton>
                </div>
            </IonAccordion>
            <IonAccordion value="child2">
                <IonItem slot="header" color='warning'>
                    <IonLabel>Playlist com videos das aulas</IonLabel>
                </IonItem>
                <div slot="content" className="ion-padding Categoria">
                <iframe 
                    src="https://www.youtube.com/embed/videoseries?si=sC0ICFXmreyYGM-m&amp;list=PLEfwqyY2ox858I4pyFQas8vqz4Vc7eTju" 
                    title="YouTube video player"  
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                >
                </iframe>
                </div>
            </IonAccordion>
            <IonAccordion value="child3">
                <IonItem slot="header" color='warning'>
                    <IonLabel>Lista com alguns exerciocios sobre algebra</IonLabel>
                </IonItem>
                <div slot="content" className="ion-padding Categoria">
                    <ListaExercicio questions={QuestõesAlgebra} />
                    <br></br>
                    <IonButton color='success'>
                        <a 
                        style={{ textDecoration: 'none', color: 'inherit' }}
                        href="https://exercicios.brasilescola.uol.com.br/exercicios-matematica/exercicios-sobre-expressao-algebrica.htm"
                        >
                            Para mais questões sobre algebra
                        </a>
                    </IonButton>
                </div>
            </IonAccordion>
        </IonAccordionGroup>
    )
}

export default Algebra