 export const questionsBasic = [
    {
      id: "q1",
        question: "(Enem 2020) Uma torneira está gotejando água em um balde com capacidade de 18 litros. No instante atual, o balde se encontra com ocupação de 50% de sua capacidade. A cada segundo caem 5 gotas de água da torneira, e uma gota é formada, em média, por 5×10-2 ml de água.Quanto tempo, em hora, será necessário para encher completamente o balde, partindo do instante atual? ",
      options: [
        { id: "a", text: "2x10<sup>-1<sup/>", isCorrect: false },
        { id: "b", text: "1x10<sup>1<sup/>", isCorrect: true },
        { id: "c", text: "2x10<sup>-2<sup/>", isCorrect: false },
        { id: "d", text: "1x10<sup>-2<sup/>", isCorrect: false },
        { id: "e", text: "1x10<sup>-3<sup/>", isCorrect: false },
      ],
    },
    {
      id: "q2",
      question: "(Enem 2020) Um motociclista planeja realizar uma viagem cujo destino fica a 500 km de sua casa. Sua moto consome 5 litros de gasolina para cada 100 km rodados, e o tanque da moto tem capacidade para 22 litros. Pelo mapa, observou que no trajeto da viagem o último posto disponível para reabastecimento, chamado Estrela, fica a 80 km do seu destino. Ele pretende partir com o tanque da moto cheio e planeja fazer somente duas paradas para reabastecimento, uma na ida e outra na volta, ambas no posto Estrela. No reabastecimento para a viagem de ida, deve considerar também combustível suficiente para se deslocar por 200 km no seu destino.A quantidade mínima de combustível, em litro, que esse motociclista deve reabastecer no posto Estrela na viagem de ida, que seja suficiente para fazer o segundo reabastecimento, é ",
      options: [
        { id: "a", text: "13", isCorrect: false },
        { id: "b", text: "14", isCorrect: false },
        { id: "c", text: "17", isCorrect: true },
        { id: "d", text: "18", isCorrect: false },
        { id: "e", text: "21", isCorrect: false },
      ],
    },
    {
      id: "q3",
      question: "Na imagem, tem-se a informação dos assentos já vendidos e dos ainda disponíveis em determinado instante. A razão entre o número de assentos já vendidos e o total de assentos desse ônibus, no instante considerado na imagem, é",
      options: [
        { id: "a", text: "16</sup>/42", isCorrect: true },
        { id: "b", text: "16</sup>/26", isCorrect: false },
        { id: "c", text: "26</sup>/42", isCorrect: false },
        { id: "d", text: "42</sup>/26", isCorrect: false },
        { id: "e", text: "42</sup>/16", isCorrect: false },
      ],
      image:"https://s2.static.brasilescola.uol.com.br/exercicios/2024/10/questao-tres-matematica-basica.jpg",
    },

    {
      id: "q3",
      question: "(IFG 2012) As medidas internas de um reservatório no formato de um paralelepípedo são de 2,5m de comprimento, 1,8m de largura e 1,2m de profundidade (altura). Se em determinado momento do dia esse reservatório está apenas com 70% de sua capacidade, a quantidade de litros que faltam para encher esse reservatório é igual a:",
      options: [
        { id: "a", text: "1620", isCorrect: true },
        { id: "b", text: "1630", isCorrect: false },
        { id: "c", text: "1640", isCorrect: false },
        { id: "d", text: "1650", isCorrect: false },
      ],
    },
    {
      id: "q4",
      question: "(Enem 2014) Os incas desenvolveram uma maneira de registrar quantidades e representar números utilizando um sistema de numeração decimal posicional: um conjunto de cordas com nós denominado quipus. O quipus era feito de uma corda matriz, ou principal (mais grossa que as demais), na qual eram penduradas outras cordas, mais finas, de diferentes tamanhos e cores (cordas pendentes). De acordo com a sua posição, os nós significavam unidades, dezenas, centenas e milhares Na Figura 1, o quipus representa o número decimal 2453. Para representar o “zero” em qualquer posição, não se coloca nenhum nó.",
      options: [
        { id: "a", text: "364", isCorrect: false },
        { id: "b", text: "463", isCorrect: false },
        { id: "c", text: "3640", isCorrect: true },
        { id: "d", text: "1650", isCorrect: false },
        { id: "e", text: "4603", isCorrect: false },
      ],
      image:"https://s3.static.brasilescola.uol.com.br/exercicios/2024/10/imagem-questao5.jpg"
    },
  ];
   
  export const QuestõesAlgebra = [
    {
        id: "1",
        question: "Durante a resolução de exercícios sobre expressões algébricas, o professor pediu para que os alunos realizassem a simplificação da expressão 8(3 – 5x) + 4(3x – 6). Se a simplificação for feita  matematicamente, o polinômio encontrado será:",
        options: [
          { id: "a", text: " 28x + 24", isCorrect: false },
          { id: "b", text: "-12", isCorrect: false },
          { id: "c", text: "-14x + 12", isCorrect: false },
          { id: "d", text: "-28x", isCorrect: true },
          { id: "e", text: "52x + 48", isCorrect: false },
        ],
      },

      {
        id: "2",
        question: "Um quadrado possui a medida dos seus lados iguais a (x + 3). Sabendo que a área de um quadrado é igual ao quadrado do seu lado, então a área do quadrado em questão é igual a:",
        options: [
          { id: "a", text: "x<sup>2</sup>+ 3", isCorrect: false },
          { id: "b", text: "x<sup>3</sup>+ 9", isCorrect: false },
          { id: "c", text: "x<sup>2</sup>+ 6x", isCorrect: false },
          { id: "d", text: "x<sup>2</sup>+ 6x + 9", isCorrect: true },
          { id: "e", text: "x<sup>2</sup>+ 6x + 3", isCorrect: false },
        ],
      },

      {
        id: "3",
        question: "Dadas as expressões algébricas a seguir, marque aquela que pode ser classificada como um binômio:",
        options: [
          { id: "a", text: "1bx<sup>2</sup>", isCorrect: false },
          { id: "b", text: "3b + 2x", isCorrect: true },
          { id: "c", text: "2bx", isCorrect: false },
          { id: "d", text: "2x + 3y + z", isCorrect: false },
          { id: "e", text: "2", isCorrect: false },
        ],
      },

      {
        id: "4",
        question: "Dadas as expressões algébricas A: 2x + 3y + 4 e B: 5x – 3y, então o valor de A + B será:",
        options: [
          { id: "a", text: "11xy", isCorrect: false },
          { id: "b", text: "7x + y + 4", isCorrect: false },
          { id: "c", text: " 7x + 4", isCorrect: true },
          { id: "d", text: "5x – 4", isCorrect: false },
          { id: "e", text: "7x – y", isCorrect: false },
        ],
      },

      {
        id: "5",
        question: "Sabendo que a área do retângulo é o produto dos seus lados, então a expressão algébrica que representa a área do retângulo acima é:",
        options: [
          { id: "a", text: "2x<sup>2</sup> + 5", isCorrect: false },
          { id: "b", text: "4x<sup>2</sup>+25", isCorrect: false },
          { id: "c", text: "4x<sup>2</sup>-25", isCorrect: true },
          { id: "d", text: "4x<sup>2</sup>- 10x + 25", isCorrect: false },
          { id: "e", text: "4x<sup>2</sup>+ 20x - 25", isCorrect: false },
        ],
        image:"https://s4.static.brasilescola.uol.com.br/exercicios/2022/05/1-retangulo-roxo-claro.jpg"
      },
  ]

  export const questõesGeometriaPlana = [
    {
      id: "1",
        question: "(Enem 2016)  Um senhor, pai de dois filhos, deseja comprar dois terrenos, com áreas de mesma medida, um para cada filho. Um dos terrenos visitados já está demarcado e, embora não tenha um formato convencional (como se observa na Figura B), agradou ao filho mais velho e, por isso, foi comprado. O filho mais novo possui um projeto arquitetônico de uma casa que quer construir, mas, para isso, precisa de um terreno na forma retangular (como mostrado na Figura A) cujo comprimento seja  7 m  maior do que a largura. Para satisfazer o filho mais novo, esse senhor precisa encontrar um terreno retangular cujas medidas, em metro, do comprimento e da largura sejam iguais, respectivamente, a ",
        options: [
          { id: "a", text: "7,5 e 14,5.", isCorrect: false },
          { id: "b", text: "9,0 e 16,0.", isCorrect: true },
          { id: "c", text: " 9,39,3 e 16,3.", isCorrect: false },
          { id: "d", text: "10,0 e 17,0.", isCorrect: false },
          { id: "e", text: "13,5 e 20,5.", isCorrect: false },
        ],
        image:"https://s2.static.brasilescola.uol.com.br/exercicios/2021/10/representacao-area-dois-terrenos.jpg"
    },

      {
        id: "2",
            question: "(Enem 2019) Uma administração municipal encomendou a pintura de dez placas de sinalização para colocar em seu pátio de estacionamento.  O profissional contratado para o serviço inicial pintará o fundo de dez placas e cobrará um valor de acordo com a área total dessas placas. O formato de cada placa é um círculo de diâmetro d = 40 cm, que tangencia lados de um retângulo, sendo que o comprimento total da placa é h = 60 cm, conforme ilustrado na figura. Use 3,14 como aproximação para π. Qual é a soma das medidas das áreas, em centímetros quadrados, das dez placas? ",
            options: [
              { id: "a", text: "16.628", isCorrect: false },
              { id: "b", text: "22.280", isCorrect: true },
              { id: "c", text: "28.560.", isCorrect: false },
              { id: "d", text: "41.120", isCorrect: false },
              { id: "e", text: "66.240", isCorrect: false },
            ],
            image:"https://s4.static.brasilescola.uol.com.br/exercicios/2021/10/placa-proibido-estacionar.jpg"
      },
    
      {
        id: "3",
            question: "Um brinquedo chamado pula-pula, quando visto de cima, consiste de uma cama elástica com contorno em formato de um hexágono regular. Se a área do círculo inscrito no hexágono é 3π metros quadrados, então a área do hexágono, em metro quadrado, é: ",
            options: [
              { id: "a", text: "9", isCorrect: false },
              { id: "b", text: "6√3", isCorrect: true },
              { id: "c", text: "9√2", isCorrect: false },
              { id: "d", text: "12", isCorrect: false },
              { id: "e", text: "12√3", isCorrect: false },
            ],
            image:"https://s2.static.brasilescola.uol.com.br/exercicios/2021/10/cama-elastica-hexagono-regular.jpg"
      },

      {
        id: "4",
            question: "(Enem 2020 - digital) Uma empresa deseja construir um edifício residencial de 12 pavimentos, num lote retangular de lados medindo 22 e 26 m. Em 3 dos lados do lote serão construídos muros. A frente do prédio será sobre o lado do lote de menor comprimento. Sabe-se que em cada pavimento 32 m2 serão destinados à área comum (hall de entrada, elevadores e escada), e o restante da área será destinado às unidades habitacionais. A legislação vigente exige que prédios sejam construídos mantendo distâncias mínimas dos limites dos lotes onde se encontram. Em obediência à legislação, o prédio ficará 5 m afastado da rua onde terá sua entrada, 3 m de distância do muro no fundo do lote e 4 m de distância dos muros nas laterais do lote, como mostra a figura. A área total, em metro quadrado, destinada às unidades habitacionais desse edifício será de ",
            options: [
              { id: "a", text: "2640", isCorrect: true },
              { id: "b", text: "3024", isCorrect: false },
              { id: "c", text: "3840", isCorrect: false },
              { id: "d", text: "6480", isCorrect: false },
              { id: "e", text: "6864", isCorrect: false },
            ],
            image:"https://s1.static.brasilescola.uol.com.br/exercicios/2021/10/planta-edificio-residencial.jpg"
      },
      {
        id: "5",
            question: "(Enem) João tem uma loja onde fabrica e vende moedas de chocolate com diâmetro de 4 cm e preço de R$ 1,50 a unidade. Pedro vai a essa loja e, após comer várias moedas de chocolate, sugere ao João que ele faça moedas com 8 cm de diâmetro e mesma espessura e cobre R$ 3 a unidade. Considerando que o preço da moeda depende apenas da quantidade de chocolate, João",
            options: [
              { id: "a", text: "aceita a proposta de Pedro, pois, se dobra o diâmetro, o preço também deve dobrar.", isCorrect: false },
              { id: "b", text: "rejeita a proposta de Pedro, pois o preço correto seria R$ 12.", isCorrect: false },
              { id: "c", text: "rejeita a proposta de Pedro, pois o preço correto seria R$ 7,50.", isCorrect: false },
              { id: "d", text: "rejeita a proposta de Pedro, pois o preço correto seria R$ 6", isCorrect: true },
              { id: "e", text: "rejeita a proposta de Pedro, pois o preço correto seria R$ 4,50.", isCorrect: false },
            ],
            image:"https://s1.static.brasilescola.uol.com.br/exercicios/2021/10/planta-edificio-residencial.jpg"
      },
  ]

  export const questõesGeometriaEspacial = [
    {
      id: "1",
          question: "Das formas geométricas a seguir, marque a alternativa que possui somente sólidos geométricos:",
          options: [
            { id: "a", text: "cilindro, círculo, cone", isCorrect: false },
            { id: "b", text: "esfera, quadrado, triângulo", isCorrect: false },
            { id: "c", text: "pirâmide, cone, prisma", isCorrect: true },
            { id: "d", text: "circunferência, prisma, pirâmide", isCorrect: false },
            { id: "e", text: "pirâmide, trapézio, esfera", isCorrect: false },
          ],
    },

    {
      id: "2",
          question: "Durante o planejamento da construção de um posto de combustível, o engenheiro responsável estava pesquisando sobre o tamanho do reservatório de combustível a ser construído. O reservatório de um posto é sempre subterrâneo, e, nesse caso, ele deveria ter capacidade para 24 m³, comportando, portanto, 24 mil litros de combustível. Sabendo que esse reservatório possui formato de um paralelepípedo retângulo, o engenheiro o construiu com 3 metros de largura e 4 metros de comprimento para que ele tenha os 24 m³ desejados. A profundidade desse reservatório deve ser de:",
          options: [
            { id: "a", text: "2 metros", isCorrect: true },
            { id: "b", text: "3 metros", isCorrect: false },
            { id: "c", text: "4 metros", isCorrect: false },
            { id: "d", text: "5 metros", isCorrect: false },
            { id: "e", text: "6 metros", isCorrect: false },
          ],
    },

    {
      id: "3",
          question: "Um recipiente possui formato de um prisma com as dimensões na imagen acima, Sabendo que 2/3 do volume desse recipiente estão ocupados, então o volume não ocupado é igual a:",
          options: [
            { id: "a", text: "200 cm³", isCorrect: false },
            { id: "b", text: "300 cm³", isCorrect: true },
            { id: "c", text: "500 cm³", isCorrect: false },
            { id: "d", text: "600 cm³", isCorrect: false },
            { id: "e", text: "900 cm³", isCorrect: false },
          ],
    },

    {
      id: "4",
          question: "Uma caixa possui formato de um paralelepípedo reto com 25 cm de largura, 42 cm de altura e 36 cm de altura. A área total dessa caixa mede:",
          options: [
            { id: "a", text: "3462 cm²", isCorrect: false },
            { id: "b", text: "6924 cm²", isCorrect: true },
            { id: "c", text: "8000 cm²", isCorrect: false },
            { id: "d", text: "9510 cm²", isCorrect: false },
            { id: "e", text: "10.369 cm²", isCorrect: false },
          ],
    },

    {
      id: "5",
          question: "Um reservatório de gás oxigênio foi construído no formato de um cilindro com 1,5 metros de altura e 60 centímetros de diâmetro. Nessas condições, podemos afirmar que o volume desse reservatório em metros cúbicos é de aproximadamente:  (use π=3,1)",
          options: [
            { id: "a", text: " 0,40", isCorrect: false },
            { id: "b", text: "0,42", isCorrect: true },
            { id: "c", text: "0,44", isCorrect: false },
            { id: "d", text: "0,46", isCorrect: false },
            { id: "e", text: "0,48", isCorrect: false },
          ],
    },
  ]

  export const questõesGeometriaAnalitica = [
    
  ]
    

