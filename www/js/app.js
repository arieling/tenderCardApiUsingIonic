// Ionic Starter App, v0.9.20

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js


angular.module('starter', ['ionic', 'ionic.contrib.ui.tinderCards'])
 
.directive('noScroll', function() {
    return {
        restrict: 'A',
        link: function($scope, $element, $attr) {
            $element.on('touchmove', function(e) {
                e.preventDefault();
            });
        }
    }
})


.config(function($stateProvider, $urlRouterProvider) {

})
.controller('CardsCtrl', function($scope) {
    var cardTypes = [
        { image: 'img/pic2.png', title: 'So much grass #hippster'},
        { image: 'img/pic3.png', title: 'Way too much Sand, right?'},
        { image: 'img/pic4.png', title: 'Beautiful sky from wherever'},
    ];
 
    $scope.cards = [];
 
    $scope.addCard = function(i) {
        var newCard = cardTypes[Math.floor(Math.random() * cardTypes.length)];
        newCard.id = Math.random();
        $scope.cards.push(angular.extend({}, newCard));
    }
 
    for(var i = 0; i < 3; i++) $scope.addCard();
 
    $scope.cardSwipedLeft = function(index) {
        console.log('Left swipe');
    }
 
    $scope.cardSwipedRight = function(index) {
        console.log('Right swipe');
    }
 
    $scope.cardDestroyed = function(index) {
        $scope.cards.splice(index, 1);
        console.log('Card removed');
    }
});