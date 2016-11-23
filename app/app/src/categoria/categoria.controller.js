(function () {

    'use strict';

    angular.module('app')
        .controller('app.CategoriaController', CategoriaController);

    CategoriaController.$inject = ['$http'];

    function CategoriaController($http) {
        var vm = this;

        vm.categorias = [];
        vm.categoria = {};
        vm.showForm = false;

        vm.editar = editar;
        vm.remover = remover;
        vm.adicionar = adicionar;
        vm.cancelar = cancelar;
        vm.save = save;

        init();

        function init() {
            $http.get('http://localhost:8080/categoria')
                .success(function (data) {
                    vm.categorias = data;
                });
        }

        function editar(categoria) {
            vm.showForm = true;
            vm.categoria = angular.copy(categoria);
        }

        function adicionar() {
            vm.showForm = true;
            vm.categoria = {};
        }

        function cancelar() {
            vm.showForm = false;
            vm.categoria = {};
        }

        function remover(id) {
            cancelar();
            $http.delete('http://localhost:8080/categoria' + '?id=' + id)
                .success(function () {
                    init();
                })
                .error(function () {
                    $.notify({
                        message: 'Erro ao excluir categoria'
                    }, {
                            type: 'danger'
                        });
                });
        }

        function save(categoria) {
            var promise;
            if (!categoria.id) {
                promise = $http.post('http://localhost:8080/categoria', categoria);
            } else {
                promise = $http.put('http://localhost:8080/categoria', categoria);
            }

            promise.success(function () {
                init();
                cancelar();
            })
            .error(function () {
                $.notify({
                    message: 'Erro ao salvar categoria'
                }, {
                        type: 'danger'
                    });
            });
        }
    }

})();