angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FilterCtrl', function($scope, Questions) {
  $scope.questions = Questions.all();
  $scope.total = _.reduce($scope.questions, function(memo, item){ return memo + parseInt(item.ratio*item.weight/100); }, 0);
  $scope.totalMax = _.reduce($scope.questions, function(memo, item){ return memo + parseInt(5*item.weight/100); }, 0);
  
  $scope.calculate = function()
    {
        $scope.total = _.reduce($scope.questions, function(memo, item){ return memo + parseInt(item.ratio*item.weight/100); }, 0);
    };
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
});
