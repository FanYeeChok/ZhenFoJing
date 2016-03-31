angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  console.log($stateParams);
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('ReadCtrl', function($scope) {

})

.controller('WatchCtrl', function($scope) {
  
})

.controller('StoryCtrl', function($scope,Chats) {
  $scope.chats = Chats.all();

  // $scope.toggleItem= function(item) {
  //   console.log(item);
  //   if ($scope.isItemShown(item)) {
  //     $scope.shownItem = null;
  //   } else {
  //     $scope.shownItem = item;
  //   }
  // };
  
  // $scope.isItemShown = function(item) {
  //   return $scope.shownItem === item;
  // };

})

.controller('StoryDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.item = Chats.get($stateParams.chatId);
})

.controller('OtherCtrl', function($scope,$translate) {
    $scope.languages = [ {code: 'zh-Hant', name: '繁体中文'}, {code: 'zh-Hans', name: '简体中文'}, {code: 'en', name: 'English'}];
    $scope.selectedLang = $translate.use();
    $scope.updateLanguage = function(selectedLang) {
      //console.log(selectedLang);
      $translate.use(selectedLang);
    }
})

.controller('RefCtrl', function($scope) {
  
})

;
