user_adapter = (function () {

    console.log("Loading localstorage adapter module");

    var findById = function (id) {

        var deferred = $.Deferred(),
            users = JSON.parse(window.localStorage.getItem("users")),
            user = null,
            l = users.length;

        for (var i = 0; i < l; i++) {
            if (users[i].id === id) {
                user = users[i];
                break;
            }
        }

        deferred.resolve(user);
        return deferred.promise();
    },

    // Exemplo com filter underscore
    // findByName = function (searchKey) {
    //     var deferred = $.Deferred(),
    //         users = JSON.parse(window.localStorage.getItem("users")),
    //         results = users.filter(function (element) {
    //             var fullName = element.firstName + " " + element.lastName;
    //             return fullName.toLowerCase().indexOf(searchKey.toLowerCase()) > -1;
    //         });
    //     deferred.resolve(results);
    //     return deferred.promise();
    // },

    getAll = function () {
        var deferred = $.Deferred();
        var users = JSON.parse(window.localStorage.getItem("users"));
        deferred.resolve(users);
        return deferred.promise();
    };

    // Poderia completar isto com outras operações crud para usar na app. para o do iscte basta o find

    // Public API - retorna as funções deste ficheiro sem as executar, para usar depois.
    return {
        findById: findById,
        // findByName: findByName,
        getAll: getAll
    };

}()); //Executa ficheiro no load e retorna API.