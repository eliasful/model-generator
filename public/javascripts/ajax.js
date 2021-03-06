(function(window) {

    var proto_methods = {
            options: {
                wrapper: document.body,
                dismissIn: 4000
            },
            init: function() {
                this.ntf = document.createElement('div');
                this.ntf.className = 'f-notification';
                var strinner = '<div class="f-notification-inner"></div><div class="f-close">x</div></div>';
                this.ntf.innerHTML = strinner;

                // append to body or the element specified in options.wrapper
                this.options.wrapper.insertBefore(this.ntf, this.options.wrapper.lastChild);

                // init events
                this.initEvents();
            },
            initEvents: function() {
                var self = this;
                // dismiss notification
                this.ntf.querySelector('.f-close').addEventListener('click', function() {
                    self.dismiss();
                });
            },
            dismiss: function() {
                var self = this;
                clearTimeout(this.dismissttl);

                classie.remove(self.ntf, 'f-show');
                setTimeout(function() {
                    classie.add(self.ntf, 'f-hide');
                }, 25);

                setTimeout(function() {
                    self.options.wrapper.removeChild(self.ntf);
                }, 500);

            },
            setType: function(newType) {
                var self = this;

                classie.remove(self.ntf, 'f-notification-error');
                classie.remove(self.ntf, 'f-notification-alert');
                classie.remove(self.ntf, 'f-notification-success');

                classie.add(self.ntf, newType);

            },
            success: function(message, dismissIn) {
                var self = this;

                /**
                 * Use supplied dismiss timeout if present, else uses default value.
                 * If set to 0, doesnt automatically dismiss.
                 */
                dismissIn = (typeof dismissIn === "undefined") ? this.options['dismissIn'] : dismissIn;

                /**
                 * Set notification type styling
                 */
                self.setType('f-notification-success');

                self.ntf.querySelector('.f-notification-inner').innerHTML = message;

                classie.remove(self.ntf, 'f-hide');
                classie.add(self.ntf, 'f-show');

                if (dismissIn > 0) {
                    this.dismissttl = setTimeout(function() {
                        self.dismiss();
                    }, dismissIn);
                }
            },
            error: function(message, dismissIn) {
                var self = this;

                /**
                 * Use supplied dismiss timeout if present, else uses default value.
                 * If set to 0, doesnt automatically dismiss.
                 */
                dismissIn = (typeof dismissIn === "undefined") ? this.options['dismissIn'] : dismissIn;

                /**
                 * Set notification type styling
                 */
                self.setType('f-notification-error');

                self.ntf.querySelector('.f-notification-inner').innerHTML = message;

                classie.remove(self.ntf, 'f-hide');
                classie.add(self.ntf, 'f-show');

                if (dismissIn > 0) {
                    this.dismissttl = setTimeout(function() {
                        self.dismiss();
                    }, dismissIn);
                }
            },
            alert: function(message, dismissIn) {
                var self = this;

                /**
                 * Use supplied dismiss timeout if present, else uses default value.
                 * If set to 0, doesnt automatically dismiss.
                 */
                dismissIn = (typeof dismissIn === "undefined") ? this.options['dismissIn'] : dismissIn;

                /**
                 * Set notification type styling
                 */
                self.setType('f-notification-alert');

                self.ntf.querySelector('.f-notification-inner').innerHTML = message;

                classie.remove(self.ntf, 'f-hide');
                classie.add(self.ntf, 'f-show');

                if (dismissIn > 0) {
                    this.dismissttl = setTimeout(function() {
                        self.dismiss();
                    }, dismissIn);
                }
            }
        },
        flatNotify, _flatNotifiy;

    _flatNotifiy = function() {
        this.init();
    };

    _flatNotifiy.prototype = proto_methods;

    flatNotify = function() {
        return new _flatNotifiy();
    };

    /**
     * add to global namespace
     */
    window.flatNotify = flatNotify;

})(window);

$(function() {
    var form = $("#formulario");
    var projeto = $("#projeto");
    var classe = $("#classe");
    var tabela = $("#tabela");
    var codigo = $("#codigo");
    var link = $("#link");
    var btn = $("#btn");

    form.submit(function() {
        $.ajax({
            url: "/gerar",
            data: form.serialize(),
            type: "GET",
            beforeSend: function(){
              btn.prop('disabled', true);
              btn.html('Aguarde...');
            },
            success: function(response) {
                codigo.html(response);
                flatNotify().success('Boa meu garoto! :)');
                setTimeout(function() {
                    location.href = classe.val() + ".zip";
                }, 1000);
            },
            error: function(xhr, status, error) {
                codigo.html("");
                flatNotify().error('Ah não... Algo de errado não deu certo! :/');
                console.log(error);
            },
            complete: function(data) {
              setTimeout(function() {
                  btn.prop('disabled', false);
                  btn.html('Gerar Código');
              }, 1000);
            }

        });
        return false;
    });

    var formConfig = $("#formConfig");

    formConfig.submit(function() {
        $.ajax({
            url: "/config",
            data: formConfig.serialize(),
            type: "GET",
            success: function(response) {
                if (response == "OK") {
                    flatNotify().success('UHUU! Configuração salva com sucesso :)');
                }
            },
            error: function(xhr, status, error) {
                flatNotify().error('Ow! Alguma coisa aconteceu de errado, não salvamos a configuração :/');
            }
        });
        return false;
    });
});
