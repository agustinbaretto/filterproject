angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
})

.controller('FilterCtrl', function($scope, Cats, Questions) {
    $scope.lowHurdle = 40;
    $scope.highHurdle = 60;
    $scope.cats = Cats.all();
    $scope.questions = Questions.all();
    $scope.total = _.reduce($scope.questions, function(memo, item){ return memo + parseFloat(item.ratio*item.weight/100); }, 0);
    $scope.totalMax = _.reduce($scope.questions, function(memo, item){ return memo + parseFloat(5*item.weight/100); }, 0);
    $scope.percent = $scope.total/$scope.totalMax*100;
    $scope.result = "bar-energized";
  
    $scope.calculate = function()
    {
        $scope.total = _.reduce($scope.questions, function(memo, item){ return memo + parseFloat(item.ratio*item.weight/100); }, 0);
        $scope.percent = $scope.total/$scope.totalMax*100;
        if($scope.percent <= $scope.lowHurdle){
            $scope.result = "bar-assertive"
        }else{
            if($scope.percent >= $scope.highHurdle){
                $scope.result = "bar-balanced"
            }else{
                $scope.result = "bar-energized"
            }
        }
    };
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
});
