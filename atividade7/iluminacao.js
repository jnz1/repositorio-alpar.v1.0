const ControleIluminacao = (function () {
    let instance;

    function createInstance() {
        const observers = {};

        function addObserver(room, callback) {
            if (!observers[room]) {
                observers[room] = [];
            }
            observers[room].push(callback);
        }

        function notifyObservers(room, state) {
            if (observers[room]) {
                observers[room].forEach(observer => observer(state));
            }
        }

        function toggleLight(room) {
            // Simulate light state change
            const state = Math.random() < 0.5 ? "ligada" : "desligada";
            notifyObservers(room, state);
        }

        return {
            addObserver: addObserver,
            toggleLight: toggleLight
        };
    }

    return {
        getInstance: function () {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();