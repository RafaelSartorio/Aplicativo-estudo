import { IonAccordion, IonAccordionGroup, IonButton, IonItem, IonLabel } from "@ionic/react"

const Aritimética: React.FC = () =>{
    return(
        <IonAccordionGroup value='filho1'>
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
                            href="https://educapes.capes.gov.br/bitstream/capes/206523/2/Matem%C3%A1tica%20B%C3%A1sica%20I-Livro.pdf"
                            target="_blank" rel="noopener noreferrer"
                            style={{ textDecoration: 'none', color: 'inherit' }} 
                            >
                               Livro matmática básica
                            </a>
                    </IonButton>
                </div>
            </IonAccordion>
        </IonAccordionGroup>
    )
}

export default Aritimética