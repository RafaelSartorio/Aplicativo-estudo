import { IonButton, IonCard, IonCardContent, IonCheckbox, IonItem, IonLabel, IonList } from "@ionic/react";
import { useState } from "react";

// Tipagem para as questões
type Question = {
  image?: any;
  id: string;
  question: string;
  options: { id: string; text: string; isCorrect: boolean }[];
};

type ListaExercicioProps = {
  questions: Question[];
};

const ListaExercicio: React.FC<ListaExercicioProps> = ({ questions }) => {
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: string]: string[] }>({});
  const [showResults, setShowResults] = useState(false);

  const handleOpitionChange = (questionId: string, optionId: string, isChecked: boolean) => {
    const currentAnswers = selectedAnswers[questionId] || [];
    const updatedAnswers = isChecked
      ? [...currentAnswers, optionId]
      : currentAnswers.filter((id) => id !== optionId);

    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: updatedAnswers,
    });
  };

  const checkAnswers = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setSelectedAnswers({});
    setShowResults(false);
  };

  return (
    <>
      <IonList>
        {showResults ? (
          // Exibir resultados
          <div>
            <h3>Resultados</h3>
            {questions.map((q) => {
              const userAnswers = selectedAnswers[q.id] || [];
              const correctAnswers = q.options
                .filter((option) => option.isCorrect)
                .map((option) => option.id);
              const isCorrect =
                userAnswers.length === correctAnswers.length &&
                userAnswers.every((ans) => correctAnswers.includes(ans));

              return (
                <IonCard key={q.id}>
                  <IonCardContent>
                    <p>{q.question}</p>
                    
                    <p>
                      Suas respostas:{" "}
                      <b>{userAnswers.length > 0 ? userAnswers.join(", ") : "Nenhuma"}</b>
                    </p>
                    <p>
                      {isCorrect ? (
                        <span style={{ color: "green" }}>Correto!</span>
                      ) : (
                        <span style={{ color: "red" }}>
                          Errado (Respostas corretas: {correctAnswers.join(", ")})
                        </span>
                      )}
                    </p>
                  </IonCardContent>
                </IonCard>
              );
            })}
            <IonButton expand="block" onClick={resetQuiz}>
              Refazer Exercícios
            </IonButton>
          </div>
        ) : (
          questions.map((q) => (
            <IonCard key={q.id}>
              <IonCardContent>
              {q.image && (
                <img
                    src={q.image}
                    alt="Ilustração"
                    style={{
                    width: "100%",
                    height: "auto",
                    marginBottom: "16px",
                    borderRadius: "8px",
                    }}
                />
                )}
                <p>{q.question}</p>
                {q.options.map((option) => (
                  <IonItem key={option.id}>
                    <IonLabel>
                    <span
                        dangerouslySetInnerHTML={{ __html: option.text }} // Aplica HTML ao texto
                      />
                       
                    </IonLabel>
                    <IonCheckbox
                      slot="start"
                      onIonChange={(e) =>
                        handleOpitionChange(q.id, option.id, e.detail.checked)
                      }
                    />
                  </IonItem>
                ))}
              </IonCardContent>
            </IonCard>
          ))
        )}
      </IonList>
      {!showResults && (
        <IonButton expand="block" color="success" onClick={checkAnswers}>
          Confirmar Respostas
        </IonButton>
      )}
    </>
  );
};

export default ListaExercicio;
