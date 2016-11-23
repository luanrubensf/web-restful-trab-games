(function () {

    'use strict';

    angular.module('app')
        .controller('app.GameController', GameController);

    GameController.$inject = ['$http'];

    function GameController($http) {
        var vm = this;

        vm.games = [];
        vm.game = {};
        vm.showForm = false;

        vm.editar = editar;
        vm.remover = remover;
        vm.adicionar = adicionar;
        vm.cancelar = cancelar;
        vm.save = save;

        init();

        function init() {
            $http.get('http://localhost:8080/game')
                .success(function (data) {
                    vm.games = data;
                });
        }

        function editar(game) {
            vm.showForm = true;
            vm.game = angular.copy(game);
        }

        function adicionar() {
            vm.showForm = true;
            vm.game = {};
        }

        function cancelar() {
            vm.showForm = false;
            vm.game = {};
        }

        function remover(id) {
            cancelar();
            $http.delete('http://localhost:8080/game' + '?id=' + id)
                .success(function () {
                    init();
                })
                .error(function () {
                    $.notify({
                        message: 'Erro ao excluir game'
                    }, {
                            type: 'danger'
                        });
                });
        }

        function save(game) {
            var promise;
            if (!game.id) {
                promise = $http.post('http://localhost:8080/game', game);
            } else {
                promise = $http.put('http://localhost:8080/game', game);
            }

            promise.success(function () {
                init();
                cancelar();
            })
            .error(function () {
                $.notify({
                    message: 'Erro ao salvar game'
                }, {
                        type: 'danger'
                    });
            });
        }
    }

})();