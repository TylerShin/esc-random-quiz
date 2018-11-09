const ANSWER_DOM = document.querySelectorAll(".answer-section")[0];
const COUNT_DOM = document.querySelectorAll(".count-indicator")[0];
const BUTTON = document.querySelectorAll(".generate-button")[0];
const questions = [
    {
        id: 0,
        content: "당신이 문을 열 때마다 당신의 테마 BGM이 나온다면 어떤 음악을 고르시겠습니까?"
    },
    {
        id: 1,
        content: "우주여행을 제안받는다면 어디를 가장 가고 싶으신가요?"
    },
    {
        id: 2,
        content: "당신을 주인공으로 히어로영화를 만든다면? 히어로가 되시겠습니까 아니면 악당이 되시겠습니까?"
    },
    {
        id: 3,
        content: "역사 속 비극적 사건을 하나만 바꿀 수 있다면, 어떤 사건을 어떻게 바꾸겠습니까?"
    },
    {
        id: 4,
        content: "세상의 한가지를 바꿀 수 있다면 어떤것을 바꾸고 싶나요? 공인인증서 빼고요."
    },
    {
        id: 5,
        content: "과거나 미래 어느 시점을 단 한 번, 다시 혹은 미리 경험할 수 있다면 언제로 가고 싶으신지요..? (언제로도 안 갈 수도 있습니다.) 그 이유는..?"
    },
    {
        id: 6,
        content: "질병 한 가지를 완전히 정복할 수 있다면, 어떤 질병을 고르겠습니까? "
    },
    {
        id: 7,
        content: "무인도에서 100일간 생존해야한다면 어떤 것을 가져가시겠습니까? 세 가지만 말해 주세요."
    },
    {
        id: 8,
        content: "당신이 베스트셀러 소설가/각본가라면 작품으로 쓰고 싶은 장르는 무엇인가요? 공포, 스릴러, 호러, 로맨스, 드라마, 코미디, SF…"
    },
    {
        id: 9,
        content: "매우 뛰어난 운동능력을 가지고 있다면 어떤 종목의 선수가 되고 싶나요? 그 이유는?"
    },
    {
        id: 10,
        content: "유명인과 결혼한다면 누구와 하고 싶으신가요? 이미 죽은 사람도 가능합니다."
    },
    {
        id: 11,
        content: "앞으로 평생 일을 안해도 된다면 현재 하는 일을 포기하시겠습니까? 그 이유는?"
    },
    {
        id: 12,
        content: "당장 세계 모든 이에게 짧은 메세지를 전송할 수 있다면 뭐라고 하고싶나요?"
    },
    {
        id: 13,
        content: "동물로 변할 수 있는 능력이 있다면 어떤 동물로 변하고 싶나요?"
    },
    {
        id: 14,
        content: "죽기 전에 마지막 식사로 어떤 것이든 먹을 수 있다면 무엇을 드시겠습니까?"
    },
    {
        id: 15,
        content: "오직 한가지 색의 옷만 입을 수 있다면 어떤 색을 고르시겠습니까?"
    },
    {
        id: 16,
        content: "동물과 말할 수 있다면 어떤 동물에게 무슨 이야기를 하고 싶으신가요?"
    },
    { id: 17, content: "인류가 멸망한다면 어떤 이유, 어떤 방식일까요?" },
    {
        id: 18,
        content: "당신의 의식을 컴퓨터에 업로드할 수 있다면 그렇게 하겠습니까?"
    },
    {
        id: 19,
        content: "누군가(개인, 기업, 단체, 국가 등)를 망하게 할 수 있다면 누구를 고르겠습니까?"
    },
    {
        id: 20,
        content: "10살의 당신이 지금의 당신을 본다면 어떤 말을 할까요?"
    },
    {
        id: 21,
        content: "타임머신을 타고 과거로 돌아가 역사적인 순간에 함께 할 수 있다면 언제 어디에 함께 하고 싶나요?"
    },
    { id: 22, content: "어떤 냄새를 가장 좋아하나요" },
    { id: 23, content: "좋은 하루란 어떤 하루인가요?" },
    {
        id: 24,
        content: "“아름다워!”라고 망설임 없이 말할 수 있는 것은 무엇인가요?"
    },
    {
        id: 25,
        content: "좋아하는 꽃 세가지를 꼽을 수 있나요? 그 세 가지는 무엇인가요?"
    },
    { id: 26, content: "당신에게 '우리'는 누구인가요?" },
    { id: 27, content: "몇 살 때의 자신을 좋아하나요?" },
    {
        id: 28,
        content: "세상'이라는 말에, 가장 먼저 떠오르는 풍경은 어떤 건가요?"
    },
    { id: 29, content: "살면서 이것만은 하지 않겠다고 다짐한 것이 있나요?" },
    { id: 30, content: "지금 이 순간, 가장 하고 싶은 일은 무엇인가요?" },
    { id: 31, content: "인생의 재료는 무엇일까요?" },
    {
        id: 32,
        content: "마지막으로 엉엉 소리내어 울었던 적은 언제인가요? 이유는?"
    },
    {
        id: 33,
        content: "100억 원의 보험금이 당첨되었다면 무슨 일을 하고 싶으신가요..?"
    },
    {
        id: 34,
        content: "요즘 당신의 음악 리스트는? 최근 가장 많이 듣는 음악은 누구의 무슨 곡인가요?"
    },
    {
        id: 35,
        content: "투명인간, 순간이동, 시간이동(타임슬립), 지구를 들 만한 힘 중 당신이 얻고 싶은 초능력은 무엇인가요?"
    },
    { id: 36, content: "지금 가장 가 보고 싶은 여행지는 어디인가요?" },
    { id: 37, content: "지금 가장 보고 싶은 사람은 누구인가요? 이유는?" },
    {
        id: 38,
        content: "가장 최근 “아, 즐겁다” “아, 행복하다-“ 라는 생각이 들었던 건 언제인가요.?"
    },
    { id: 39, content: "나만의 소확행은 무엇인가요?" },
    { id: 40, content: "ESC의 첫인상을 한마디로 정의하면?" },
    { id: 41, content: "ESC에서 함께 여행하고 싶은 사람은?" }
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
    renderCountDom();
    renderQuestion(targetQuestion);
}
function renderCountDom() {
    COUNT_DOM.innerHTML = `${solvedQuestions.length} / ${questions.length}`;
}
function renderQuestion(question) {
    ANSWER_DOM.innerHTML = question.content;
}
renderCountDom();
//# sourceMappingURL=index.js.map