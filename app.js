/**
 * Created by ecorea on 4/18/2015.
 */
var app = angular.module('bookshop', []);

app.controller('BookCtrl', function ($scope){
    $scope.books = [
        {'name': 'Effective Java', 'author':'Joshua Bloch'},
        {'name': 'Year without Pants', 'author':'Scott Berkun'},
        { 'name':'Confessions of public speaker','author':'Scott Berkun'},
        {'name':'JavaScript Good Parts','author':'Douglas Crockford'}
    ]
});