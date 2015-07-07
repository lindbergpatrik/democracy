/**
 * Created by phan on 7/6/15.
 */

var app = angular.module('appBase', []);

app.controller('Main',
    ['$scope',

    function($scope)
        {
            $scope.test = 'Hello world!';

            $scope.posts =
                [
                {title: 'post 1', link: 'link a', upvotes: 5},
                {title: 'post 2', link: '', upvotes: 2},
                {title: 'post 3', link: '', upvotes: 15},
                {title: 'post 4', link: '', upvotes: 9},
                {title: 'post 5', link: '', upvotes: 4}
                ];

            $scope.addPost = function()
                {

                if (!$scope.title || $scope.title === '')
                    {
                    return;
                    }

                $scope.posts.push({
                    title: $scope.title,
                    link: $scope.link,
                    upvotes:0});
                $scope.title = '';
                $scope.link = '';
                };

            $scope.upvote = function(post)
                {
                post.upvotes += 1;
                }
        }
    ]
);