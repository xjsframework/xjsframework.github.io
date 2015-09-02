angular.module('app', [
  'navigation-tutorials'
])

.controller('TutController', ['$rootScope', '$scope',  '$location', 'TUTS',
  function($rootScope, $scope, $location, TUTS) {
    var self = this;

    this.pages = TUTS.pages;

    this.updateCurrentPage = function(path) {
      this.currentPage = null;
      self.currentPath = path.substring(1);
      
      self.pages.forEach(function(page) {
        // Short-circuit out if the page has been found
        if ( self.currentPage ) {
          return;
        }
        if ('/' + page.path === path) {
          self.currentPage = page;
        }
      });

      if (self.currentPage) {
        $rootScope.searchResults = [];
      }
    };

    $scope.$on('$includeContentLoaded', function() {
      Prism.highlightAll();
    });

    /* Search behavior */

    $scope.$watch(
      function getLocationPath() { return $location.path(); },
      function handleLocationPathChange(path) { self.updateCurrentPage(path); }
    );

    $scope.isActive = function(url) {
      var reg = new RegExp(url + '/');
      return reg.test(self.currentPath);
    }
  }
]);
