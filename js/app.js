angular.module('branchApp', ['branchApp.controllers']);

angular.module('branchApp.controllers', []).controller('loginController', [
  '$scope',
  function($scope) {
    $scope.login = function() {
      var appUser = dataAppUsers[$scope.login.username];
      if (appUser) {
        localStorage.setItem("usercreds",JSON.stringify(appUser));
        location.href = 'branchadmin.html';
      } else {
        localStorage.clear();
        $scope.login.error = "Invalid username/password, please try again.";
      }
    }
  }
]).controller('adminController', [
  '$scope',
  function($scope) {
    $scope.appUser = JSON.parse(localStorage.getItem("usercreds"));
    if (!$scope.appUser) {
      location.href = 'index.html';
    }
    var activeBranch = $scope.appUser.branch;
    $scope.branchUsers = [];
    dataBranchUsers.forEach( obj => {
      if (obj.branch == activeBranch) $scope.branchUsers.push(angular.copy(obj));
    });
  
    $scope.userMaint = function (user1) {
      $scope.edituser = angular.copy(user1);
      $('#modalBranchUser').modal('show');
    };

    $scope.toggleSwitch = function(key) {
      $scope.appUser[key] = !($scope.appUser[key]);
    };

    $scope.toggleSwitch2 = function(key) {
      $scope.edituser[key] = !($scope.edituser[key]);
      $scope.frmBranchUser.$setDirty();
    };

    $scope.saveBranchUser = function() {
      var busers = $scope.branchUsers;
      for (x in busers) {
        if (busers[x].id == $scope.edituser.id) {
          busers[x] = angular.copy($scope.edituser);
          $scope.edituser = null;
          $('#modalBranchUser').modal('hide');
          break;
        }
      }
    };

    $scope.appUserMaint = function() {
      $scope.editAppUser = angular.copy($scope.appUser);
      $('#modalAppUser').modal('show');
    };

    $scope.saveAppUser = function() {
      $scope.appUser = angular.copy($scope.editAppUser);
      $('#modalAppUser').modal('hide');
    };

    $scope.logout = function() {
      localStorage.clear();
      location.href = "index.html"
    };
  }
]);
