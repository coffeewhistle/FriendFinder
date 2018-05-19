/* jshint esversion: 6 */

let questions = [
    "Your mind is always buzzing with unexplored ideas and plans.",
    "Generally speaking, you rely more on your experience than your imagination.",
    "You find it easy to stay relaxed and focused even when there is some pressure.",
    "You rarely do something just out of sheer curiosity.",
    "People can rarely upset you.",
    "It is often difficult for you to relate to other people’s feelings.",
    "In a discussion, truth should be more important than people’s sensitivities.",
    "You rarely get carried away by fantasies and ideas.",
    "You think that everyone’s views should be respected regardless of whether they are supported by facts or not.",
    "You feel more energetic after spending time with a group of people."
];

for (let i = 0; i < questions.length; i++) {
    const e = questions[i];
    let survey = $("#questions");
    let $div = $("<div>").addClass("form-group");
    let $label = $("<label>").attr("for", "question" + i);
    let $input = $("<select>").addClass("form-control").attr("for", "question" + i);

    $label.text(questions[i]);
    

    survey.append($div);
    
}