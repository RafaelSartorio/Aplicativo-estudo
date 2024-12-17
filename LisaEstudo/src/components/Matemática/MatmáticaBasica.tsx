import { IonAccordion, IonAccordionGroup, IonButton, IonCard, IonCardContent, IonCheckbox, IonItem, IonLabel, IonList } from "@ionic/react";
import { useState } from "react";
import { QuestõesAlgebra, questionsBasic } from "./QuestõesMat";
import ListaExercicio from "../ListaExercicios";

const MatemáticaBasica: React.FC = () =>{
    //Estado que serve para ver e mostrar o resultado para o usuario.       
    return(
        <IonAccordionGroup>
            <IonAccordion value="child">
                <IonItem slot="header" color='warning'>
                    <IonLabel>Fundamentação teórica</IonLabel>
                </IonItem>
                            <div slot="content" className="ion-padding Categoria">
                                <p>
                                    Clique no botão abaixo para ser direcionado a um livro do escritor Fernando Luís Vieira de Sousa 
                                    onde nele tem presente a teoria sobre Matemáica basica
                                </p>
                                <IonButton color="warning">
                                    <a 
                                        href="https://educapes.capes.gov.br/bitstream/capes/206523/2/Matem%C3%A1tica%20B%C3%A1sica%20I-Livro.pdf" target="_blank" rel="noopener noreferrer"
                                        style={{ textDecoration: 'none', color: 'inherit' }} >
                                        Livro matmática básica
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
                                        src="https://www.youtube.com/embed/videoseries?list=PLTPg64KdGgYgFpOFt2TETLdEuBB4fvxxf"
                                        title="Playlist de Matemática"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen 
                                                
                                    />
                                </div>
                </IonAccordion>
                <IonAccordion value="child3">
                    <IonItem slot="header" color='warning'>
                        <IonLabel>Alguns exercicios de matemática básica</IonLabel>
                    </IonItem>
                    <div slot="content" className="ion-padding Categoria">
                        <ListaExercicio questions={questionsBasic} /> 
                        <br></br>
                        <IonButton color='warning'>
                            <a
                            style={{ textDecoration: 'none', color: 'inherit' }}  
                            href="https://exercicios.brasilescola.uol.com.br/exercicios-matematica/30-exercicios-de-matematica-basica.htm">
                                Clique aqui para mais exerciciosde matemática básica com gabarito
                            </a>
                        </IonButton>
                    </div>
                </IonAccordion>
        </IonAccordionGroup>
    );
}

export default MatemáticaBasica