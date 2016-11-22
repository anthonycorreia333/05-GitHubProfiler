(function() {
    'use strict';

    angular
        .module('app')
        .controller('GithubController', GithubController);

    GithubController.$inject = ['$http'];

    function GithubController($http) {
        var vm = this;
        vm.callGithubApi = callGithubApi;

        /////////////////////////

        function callGithubApi() {

            $http
                .get('http://api.github.com/users/' + vm.username + '?access_token=464779012f8a5346c3164929ba52ab4c6158b80f')
                .then(function(response) {
                    vm.userinfo = response.data;
                    vm.repoGet = vm.userinfo.repos_url;
                    if (vm.userinfo.hireable == null) {
                        vm.userinfo.hireable = 'Not looking for work';
                        vm.color = 'text-danger';
                    } else {
                        vm.userinfo.hireable = 'Looking for work';
                        vm.color = 'text-success';

                    }

                })
                .catch(function(error) {
                    alert('Hey!');
                });
                document.getElementById('hide').style.visibility = 'visible';
                document.getElementById('hideButton').style.visibility = 'visible';
                document.getElementById('hideButton1').style.visibility = 'visible';
        }
        function getRepos() {
        	$http
        		.get(vm.repoGet + '?access_token=464779012f8a5346c3164929ba52ab4c6158b80f')
        		.then(function(response) {
        			vm.reposData = response.data;


        		})
        }
    }
})();














