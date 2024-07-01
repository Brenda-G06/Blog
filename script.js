angular.module("blogLunar", []);

angular.module("blogLunar").controller("Rest", function ($scope, $http) {
  $http.get("https://api-fake-blog.onrender.com/postagens")
    .then(function (response) {
      $scope.publicacoes = response.data;
    });
});

angular.module("blogLunar").controller("DetailsController", function ($scope, $http, $location) {
  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');

  if (id) {
    $http.get("https://api-fake-blog.onrender.com/postagem/" + id)
      .then(function (response) {
        $scope.publicacao = response.data;
      });
  } else {
    console.error("Parâmetro id não encontrado na URL");
  }
});
