angular.module('starter.services', [])

.factory('Cats', function() {
    var cats = [
        { id: 1, name: "Product", icon: "ion-ipod"},
        { id: 2, name: "Market", icon: "ion-ios7-cart"},
        { id: 3, name: "Team", icon: "ion-ios7-people"},
        { id: 4, name: "Business", icon: "ion-cash"}
    ];
    
    return {
    all: function() {
      return cats;
    },
    get: function(catId) {
      // Simple index lookup
      return cats[catId];
    }
  }
})

.factory('Questions', function() {
    var questions = [
        { id: 1, cat: "Product", text: "What's your product?", weight: 100, ratio: 3 },
        { id: 2, cat: "Product", text: "How protectable is it?", weight: 100, ratio: 3 },
        { id: 3, cat: "Product", text: "Does this have lots of applications?", weight: 100, ratio: 3 },
        { id: 4, cat: "Product", text: "Who else is working in this area?", weight: 100, ratio: 3 },
        { id: 5, cat: "Market", text: "Is there a problem today?", weight: 100, ratio: 3 },
        { id: 6, cat: "Market", text: "Is this a big problem?", weight: 100, ratio: 3 },
        { id: 7, cat: "Market", text: "How much share can you get?", weight: 100, ratio: 3 },
        { id: 8, cat: "Market", text: "Do all the constituents see value?", weight: 100, ratio: 3 },
        { id: 9, cat: "Team", text: "Who’s already committed?", weight: 100, ratio: 3 },
        { id: 10, cat: "Team", text: "Can a full team be assembled?", weight: 100, ratio: 3 },
        { id: 11, cat: "Team", text: "What does the team need to start working?", weight: 100, ratio: 3 },
        { id: 12, cat: "Team", text: "Does this fit into a supply chain?", weight: 100, ratio: 3 },
        { id: 13, cat: "Business", text: "Can each unit make a profit?", weight: 100, ratio: 3 },
        { id: 14, cat: "Business", text: "How long will this take?", weight: 100, ratio: 3 },
        { id: 15, cat: "Business", text: "How far along is the idea already?", weight: 100, ratio: 3 },
        { id: 16, cat: "Business", text: "How much money is needed?", weight: 100, ratio: 3 }
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

