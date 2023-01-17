/**
 * traversing the dom
 * BOTTOM-UP APPROACH (from the button up)
 */
// const questionBtnList = document.querySelectorAll(".question-btn");

// questionBtnList.forEach((btn, i) => {
//     btn.addEventListener("click", (e) => {
//         let question = e.currentTarget.parentElement.parentElement;

//         console.log(question);

//         question.classList.toggle("show-text");
//     });
// });

/**
 * using selectors inside the element
 * TOP-DOWN APPROACH (from the question down)
 */
const questionList = document.querySelectorAll(".question");
// const questionBtnList = document.querySelectorAll(".question-btn");

// questionBtnList.forEach((btn, i) => {
//     btn.addEventListener("click", () => {
//         questionList.forEach((question, q_i) => {
//             if (q_i === i)
//                 question.classList.toggle("show-text");
//             else
//                 question.classList.remove("show-text");
//         });
//     });
// });

questionList.forEach((question, i) => {
    const btn = question.querySelector(".question-btn");

    btn.addEventListener("click", () => {
        question.classList.toggle("show-text");

        questionList.forEach((otherQuestion, j) => {
            if (j !== i) otherQuestion.classList.remove("show-text");
        });
    })
});