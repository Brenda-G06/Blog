angular.module('blogLunar', []);

angular.module('blogLunar').controller('Rest', function($scope, $http) {
    $http.get('https://api-fake-blog.onrender.com/postagens')
        .success(function(data) {
            $scope.publicacoes = data;
        })
        .error(function() {
            console.log("Erro ao carregar as postagens.");
        });
});

