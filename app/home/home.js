'use strict';

angular.module('myApp.home', ['ngRoute'])

// Declared route
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/home', {
            templateUrl: 'home/home.html',
            controller: 'HomeCtrl'
        });
    }])

    // Home controller
    .controller('HomeCtrl', ['$scope', '$firebase', '$firebaseArray', '$firebaseAuth', '$rootScope', function ($scope, $firebas, $firebaseArray, $firebaseAuth, $rootScope) {
        var rootRef = firebase.database().ref();
        var auth = $firebaseAuth();
        // var ref = new Firebase('https://online-store-uat.firebaseio.com');
        $scope.user = {};
        // $scope.test = "test";
        $scope.user.email = "test123@gmail.com";
        $scope.user.password = "test123";


        $scope.SignIn = function (event) {
            // var username = $scope.email;
            var username = $scope.user.email;
            var password = $scope.user.password;
            console.log(" e p " + username + ", " + "");


            firebase.auth().signInWithEmailAndPassword(username, password)
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    if (errorCode === 'auth/wrong-password') {
                        alert('Wrong password.');
                    } else {
                        alert(errorMessage);
                    }
                    console.log(error);
                });
        }

        var temp = firebase.database().ref().child("users");


        temp.on('child_added', function (snap) {
            var myObj = snap.val();
            // console.log(myObj);
            console.log(myObj.name);
            console.log(myObj.email);

        });

    }]);