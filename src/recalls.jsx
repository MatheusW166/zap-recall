const recalls = {
  reactjs: [
    {
      question: "O que é JSX?",
      answer: "Uma extensão de linguagem do JavaScript.",
    },
    {
      question: "O React é __",
      answer: "Uma biblioteca JavaScript para construção de interfaces.",
    },
    {
      question: "Componentes devem iniciar com __",
      answer: "Letra maiúscula.",
    },
    {
      question: "Podemos colocar __ dentro do JSX",
      answer: "Expressões.",
    },
    {
      question: "O ReactDOM nos ajuda __",
      answer: "Interagindo com a DOM para colocar componentes React na mesma.",
    },
    {
      question: "Usamos o npm para __",
      answer: "Gerenciar os pacotes necessários e suas dependências.",
    },

    {
      question: "Usamos props para __",
      answer: "Passar diferentes informações para componentes.",
    },
    {
      question: "Usamos estado (state) para __",
      answer:
        "Dizer para o React quais informações quando atualizadas devem renderizar a tela novamente.",
    },
  ],
  bullyMaguire: [
    {
      question:
        "Qual o nome do laboratório que criou a aranha que mordeu Peter Parker?",
      answer: "Oscorp",
    },
    {
      question:
        "O que Peter diz ao testar seu poder de lançar teias pela primeira vez?",
      answer: "Shazam!",
    },
    {
      question: "Para quem Peter diz 'Isso não é problema meu'",
      answer: "Dono da arena de luta",
    },
  ],
};

const recallsOptions = [
  { value: "reactjs", text: "ReactJS" },
  { value: "bullyMaguire", text: "Homem Aranha" },
];

export default recalls;
export { recallsOptions };
