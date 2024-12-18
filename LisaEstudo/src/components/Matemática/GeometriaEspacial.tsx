import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from "@ionic/react"

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
        </IonAccordionGroup>
    )
}

export default GeometriaEspacial