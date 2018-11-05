const ANSWER_DOM = document.querySelectorAll(".answer-section")[0];
const COUNT_DOM = document.querySelectorAll(".count-indicator")[0];
const BUTTON = document.querySelectorAll(".generate-button")[0];
const questions = [
    { id: 0, content: "가장 좋아하는 색은 무엇입니까?" },
    { id: 1, content: "What is your favorite food?" },
    { id: 2, content: "What is the meaning of ESC?" }
];
const solvedQuestions = [];
BUTTON.addEventListener("click", handleClickButton);
function handleClickButton(e) {
    e.preventDefault();
    if (questions.length === 0) {
        return;
    }
    const index = Math.floor(Math.random() * questions.length);
    const targetQuestion = questions[index];
    solvedQuestions.push(targetQuestion);
    questions.splice(index, 1);
    render(targetQuestion);
}
function renderCountDom() {
    COUNT_DOM.innerHTML = `${solvedQuestions.length} / ${questions.length +
        solvedQuestions.length}`;
}
function renderQuestion(question) {
    ANSWER_DOM.innerHTML = question.content;
}
function render(question) {
    renderQuestion(question);
    renderCountDom();
}
renderCountDom();
//# sourceMappingURL=index.js.map