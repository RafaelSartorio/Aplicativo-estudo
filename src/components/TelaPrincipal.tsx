import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent } from "@ionic/react";
import React from "react";
import './CSS/Telaprincipal.css'
import './Images/teste.png'
import { Link } from "react-router-dom";

const TelaPrincipal: React.FC = () => {
  return (
    <>
        <div className="centralizado">
            <div className="Teste">
                <h1>Seja bem vindo</h1>
                <h2>Escolha a matéria</h2>
            </div>
            <IonContent scrollY={true} >
              <IonButton fill="clear" size="small" routerLink="/MatConteudos">
                <IonCard className="MatmaticaCard">
                    <IonCardHeader>
                        <img 
                          src="https://hotmart.s3.amazonaws.com/product_contents/357a5a39-8744-4398-900c-12aac6957648/Matemtica.png"                      
                          alt="Imagen"
                          width='400px'
                          height='200px'
                        />
                        <IonCardTitle>Matématica</IonCardTitle>
                        <IonCardSubtitle>Do básico ao avançado</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      Aqui teremos uma sequência de conteúdos que vão do básico ao avançado 
                    </IonCardContent>
                </IonCard>
              </IonButton>
              
            </IonContent>

        </div>
    </>
  );
};

export default TelaPrincipal;