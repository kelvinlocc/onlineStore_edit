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
    .controller('HomeCtrl', ['$scope','$firebase','$firebaseArray',function($scope,$firebas,$firebaseArray) {
        // var domain = "https://online-store-uat.firebaseapp.com";
        var rootRef = firebase.database().ref();
        var temp = firebase.database().ref().child("users");

        temp.on('child_added', function (snap) {
            var myObj = snap.val();
            // console.log(myObj);
            console.log(myObj.name);
            console.log(myObj.email);
            // console.log("hi ", snap.val());
        });

        //
        // chatsRef.orderByValue('users').equalTo(‘user1’).once(‘value’, function (snap) {
        //     var user1Chats = snap.val();
        //     console.log(‘user1 chats!’, user1Chats);
        // });


        $scope.userdata = $firebaseArray(temp);
        $scope.userdata.$ref().once('value', function(snap) {
          console.log("snap.val() ",snap.val())
        });


        $scope.SignIn = function(event) {
            ref.authWithOAuthPopup("facebook", function(error, authData) {
            });

            ref.auth().signInWithEmailAndPassword("test123@gmail.com", "test123").catch(function (error) {
                // Handle Errors here.
                var errorCode = error.code;
                var errorMessage = error.message;
                $("#loginError").show().text(errorMessage);
                $("#loginProgress").hide();
                $("#loginBtn").show();
                console.log("error "+errorCode+", "+errorMessage);



            });

            // event.preventDefault();  // To prevent form refresh
            // var username = $scope.user.email;
            // var password = $scope.user.password;
            //
            // loginObj.$login('password', {
            //     email: username,
            //     password: password
            // })
            //     .then(function(user) {
            //         // Success callback
            //         console.log('Authentication successful');
            //     }, function(error) {
            //         // Failure callback
            //         console.log('Authentication failure');
            //         console.log("error "+error);
            //     });
        }

    }]);