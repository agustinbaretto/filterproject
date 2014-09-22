angular.module('starter.services', [])

.factory('Questions', function() {
    var questions = [
        { id: 1, text: "What's your product?", weight:100, ratio:2 },
        { id: 2, text: "How protectable is it?", weight:100, ratio:3 },
        { id: 3, text: "Does this have lots of applications?", weight:100, ratio:3 },
        { id: 4, text: "Who else is working in this area?", weight:100, ratio:3 },
        { id: 5, text: "Is there a problem today?", weight:100, ratio:3 },
        { id: 6, text: "Is this a big problem?", weight:100, ratio:3 },
        { id: 7, text: "How much share can you get?", weight:100, ratio:3 },
        { id: 8, text: "Do all the constituents see value?", weight:100, ratio:3 },
        { id: 9, text: "Who’s already committed?", weight:100, ratio:3 },
        { id: 10, text: "Can a full team be assembled?", weight:100, ratio:3 },
        { id: 11, text: "What does the team need to start working?", weight:100, ratio:3 },
        { id: 12, text: "Does this fit into a supply chain?", weight:100, ratio:3 },
        { id: 13, text: "Can each unit make a profit?", weight:100, ratio:3 },
        { id: 14, text: "How long will this take?", weight:100, ratio:3 },
        { id: 15, text: "How far along is the idea already?", weight:100, ratio:3 },
        { id: 16, text: "How much money is needed?", weight:100, ratio:3 }
    ];

  return {
    all: function() {
      return questions;
    },
    get: function(questionId) {
      // Simple index lookup
      return questions[questionId];
    }
  }
});

