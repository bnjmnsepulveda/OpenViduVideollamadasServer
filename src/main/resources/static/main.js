(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _component_video_video_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./component/video/video.component */ "./src/app/component/video/video.component.ts");
/* harmony import */ var _service_authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./service/authentication/authentication.guard */ "./src/app/service/authentication/authentication.guard.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");






var routes = [
    { path: '', component: _component_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"] },
    { path: 'video/:id', component: _component_video_video_component__WEBPACK_IMPORTED_MODULE_3__["VideoComponent"], canActivate: [_service_authentication_authentication_guard__WEBPACK_IMPORTED_MODULE_4__["AuthenticationGuard"]] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor-app {\n    position: absolute;\n    width: 100%;\n    height: 100%;\n}\n\n.contenedor-titulo{\n    background-color:#e9f0f3;\n    position: absolute;\n    width: calc(100% - 500px);\n    height: 60px;\n    right: 0;\n    top: 0;\n}\n\n.contenedor-titulo div {\n    display: inline-block;\n    vertical-align: middle;\n}\n\n.contenedor-contactos{\n    position: absolute;\n    width: 500px;\n    left: 0;\n    top: 0;\n    bottom: 20px;\n}\n\n.contenedor-principal {\n    position: absolute;\n    background-color: blueviolet;\n    width: calc(100% - 500px);\n    right: 0;\n    top: 60px;\n    bottom: 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLGFBQWE7Q0FDaEI7O0FBRUQ7SUFDSSx5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2IsU0FBUztJQUNULE9BQU87Q0FDVjs7QUFDRDtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7Q0FDMUI7O0FBRUQ7SUFDSSxtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLFFBQVE7SUFDUixPQUFPO0lBQ1AsYUFBYTtDQUNoQjs7QUFFRDtJQUNJLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsMEJBQTBCO0lBQzFCLFNBQVM7SUFDVCxVQUFVO0lBQ1YsVUFBVTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvci1hcHAge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW5lZG9yLXRpdHVsb3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlOWYwZjM7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA1MDBweCk7XG4gICAgaGVpZ2h0OiA2MHB4O1xuICAgIHJpZ2h0OiAwO1xuICAgIHRvcDogMDtcbn1cbi5jb250ZW5lZG9yLXRpdHVsbyBkaXYge1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xufVxuXG4uY29udGVuZWRvci1jb250YWN0b3N7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA1MDBweDtcbiAgICBsZWZ0OiAwO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDIwcHg7XG59XG5cbi5jb250ZW5lZG9yLXByaW5jaXBhbCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IGJsdWV2aW9sZXQ7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDUwMHB4KTtcbiAgICByaWdodDogMDtcbiAgICB0b3A6IDYwcHg7XG4gICAgYm90dG9tOiAwO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"contenedor-app\">\n  <div class=\"contenedor-titulo\">\n    <div>\n      <img src=\"/assets/img/logo-web-chat.svg\" width=\"60\" height=\"60\" />\n    </div>\n    <div><h3 style=\"margin-left: 20px;\">VideoLLamadas cckall</h3></div>\n  </div>\n  <!--SIDEBAR LEFT contactos de app cckall -->\n  <div class=\"contenedor-contactos\">\n    <app-contactos\n      *ngIf=\"conectado\"\n      [contactos]=\"contactos\"\n      (videollamadaContacto)=\"onVideollamadaContacto($event)\"\n      (seleccionarContacto)=\"onSeleccionarContacto($event)\"\n    >\n    </app-contactos>\n  </div>\n  <!--CONTENIDO DINAMICO-->\n  <div *ngIf=\"conectado\" class=\"contenedor-principal\">\n    <router-outlet></router-outlet>\n  </div>\n  <!--PANEL DE INICIO DE SESION-->\n  <app-inicio\n    *ngIf=\"!conectado\"\n    (iniciarSesion)=\"iniciarSesion($event)\"\n  ></app-inicio>\n  <!--NOTIFICACION PARA VIDEOLLAMADA ENTRANTE O SALIENTE-->\n  <div class=\"contenedor-videocalling\">\n    <app-video-calling\n      [visible]=\"videoCallingVisible\"\n      [saliente]=\"saliente\"\n      [videollamada]=\"videollamada\"\n      [nombreContacto]=\"nombreContacto\"\n      [nombreContacto]=\"testing\"\n      (contestarLLamada)=\"onContestarLLamada($event)\"\n      (cancelarLLamada)=\"onCancelarLLamada($event)\"\n    >\n    </app-video-calling>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _service_contacto_agente_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./service/contacto-agente.service */ "./src/app/service/contacto-agente.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _service_websocket_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./service/websocket.service */ "./src/app/service/websocket.service.ts");
/* harmony import */ var _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./domain/websocket.domain */ "./src/app/domain/websocket.domain.ts");
/* harmony import */ var _service_session_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./service/session.service */ "./src/app/service/session.service.ts");









var AppComponent = /** @class */ (function () {
    function AppComponent(router, contactoAgenteService, websocketService, sesionService) {
        this.router = router;
        this.contactoAgenteService = contactoAgenteService;
        this.websocketService = websocketService;
        this.sesionService = sesionService;
        // --- propiedades para identificar usuario actual de app ---
        this.idAgente = 18362;
        this.conectado = false;
        // --- propiedades para notificacion de llamada saliente o entrante ---
        this.saliente = true;
        this.videoCallingVisible = false;
    }
    AppComponent.prototype.ngOnDestroy = function () {
        this.subscripcionMensajesWs.unsubscribe(); // --- cerrar conexion ws ---
    };
    AppComponent.prototype.iniciarSesion = function (idAgente) {
        var _this = this;
        console.log('Iniciar sesion con id ' + idAgente);
        this.idAgente = idAgente;
        // --- Multiples subscripciones ( funcion forkJoin() )a peticiones http y a observable de conexion establecida
        //     con websocket ---
        var sesionUsuario$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["forkJoin"])(this.contactoAgenteService.buscarContactoAgenteApp(idAgente), this.contactoAgenteService.buscarTodosContactoAgente(), this.websocketService.getConnection()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
            var agente = _a[0], contactos = _a[1], conexionWs = _a[2];
            contactos = contactos.filter(function (c) { return c.id !== agente.id; }); // filtrar contactos que no sea el usario de la app
            return { agente: agente, contactos: contactos, conexionWs: conexionWs }; // ---operador map() cambia devolucion de array a un objeto.
        }));
        var subscripcion$ = sesionUsuario$.subscribe(function (_a) {
            var agente = _a.agente, contactos = _a.contactos, conexionWs = _a.conexionWs;
            console.log('Sesion usuario iniciada de ' + JSON.stringify(agente));
            console.log(conexionWs);
            _this.usuarioApp = agente;
            _this.conectado = true;
            _this.contactos = contactos;
            _this.sesionService.guardarUsuarioApp(_this.usuarioApp);
            subscripcion$.unsubscribe(); // --- cerrar recursos usados ---
            // --- susbscribirse a mensjaes de websocket ---
            _this.subscripcionMensajesWs = _this.websocketService.getMensajes()
                .subscribe(function (msg) {
                _this.processMensajeWebsocket(msg);
                console.log('se ha procesado el mensaje');
            }, function (error) {
                console.log('Error', error);
            }, function () {
                console.log('se ha cerrado la conexion de websocket');
                // this.router.navigate(['']);
            });
            // --- enviar mensjae de registro de usuario ---
            var msgRegistro = {
                fecha: new Date(),
                tipoMensaje: _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["TipoMensaje"].REGISTRO_USUARIO,
                contenido: agente
            };
            _this.websocketService.enviarMensajeWebsocket(msgRegistro);
        }, function (error) {
            console.log('Error', error);
        });
    };
    AppComponent.prototype.onSeleccionarContacto = function (contacto) {
        console.log('contacto seleccionado: ' + JSON.stringify(contacto));
    };
    AppComponent.prototype.onVideollamadaContacto = function (contacto) {
        if (this.conectado) {
            console.log('iniciar videollamada a contacto : ' + JSON.stringify(contacto));
            this.saliente = true;
            this.videoCallingVisible = true;
            this.nombreContacto = contacto.id + ' - ' + contacto.nombre + ' ' + contacto.apellido;
            var ms = new _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["MensajeWebsocket"]();
            ms.tipoMensaje = _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["TipoMensaje"].INICIAR_VIDEO_LLAMADA;
            var contenido = new _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["MensajeVideoLLamada"]();
            contenido.emisor = this.usuarioApp;
            contenido.receptor = contacto;
            ms.contenido = contenido;
            console.log('enviando msg=' + JSON.stringify(ms));
            this.videollamada = contenido;
            this.websocketService.enviarMensajeWebsocket(ms);
        }
        else {
            console.log('Warning', 'No hay conexion establecida con servicio de videollamadas!!!');
        }
    };
    AppComponent.prototype.onCancelarLLamada = function (videollamada) {
        /*console.log('Se ha cancelado llamada ' + videollamada.videollamadaId);
        this.videoCallingVisible = false;
        const contenido = {
          tipoMensaje: TipoMensaje.SOLICITUD_CANCELAR_LLAMADA,
          contenido:  {
            videollamadaId: videollamada.videollamadaId,
            notificarContactos: [
              videollamada.emisor,
              videollamada.receptor
            ]
          }
        };
        this.websocketService.enviarContenidoMensajeWebsocket(contenido);*/
    };
    AppComponent.prototype.onContestarLLamada = function (videollamada) {
        console.log('contestando llamada ' + videollamada.emisor.usuarioOperkall);
        var req = new _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["MensajeWebsocket"]();
        req.contenido = {
            videollamadaId: videollamada.videollamadaId,
            emisor: videollamada.emisor,
            receptor: videollamada.receptor
        };
        req.fecha = new Date();
        req.tipoMensaje = _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["TipoMensaje"].CONTESTAR_LLAMADA;
        this.websocketService.enviarMensajeWebsocket(req);
    };
    AppComponent.prototype.processMensajeWebsocket = function (mensaje) {
        console.log('Procesar mensaje ' + JSON.stringify(mensaje));
        switch (mensaje.tipoMensaje) {
            // --- token openvidu para integrarse a una videollamada ---
            case _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["TipoMensaje"].TOKEN_VIDEOLLAMADA:
                console.log('Contenido recibido: ' + JSON.stringify(mensaje.contenido));
                this.sesionService.guardarToken(mensaje.contenido.token);
                this.sesionService.guardarVideollamadaId(mensaje.contenido.videollamadaId);
                this.videoCallingVisible = false;
                this.router.navigate(['/video', this.idAgente]);
                break;
            // --- Un contacto solicita una videollamada ---
            case _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["TipoMensaje"].SOLICITUD_VIDEO_LLAMADA:
                this.videoCallingVisible = true;
                this.saliente = false;
                this.nombreContacto = mensaje.contenido.emisor.id + ' - ' +
                    mensaje.contenido.emisor.nombre + ' ' + mensaje.contenido.emisor.apellido;
                this.videollamada = mensaje.contenido;
                break;
            // --- se recibe el videollamdaId de una videollamada iniciada por este usuario.
            case _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["TipoMensaje"].VIDEOLLAMADA_ID_ASIGNADO:
                this.videollamada.videollamadaId = mensaje.contenido;
                break;
            // --- se recibe notificacion que se cancelo una llamada ---
            case _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["TipoMensaje"].CANCELAR_LLAMADA:
                this.videoCallingVisible = false;
                this.nombreContacto = undefined;
                this.videollamada = undefined;
                break;
            // --- Timeout videollamada ---
            case _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_7__["TipoMensaje"].TIMEOUT_LLAMADA:
                this.videoCallingVisible = false;
                this.nombreContacto = undefined;
                this.videollamada = undefined;
                alert(mensaje.contenido.mensaje);
                break;
        }
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _service_contacto_agente_service__WEBPACK_IMPORTED_MODULE_2__["ContactoAgenteService"],
            _service_websocket_service__WEBPACK_IMPORTED_MODULE_6__["WebsocketService"],
            _service_session_service__WEBPACK_IMPORTED_MODULE_8__["SessionService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _component_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./component/inicio/inicio.component */ "./src/app/component/inicio/inicio.component.ts");
/* harmony import */ var _component_contactos_contactos_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./component/contactos/contactos.component */ "./src/app/component/contactos/contactos.component.ts");
/* harmony import */ var _component_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./component/chat/chat.component */ "./src/app/component/chat/chat.component.ts");
/* harmony import */ var _component_video_video_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./component/video/video.component */ "./src/app/component/video/video.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! .//app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var openvidu_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! openvidu-angular */ "./node_modules/openvidu-angular/fesm5/openvidu-angular.js");
/* harmony import */ var _provider_error_handler__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./provider/error-handler */ "./src/app/provider/error-handler.ts");
/* harmony import */ var _component_user_video_user_video_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./component/user-video/user-video.component */ "./src/app/component/user-video/user-video.component.ts");
/* harmony import */ var _component_video_calling_video_calling_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./component/video-calling/video-calling.component */ "./src/app/component/video-calling/video-calling.component.ts");
/* harmony import */ var _component_layout_videollamada_layout_videollamada_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./component/layout-videollamada/layout-videollamada.component */ "./src/app/component/layout-videollamada/layout-videollamada.component.ts");
/* harmony import */ var _component_home_home_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./component/home/home.component */ "./src/app/component/home/home.component.ts");

















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _component_inicio_inicio_component__WEBPACK_IMPORTED_MODULE_4__["InicioComponent"],
                _component_contactos_contactos_component__WEBPACK_IMPORTED_MODULE_5__["ContactosComponent"],
                _component_chat_chat_component__WEBPACK_IMPORTED_MODULE_6__["ChatComponent"],
                _component_video_video_component__WEBPACK_IMPORTED_MODULE_7__["VideoComponent"],
                _component_user_video_user_video_component__WEBPACK_IMPORTED_MODULE_13__["UserVideoComponent"],
                _component_video_calling_video_calling_component__WEBPACK_IMPORTED_MODULE_14__["VideoCallingComponent"],
                _component_layout_videollamada_layout_videollamada_component__WEBPACK_IMPORTED_MODULE_15__["LayoutVideollamadaComponent"],
                _component_home_home_component__WEBPACK_IMPORTED_MODULE_16__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
                openvidu_angular__WEBPACK_IMPORTED_MODULE_11__["OpenviduSessionModule"]
            ],
            providers: [
                {
                    provide: _angular_core__WEBPACK_IMPORTED_MODULE_2__["ErrorHandler"],
                    useClass: _provider_error_handler__WEBPACK_IMPORTED_MODULE_12__["GlobalErrorHandler"]
                }
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/component/chat/chat.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/chat/chat.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC9jaGF0L2NoYXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/component/chat/chat.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/chat/chat.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  chat works!\n</p>\n"

/***/ }),

/***/ "./src/app/component/chat/chat.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/chat/chat.component.ts ***!
  \**************************************************/
/*! exports provided: ChatComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChatComponent", function() { return ChatComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ChatComponent = /** @class */ (function () {
    function ChatComponent() {
    }
    ChatComponent.prototype.ngOnInit = function () {
    };
    ChatComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chat',
            template: __webpack_require__(/*! ./chat.component.html */ "./src/app/component/chat/chat.component.html"),
            styles: [__webpack_require__(/*! ./chat.component.css */ "./src/app/component/chat/chat.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ChatComponent);
    return ChatComponent;
}());



/***/ }),

/***/ "./src/app/component/contactos/contactos.component.css":
/*!*************************************************************!*\
  !*** ./src/app/component/contactos/contactos.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".componente-contactos{\n    background-color: #e9f0f3;\n    height: 100%;\n    padding-top: 20px; \n}\n\n.titulo-contactos{\n    text-align: center;\n    margin-top: 20px;\n    margin-bottom: 20px;\n}\n\n.item-contacto{\n    margin: 10px;\n    margin-top: 10px;\n}\n\n.nombre-contacto{\n    cursor: pointer;\n    width: 240px;\n    display: inline-block;\n}\n\n.span-videollamada{\n    color: green; \n    cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2NvbnRhY3Rvcy9jb250YWN0b3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLDBCQUEwQjtJQUMxQixhQUFhO0lBQ2Isa0JBQWtCO0NBQ3JCOztBQUVEO0lBQ0ksbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixvQkFBb0I7Q0FDdkI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0NBQ3BCOztBQUVEO0lBQ0ksZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixzQkFBc0I7Q0FDekI7O0FBRUQ7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0NBQ25CIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2NvbnRhY3Rvcy9jb250YWN0b3MuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnRlLWNvbnRhY3Rvc3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMGYzO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBwYWRkaW5nLXRvcDogMjBweDsgXG59XG5cbi50aXR1bG8tY29udGFjdG9ze1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5pdGVtLWNvbnRhY3Rve1xuICAgIG1hcmdpbjogMTBweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubm9tYnJlLWNvbnRhY3Rve1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB3aWR0aDogMjQwcHg7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xufVxuXG4uc3Bhbi12aWRlb2xsYW1hZGF7XG4gICAgY29sb3I6IGdyZWVuOyBcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59Il19 */"

/***/ }),

/***/ "./src/app/component/contactos/contactos.component.html":
/*!**************************************************************!*\
  !*** ./src/app/component/contactos/contactos.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"componente-contactos\">\n<h3 class=\"titulo-contactos\">Lista de contactos</h3>\n <ul class=\"lista-contactos\">\n  <li *ngFor=\"let contacto of contactos\" class=\"item-contacto\" >\n    <span (click)=\"onSeleccionarContacto(contacto)\" \n          class=\"nombre-contacto\" >{{contacto.id}} -  {{contacto.nombre}}  {{contacto.apellido}}</span>\n\n    <span (click)=\"onVideollamada(contacto)\" \n    class=\"span-videollamada\" >videollamada</span>\n    <div class=\"linea-separadora-hotizontal\"></div>\n  </li>\n</ul> \n</div>\n"

/***/ }),

/***/ "./src/app/component/contactos/contactos.component.ts":
/*!************************************************************!*\
  !*** ./src/app/component/contactos/contactos.component.ts ***!
  \************************************************************/
/*! exports provided: ContactosComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactosComponent", function() { return ContactosComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactosComponent = /** @class */ (function () {
    function ContactosComponent() {
        this.seleccionarContacto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.videollamadaContacto = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ContactosComponent.prototype.ngOnInit = function () {
    };
    ContactosComponent.prototype.onSeleccionarContacto = function (contacto) {
        this.seleccionarContacto.emit(contacto);
    };
    ContactosComponent.prototype.onVideollamada = function (contacto) {
        this.videollamadaContacto.emit(contacto);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Array)
    ], ContactosComponent.prototype, "contactos", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContactosComponent.prototype, "seleccionarContacto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], ContactosComponent.prototype, "videollamadaContacto", void 0);
    ContactosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contactos',
            template: __webpack_require__(/*! ./contactos.component.html */ "./src/app/component/contactos/contactos.component.html"),
            styles: [__webpack_require__(/*! ./contactos.component.css */ "./src/app/component/contactos/contactos.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactosComponent);
    return ContactosComponent;
}());



/***/ }),

/***/ "./src/app/component/home/home.component.css":
/*!***************************************************!*\
  !*** ./src/app/component/home/home.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor-home {\n  background-color: #d7dee1;\n  text-align: center;\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  bottom: 0;\n}\n\n.contenedor-home img {\n  position: absolute;\n  width: 30%;\n  top: 35%;\n  bottom: 35%;\n  right: 30%;\n  left: 35%;\n  height: 30%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsMEJBQTBCO0VBQzFCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsVUFBVTtDQUNYOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxTQUFTO0VBQ1QsWUFBWTtFQUNaLFdBQVc7RUFDWCxVQUFVO0VBQ1YsWUFBWTtDQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50L2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3ItaG9tZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2RlZTE7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBib3R0b206IDA7XG59XG5cbi5jb250ZW5lZG9yLWhvbWUgaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMzAlO1xuICB0b3A6IDM1JTtcbiAgYm90dG9tOiAzNSU7XG4gIHJpZ2h0OiAzMCU7XG4gIGxlZnQ6IDM1JTtcbiAgaGVpZ2h0OiAzMCU7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/component/home/home.component.html":
/*!****************************************************!*\
  !*** ./src/app/component/home/home.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenedor-home\">\n  <img src=\"/assets/img/grupo.svg\">\n</div>\n"

/***/ }),

/***/ "./src/app/component/home/home.component.ts":
/*!**************************************************!*\
  !*** ./src/app/component/home/home.component.ts ***!
  \**************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/component/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/component/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/component/inicio/inicio.component.css":
/*!*******************************************************!*\
  !*** ./src/app/component/inicio/inicio.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-inicio {\n    position: absolute;\n    background-color: #e9f0f3;\n    text-align: center;\n    padding: 20px;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2luaWNpby9pbmljaW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLG1CQUFtQjtJQUNuQiwwQkFBMEI7SUFDMUIsbUJBQW1CO0lBQ25CLGNBQWM7SUFDZCxPQUFPO0lBQ1AsVUFBVTtJQUNWLFNBQVM7SUFDVCxRQUFRO0NBQ1giLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lci1pbmljaW8ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTlmMGYzO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/inicio/inicio.component.html":
/*!********************************************************!*\
  !*** ./src/app/component/inicio/inicio.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-inicio\">\n    <h2>id usuario cckall</h2>\n    <input type=\"text\"  [(ngModel)]=\"idAgente\" />\n    <button (click)=\"onIniciarSesion()\" >Iniciar video chat</button>\n</div>\n"

/***/ }),

/***/ "./src/app/component/inicio/inicio.component.ts":
/*!******************************************************!*\
  !*** ./src/app/component/inicio/inicio.component.ts ***!
  \******************************************************/
/*! exports provided: InicioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InicioComponent", function() { return InicioComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var InicioComponent = /** @class */ (function () {
    function InicioComponent() {
        this.idAgente = 18362;
        this.iniciarSesion = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    InicioComponent.prototype.ngOnInit = function () {
    };
    InicioComponent.prototype.onIniciarSesion = function () {
        this.iniciarSesion.emit(this.idAgente);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], InicioComponent.prototype, "iniciarSesion", void 0);
    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inicio',
            template: __webpack_require__(/*! ./inicio.component.html */ "./src/app/component/inicio/inicio.component.html"),
            styles: [__webpack_require__(/*! ./inicio.component.css */ "./src/app/component/inicio/inicio.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InicioComponent);
    return InicioComponent;
}());



/***/ }),

/***/ "./src/app/component/layout-videollamada/layout-videollamada.component.css":
/*!*********************************************************************************!*\
  !*** ./src/app/component/layout-videollamada/layout-videollamada.component.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor-videollamada {\n  position: absolute;\n  background-color: #d7dee1;\n  width: 100%;\n  height: 100%;\n}\n\n.contenedor-titulo-videollamada {\n  position: absolute;\n  width: 100%;\n  height: 60px;\n  top: 0;\n  text-align: center;\n}\n\n.contenedor-herramientas-videollamada {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  bottom: 0px;\n}\n\n.contenedor-herramientas-videollamada div {\n    width: 30%;\n    margin: 0 auto; \n  }\n\n.contenedor-herramientas-videollamada div div{\n  display: inline-block;\n  width: 100px;\n  margin: 20px 0 0 20px; \n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L2xheW91dC12aWRlb2xsYW1hZGEvbGF5b3V0LXZpZGVvbGxhbWFkYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLDBCQUEwQjtFQUMxQixZQUFZO0VBQ1osYUFBYTtDQUNkOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0VBQ2IsT0FBTztFQUNQLG1CQUFtQjtDQUNwQjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixZQUFZO0VBQ1osY0FBYztFQUNkLFlBQVk7Q0FDYjs7QUFFRDtJQUNJLFdBQVc7SUFDWCxlQUFlO0dBQ2hCOztBQUVIO0VBQ0Usc0JBQXNCO0VBQ3RCLGFBQWE7RUFDYixzQkFBc0I7Q0FDdkIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvbGF5b3V0LXZpZGVvbGxhbWFkYS9sYXlvdXQtdmlkZW9sbGFtYWRhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvci12aWRlb2xsYW1hZGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkN2RlZTE7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5jb250ZW5lZG9yLXRpdHVsby12aWRlb2xsYW1hZGEge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDYwcHg7XG4gIHRvcDogMDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uY29udGVuZWRvci1oZXJyYW1pZW50YXMtdmlkZW9sbGFtYWRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgYm90dG9tOiAwcHg7XG59XG5cbi5jb250ZW5lZG9yLWhlcnJhbWllbnRhcy12aWRlb2xsYW1hZGEgZGl2IHtcbiAgICB3aWR0aDogMzAlO1xuICAgIG1hcmdpbjogMCBhdXRvOyBcbiAgfVxuXG4uY29udGVuZWRvci1oZXJyYW1pZW50YXMtdmlkZW9sbGFtYWRhIGRpdiBkaXZ7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgd2lkdGg6IDEwMHB4O1xuICBtYXJnaW46IDIwcHggMCAwIDIwcHg7IFxufVxuIl19 */"

/***/ }),

/***/ "./src/app/component/layout-videollamada/layout-videollamada.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/component/layout-videollamada/layout-videollamada.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenedor-videollamada\">\n  <div class=\"contenedor-titulo-videollamada background-transparente\">\n    <p>{{ tituloVideollamada }}</p>\n  </div>\n  <div class=\"contenedor-herramientas-videollamada background-transparente\">\n    <div>\n      <div><button class=\"btn-eliminar\">Colgar</button></div>\n      <div><button class=\"btn-primario\">Mensaje</button></div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/layout-videollamada/layout-videollamada.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/component/layout-videollamada/layout-videollamada.component.ts ***!
  \********************************************************************************/
/*! exports provided: LayoutVideollamadaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LayoutVideollamadaComponent", function() { return LayoutVideollamadaComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LayoutVideollamadaComponent = /** @class */ (function () {
    function LayoutVideollamadaComponent() {
    }
    LayoutVideollamadaComponent.prototype.ngOnInit = function () {
        this.tituloVideollamada = 'Benjamin Sepulveda';
    };
    LayoutVideollamadaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-layout-videollamada',
            template: __webpack_require__(/*! ./layout-videollamada.component.html */ "./src/app/component/layout-videollamada/layout-videollamada.component.html"),
            styles: [__webpack_require__(/*! ./layout-videollamada.component.css */ "./src/app/component/layout-videollamada/layout-videollamada.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LayoutVideollamadaComponent);
    return LayoutVideollamadaComponent;
}());



/***/ }),

/***/ "./src/app/component/user-video/user-video.component.css":
/*!***************************************************************!*\
  !*** ./src/app/component/user-video/user-video.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor-video-user {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n}\n\n.titulo-video {\n  position: absolute;\n  top: 0;\n  right: 0;\n  left: 0;\n  height: 6%;\n  margin-left: 3%;\n  margin-top: 1%;\n  border-radius: 5px;\n  width: 45%;\n  padding: 1%;\n  font-size: 80%;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3VzZXItdmlkZW8vdXNlci12aWRlby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsT0FBTztFQUNQLFNBQVM7RUFDVCxRQUFRO0VBQ1IsV0FBVztFQUNYLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtDQUNoQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC91c2VyLXZpZGVvL3VzZXItdmlkZW8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250ZW5lZG9yLXZpZGVvLXVzZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi50aXR1bG8tdmlkZW8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGxlZnQ6IDA7XG4gIGhlaWdodDogNiU7XG4gIG1hcmdpbi1sZWZ0OiAzJTtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgd2lkdGg6IDQ1JTtcbiAgcGFkZGluZzogMSU7XG4gIGZvbnQtc2l6ZTogODAlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/component/user-video/user-video.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/component/user-video/user-video.component.ts ***!
  \**************************************************************/
/*! exports provided: UserVideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVideoComponent", function() { return UserVideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_2__);



var UserVideoComponent = /** @class */ (function () {
    function UserVideoComponent() {
    }
    UserVideoComponent.prototype.ngAfterViewInit = function () {
        this._streamManager.addVideoElement(this.elementRef.nativeElement);
    };
    Object.defineProperty(UserVideoComponent.prototype, "streamManager", {
        /**
         * Metodo actua como input de componente.
         */
        set: function (streamManager) {
            this._streamManager = streamManager;
            if (!!this.elementRef) {
                this._streamManager.addVideoElement(this.elementRef.nativeElement);
            }
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserVideoComponent.prototype, "nombreContacto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserVideoComponent.prototype, "anchoVideo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], UserVideoComponent.prototype, "altoVideo", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('videoElement'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], UserVideoComponent.prototype, "elementRef", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", openvidu_browser__WEBPACK_IMPORTED_MODULE_2__["StreamManager"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [openvidu_browser__WEBPACK_IMPORTED_MODULE_2__["StreamManager"]])
    ], UserVideoComponent.prototype, "streamManager", null);
    UserVideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-video',
            template: "\n        <div class=\"contenedor-video-user\">\n            <video #videoElement [style.width.px]=\"anchoVideo\" [style.heigth.px]=\"altoVideo\"\n             poster=\"/assets/img/webrtc.png\" ></video>\n            <div class=\"titulo-video background-transparente\"><p>{{ nombreContacto }}</p></div>\n        </div>",
            styles: [__webpack_require__(/*! ./user-video.component.css */ "./src/app/component/user-video/user-video.component.css")]
        })
    ], UserVideoComponent);
    return UserVideoComponent;
}());



/***/ }),

/***/ "./src/app/component/video-calling/video-calling.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/component/video-calling/video-calling.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor-video-calling{\n    background-color: rgba(0, 0, 0, 0.6);\n    text-align: center;\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 0;\n}\n\n.blink {\n    -webkit-animation-duration: 2s;\n            animation-duration: 2s;\n    -webkit-animation-name: blink;\n            animation-name: blink;\n    -webkit-animation-iteration-count: infinite;\n            animation-iteration-count: infinite;\n    -webkit-animation-timing-function: steps(2, start);\n            animation-timing-function: steps(2, start);\n}\n\n@-webkit-keyframes blink {\n    80% {\n        visibility: hidden;\n    }\n}\n\n@keyframes blink {\n    80% {\n        visibility: hidden;\n    }\n}\n\n.videollamada-en-curso{\n    color: #B04E29;\n}\n\n.nombre-contacto-videollamada{\n    margin-top: 200px;\n    text-align: center;\n    color: white;\n    vertical-align: middle;\n}\n\n.btn-videollamada {\n    width: 400px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3ZpZGVvLWNhbGxpbmcvdmlkZW8tY2FsbGluZy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kscUNBQXFDO0lBQ3JDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsT0FBTztJQUNQLFVBQVU7SUFDVixTQUFTO0lBQ1QsUUFBUTtDQUNYOztBQUVEO0lBQ0ksK0JBQXVCO1lBQXZCLHVCQUF1QjtJQUN2Qiw4QkFBc0I7WUFBdEIsc0JBQXNCO0lBQ3RCLDRDQUFvQztZQUFwQyxvQ0FBb0M7SUFDcEMsbURBQTJDO1lBQTNDLDJDQUEyQztDQUM5Qzs7QUFDRDtJQUNJO1FBQ0ksbUJBQW1CO0tBQ3RCO0NBQ0o7O0FBSkQ7SUFDSTtRQUNJLG1CQUFtQjtLQUN0QjtDQUNKOztBQUdEO0lBQ0ksZUFBZTtDQUNsQjs7QUFFRDtJQUNJLGtCQUFrQjtJQUNsQixtQkFBbUI7SUFDbkIsYUFBYTtJQUNiLHVCQUF1QjtDQUMxQjs7QUFFRDtJQUNJLGFBQWE7Q0FDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnQvdmlkZW8tY2FsbGluZy92aWRlby1jYWxsaW5nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGVuZWRvci12aWRlby1jYWxsaW5ne1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHRvcDogMDtcbiAgICBib3R0b206IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgbGVmdDogMDtcbn1cblxuLmJsaW5rIHtcbiAgICBhbmltYXRpb24tZHVyYXRpb246IDJzO1xuICAgIGFuaW1hdGlvbi1uYW1lOiBibGluaztcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcbiAgICBhbmltYXRpb24tdGltaW5nLWZ1bmN0aW9uOiBzdGVwcygyLCBzdGFydCk7XG59XG5Aa2V5ZnJhbWVzIGJsaW5rIHtcbiAgICA4MCUge1xuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG4gICAgfVxufVxuXG5cbi52aWRlb2xsYW1hZGEtZW4tY3Vyc297XG4gICAgY29sb3I6ICNCMDRFMjk7XG59XG5cbi5ub21icmUtY29udGFjdG8tdmlkZW9sbGFtYWRhe1xuICAgIG1hcmdpbi10b3A6IDIwMHB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcbn1cblxuLmJ0bi12aWRlb2xsYW1hZGEge1xuICAgIHdpZHRoOiA0MDBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/component/video-calling/video-calling.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/component/video-calling/video-calling.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"visible\" class=\"contenedor-video-calling\">\n  <div class=\"nombre-contacto-videollamada\">\n    <h3 class=\"videollamada-en-curso blink\">VideoLLamada en curso...</h3>\n    <h2>{{ nombreContacto }}</h2>\n  </div>\n  <div *ngIf=\"!saliente\">\n    <button (click)=\"onContestarLLamada(videollamada)\" class=\"btn-videollamada btn-primario\">\n      Contestar llamada\n    </button>\n  </div>\n  <div *ngIf=\"saliente\">\n    <button (click)=\"onCancelarLLamada(videollamada)\" class=\"btn-videollamada btn-primario\" >Cancelar llamada</button>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/video-calling/video-calling.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/component/video-calling/video-calling.component.ts ***!
  \********************************************************************/
/*! exports provided: VideoCallingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoCallingComponent", function() { return VideoCallingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_domain_websocket_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/domain/websocket.domain */ "./src/app/domain/websocket.domain.ts");
/* harmony import */ var src_app_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/websocket.service */ "./src/app/service/websocket.service.ts");




var VideoCallingComponent = /** @class */ (function () {
    function VideoCallingComponent(websocketService) {
        this.websocketService = websocketService;
        this.cancelarLLamada = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contestarLLamada = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    VideoCallingComponent.prototype.ngOnInit = function () {
        // this.visible = true;
    };
    VideoCallingComponent.prototype.onCancelarLLamada = function (mensajeVideollamada) {
        var contenido = {
            tipoMensaje: src_app_domain_websocket_domain__WEBPACK_IMPORTED_MODULE_2__["TipoMensaje"].SOLICITUD_CANCELAR_LLAMADA,
            contenido: {
                videollamadaId: mensajeVideollamada.videollamadaId,
                notificarContactos: [
                    mensajeVideollamada.emisor,
                    mensajeVideollamada.receptor
                ]
            }
        };
        this.websocketService.enviarContenidoMensajeWebsocket(contenido);
        // this.cancelarLLamada.emit(mensajeVideollamada);
    };
    VideoCallingComponent.prototype.onContestarLLamada = function (mensajeVideollamada) {
        var req = new src_app_domain_websocket_domain__WEBPACK_IMPORTED_MODULE_2__["MensajeWebsocket"]();
        req.contenido = {
            videollamadaId: mensajeVideollamada.videollamadaId,
            emisor: mensajeVideollamada.emisor,
            receptor: mensajeVideollamada.receptor
        };
        req.fecha = new Date();
        req.tipoMensaje = src_app_domain_websocket_domain__WEBPACK_IMPORTED_MODULE_2__["TipoMensaje"].CONTESTAR_LLAMADA;
        this.websocketService.enviarMensajeWebsocket(req);
        // this.contestarLLamada.emit(mensajeVideollamada);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], VideoCallingComponent.prototype, "visible", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", String)
    ], VideoCallingComponent.prototype, "nombreContacto", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", src_app_domain_websocket_domain__WEBPACK_IMPORTED_MODULE_2__["MensajeVideoLLamada"])
    ], VideoCallingComponent.prototype, "videollamada", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], VideoCallingComponent.prototype, "saliente", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoCallingComponent.prototype, "cancelarLLamada", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], VideoCallingComponent.prototype, "contestarLLamada", void 0);
    VideoCallingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-calling',
            template: __webpack_require__(/*! ./video-calling.component.html */ "./src/app/component/video-calling/video-calling.component.html"),
            styles: [__webpack_require__(/*! ./video-calling.component.css */ "./src/app/component/video-calling/video-calling.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"]])
    ], VideoCallingComponent);
    return VideoCallingComponent;
}());



/***/ }),

/***/ "./src/app/component/video/video.component.css":
/*!*****************************************************!*\
  !*** ./src/app/component/video/video.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".contenedor-videollamada {\n  position: absolute;\n  background-color: #d7dee1;\n  width: 100%;\n  height: 100%;\n}\n\n.contenedor-titulo-videollamada {\n  position: absolute;\n  width: 100%;\n  height: 60px;\n  top: 0;\n  text-align: center;\n}\n\n.contenedor-herramientas-videollamada {\n  position: absolute;\n  width: 100%;\n  height: 100px;\n  bottom: 0px;\n}\n\n.contenedor-herramientas-videollamada div {\n  width: 30%;\n  margin: 0 auto;\n}\n\n.contenedor-herramientas-videollamada div div {\n  display: inline-block;\n  width: 100px;\n  margin: 20px 0 0 20px;\n}\n\n.video-local {\n  position: absolute;\n  width: 320px;\n  height: 240px;\n  left: 640px;\n}\n\n.video-remoto {\n  position: absolute;\n  left: 0;\n  width: 960px;\n  height: 720px;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50L3ZpZGVvL3ZpZGVvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBbUI7RUFDbkIsMEJBQTBCO0VBQzFCLFlBQVk7RUFDWixhQUFhO0NBQ2Q7O0FBRUQ7RUFDRSxtQkFBbUI7RUFDbkIsWUFBWTtFQUNaLGFBQWE7RUFDYixPQUFPO0VBQ1AsbUJBQW1CO0NBQ3BCOztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixjQUFjO0VBQ2QsWUFBWTtDQUNiOztBQUVEO0VBQ0UsV0FBVztFQUNYLGVBQWU7Q0FDaEI7O0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsYUFBYTtFQUNiLHNCQUFzQjtDQUN2Qjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixhQUFhO0VBQ2IsY0FBYztFQUNkLFlBQVk7Q0FDYjs7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixRQUFRO0VBQ1IsYUFBYTtFQUNiLGNBQWM7Q0FDZiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudC92aWRlby92aWRlby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRlbmVkb3ItdmlkZW9sbGFtYWRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDdkZWUxO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG4uY29udGVuZWRvci10aXR1bG8tdmlkZW9sbGFtYWRhIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICB0b3A6IDA7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRlbmVkb3ItaGVycmFtaWVudGFzLXZpZGVvbGxhbWFkYSB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvdHRvbTogMHB4O1xufVxuXG4uY29udGVuZWRvci1oZXJyYW1pZW50YXMtdmlkZW9sbGFtYWRhIGRpdiB7XG4gIHdpZHRoOiAzMCU7XG4gIG1hcmdpbjogMCBhdXRvO1xufVxuXG4uY29udGVuZWRvci1oZXJyYW1pZW50YXMtdmlkZW9sbGFtYWRhIGRpdiBkaXYge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiAxMDBweDtcbiAgbWFyZ2luOiAyMHB4IDAgMCAyMHB4O1xufVxuXG4udmlkZW8tbG9jYWwge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAzMjBweDtcbiAgaGVpZ2h0OiAyNDBweDtcbiAgbGVmdDogNjQwcHg7XG59XG5cbi52aWRlby1yZW1vdG8ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGxlZnQ6IDA7XG4gIHdpZHRoOiA5NjBweDtcbiAgaGVpZ2h0OiA3MjBweDtcbn1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/component/video/video.component.html":
/*!******************************************************!*\
  !*** ./src/app/component/video/video.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"contenedor-videollamada\">\n  \n\n  <!-- video element remotos -->\n  <div *ngFor=\"let sub of subscribers\" class=\"video-remoto\">\n    <app-user-video\n      nombreContacto=\"Usuario remoto\"\n      anchoVideo=\"960\"\n      altoVideo=\"720\"\n      [streamManager]=\"sub\"\n    ></app-user-video>\n    <div class=\"contenedor-herramientas-videollamada background-transparente\">\n      <div>\n        <div>\n          <button (click)=\"disconnectVideollamadaSession()\" class=\"btn-eliminar\">\n            Colgar\n          </button>\n        </div>\n        <div><button class=\"btn-primario\">Mensaje</button></div>\n      </div>\n    </div>\n  </div>\n  <div *ngIf=\"subscribers.lenght == 0\" class=\"video-local\">\n    <img src=\"/assets/img/webrtc.png\" width=\"960\" height=\"720\" >\n  </div>\n  <!-- video element local-->\n  <div *ngIf=\"publisher\" class=\"video-local\">\n    <app-user-video\n      nombreContacto=\"Usuario local\"\n      anchoVideo=\"320\"\n      altoVideo=\"240\"\n      [streamManager]=\"publisher\"\n    ></app-user-video>\n  </div>\n  <div *ngIf=\"!publisher\" class=\"video-local\">\n    <img src=\"/assets/img/webrtc.png\" width=\"320\" height=\"240\" >\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/component/video/video.component.ts":
/*!****************************************************!*\
  !*** ./src/app/component/video/video.component.ts ***!
  \****************************************************/
/*! exports provided: VideoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoComponent", function() { return VideoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_service_video_llamada_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/video-llamada.service */ "./src/app/service/video-llamada.service.ts");
/* harmony import */ var src_app_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/websocket.service */ "./src/app/service/websocket.service.ts");
/* harmony import */ var src_app_domain_websocket_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/domain/websocket.domain */ "./src/app/domain/websocket.domain.ts");
/* harmony import */ var src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/session.service */ "./src/app/service/session.service.ts");






var VideoComponent = /** @class */ (function () {
    function VideoComponent(videollamadaService, websocketService, sesionService) {
        this.videollamadaService = videollamadaService;
        this.websocketService = websocketService;
        this.sesionService = sesionService;
        this.subscribers = []; // Remotes
        // --- Propiedades de Componente ---
        this.tituloSesion = 'Ejemplo video';
        this.sesionEstablecida = false;
    }
    VideoComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log('componente video INICIADO!!!');
        // ---Propiedades para crear conexion openvidu ---
        var token = this.sesionService.obtenerSesionVideoLLamada().token;
        var usuario = this.sesionService.obtenerUsuarioApp().usuarioOperkall;
        console.log('usuario:' + usuario + ', token:' + token);
        // --- Crear las propiedades del publicador ---
        var propPublisher = {
            audioSource: undefined,
            videoSource: undefined,
            publishAudio: true,
            publishVideo: true,
            resolution: '640x480',
            frameRate: 30,
            insertMode: 'APPEND',
            mirror: false // Whether to mirror your local video or not
        };
        this.subscripcionConexion = this.videollamadaService
            .connectVideollamadas(token, usuario, propPublisher)
            .subscribe(function (publisher) {
            _this.publisher = publisher;
            _this.sesionEstablecida = true;
            console.log('Conexion servidor videollamadas establecida ok!!!');
        });
        this.subscripcionStreamCreated = this.videollamadaService.getStreamCreated()
            .subscribe(function (event) {
            console.log('stream creado!!!');
            // Subscribe to the Stream to receive it. Second parameter is undefined
            // so OpenVidu doesn't create an HTML video by its own
            // this.session.subscribe(event.stream, undefined);
            var subscriber = _this.videollamadaService.subscribeSession(event.stream, undefined);
            _this.subscribers.push(subscriber);
        });
        this.subscripcionStreamDestroyed = this.videollamadaService.getStreamDestroyed()
            .subscribe(function (event) {
            console.log('stream destruido!!!');
            _this.videollamadaService.deleteSubscriber(event.stream.streamManager);
        });
    };
    VideoComponent.prototype.ngOnDestroy = function () {
        console.log('se unsubscriben algunos servicios');
        this.subscripcionConexion.unsubscribe();
        this.subscripcionStreamCreated.unsubscribe();
        this.subscripcionStreamDestroyed.unsubscribe();
    };
    VideoComponent.prototype.updateMainStreamManager = function (streamManager) {
        this.mainStreamManager = streamManager;
    };
    VideoComponent.prototype.disconnectVideollamadaSession = function () {
        this.sesionEstablecida = false;
        console.log('Desconectando sesion openvidu videollamada');
        this.videollamadaService.disconnectVideollamadaSession();
        var videollamadaId = this.sesionService.obtenerSesionVideoLLamada().videollamadaId;
        console.log('Desconectando sesion videollamada [id=' + videollamadaId + '');
        var contenido = {
            tipoMensaje: src_app_domain_websocket_domain__WEBPACK_IMPORTED_MODULE_4__["TipoMensaje"].TERMINAR_VIDEOLLAMADA,
            contenido: {
                mensaje: videollamadaId
            }
        };
        this.websocketService.enviarContenidoMensajeWebsocket(contenido);
    };
    VideoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video',
            template: __webpack_require__(/*! ./video.component.html */ "./src/app/component/video/video.component.html"),
            styles: [__webpack_require__(/*! ./video.component.css */ "./src/app/component/video/video.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_service_video_llamada_service__WEBPACK_IMPORTED_MODULE_2__["VideoLlamadaService"],
            src_app_service_websocket_service__WEBPACK_IMPORTED_MODULE_3__["WebsocketService"],
            src_app_service_session_service__WEBPACK_IMPORTED_MODULE_5__["SessionService"]])
    ], VideoComponent);
    return VideoComponent;
}());



/***/ }),

/***/ "./src/app/domain/cckall.domain.ts":
/*!*****************************************!*\
  !*** ./src/app/domain/cckall.domain.ts ***!
  \*****************************************/
/*! exports provided: ContactoAgente, SesionVideoLLamada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoAgente", function() { return ContactoAgente; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SesionVideoLLamada", function() { return SesionVideoLLamada; });
var ContactoAgente = /** @class */ (function () {
    function ContactoAgente() {
    }
    return ContactoAgente;
}());

var SesionVideoLLamada = /** @class */ (function () {
    function SesionVideoLLamada() {
    }
    return SesionVideoLLamada;
}());



/***/ }),

/***/ "./src/app/domain/websocket.domain.ts":
/*!********************************************!*\
  !*** ./src/app/domain/websocket.domain.ts ***!
  \********************************************/
/*! exports provided: MensajeWebsocket, TipoMensaje, MensajeVideoLLamada, MensajeSesionVideoLLamada */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajeWebsocket", function() { return MensajeWebsocket; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TipoMensaje", function() { return TipoMensaje; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajeVideoLLamada", function() { return MensajeVideoLLamada; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MensajeSesionVideoLLamada", function() { return MensajeSesionVideoLLamada; });
/**
 * Mensaje estandar que se acepata en el servicio de websocket,
 * el contenido cambia segun las necesidades.
 */
var MensajeWebsocket = /** @class */ (function () {
    function MensajeWebsocket() {
    }
    return MensajeWebsocket;
}());

/**
 * Tipo de mensajes que acepta y recibe el servidor.
 */
var TipoMensaje;
(function (TipoMensaje) {
    TipoMensaje["INICIAR_VIDEO_LLAMADA"] = "INICIAR_VIDEO_LLAMADA";
    TipoMensaje["SOLICITUD_VIDEO_LLAMADA"] = "SOLICITUD_VIDEO_LLAMADA";
    TipoMensaje["VIDEOLLAMADA_ID_ASIGNADO"] = "VIDEOLLAMADA_ID_ASIGNADO";
    TipoMensaje["REGISTRO_USUARIO"] = "REGISTRO_USUARIO";
    TipoMensaje["SOLICITUD_CANCELAR_LLAMADA"] = "SOLICITUD_CANCELAR_LLAMADA";
    TipoMensaje["CANCELAR_LLAMADA"] = "CANCELAR_LLAMADA";
    TipoMensaje["RECHAZAR_LLAMADA"] = "RECHAZAR_LLAMADA";
    TipoMensaje["TIMEOUT_LLAMADA"] = "TIMEOUT_LLAMADA";
    TipoMensaje["CONTESTAR_LLAMADA"] = "CONTESTAR_LLAMADA";
    TipoMensaje["ESTABLECER_LLAMADA"] = "ESTABLECER_LLAMADA";
    TipoMensaje["TERMINAR_VIDEOLLAMADA"] = "TERMINAR_VIDEOLLAMADA";
    TipoMensaje["TOKEN_VIDEOLLAMADA"] = "TOKEN_VIDEOLLAMADA";
    TipoMensaje["ERROR_SERVIDOR"] = "ERROR_SERVIDOR";
    TipoMensaje["ERROR_VIDEOLLAMADA"] = "ERROR_VIDEOLLAMADA";
})(TipoMensaje || (TipoMensaje = {}));
// -------- MENSAJES ASOCIADOS A CONTENIDO DE APP -------
/**
 * Mensaje enviado al crear una videollamada.
 */
var MensajeVideoLLamada = /** @class */ (function () {
    function MensajeVideoLLamada() {
    }
    return MensajeVideoLLamada;
}());

/**
 * Mensaje recibido al crear una videollamada.
 */
var MensajeSesionVideoLLamada = /** @class */ (function () {
    function MensajeSesionVideoLLamada() {
    }
    return MensajeSesionVideoLLamada;
}());



/***/ }),

/***/ "./src/app/provider/error-handler.ts":
/*!*******************************************!*\
  !*** ./src/app/provider/error-handler.ts ***!
  \*******************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var GlobalErrorHandler = /** @class */ (function () {
    function GlobalErrorHandler() {
    }
    GlobalErrorHandler.prototype.handleError = function (error) {
        console.log('Error handler global!!!');
        console.log('Error', error);
        throw error;
    };
    GlobalErrorHandler = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GlobalErrorHandler);
    return GlobalErrorHandler;
}());



/***/ }),

/***/ "./src/app/service/authentication/authentication.guard.ts":
/*!****************************************************************!*\
  !*** ./src/app/service/authentication/authentication.guard.ts ***!
  \****************************************************************/
/*! exports provided: AuthenticationGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationGuard", function() { return AuthenticationGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _session_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../session.service */ "./src/app/service/session.service.ts");




var AuthenticationGuard = /** @class */ (function () {
    function AuthenticationGuard(router, sesionService) {
        this.router = router;
        this.sesionService = sesionService;
    }
    AuthenticationGuard.prototype.canActivate = function (next, state) {
        var user = this.sesionService.obtenerUsuarioApp();
        if (user) {
            return true;
        }
        console.log('redireccionando a inicio');
        this.router.navigate(['']);
        return false;
    };
    AuthenticationGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _session_service__WEBPACK_IMPORTED_MODULE_3__["SessionService"]])
    ], AuthenticationGuard);
    return AuthenticationGuard;
}());



/***/ }),

/***/ "./src/app/service/contacto-agente.service.ts":
/*!****************************************************!*\
  !*** ./src/app/service/contacto-agente.service.ts ***!
  \****************************************************/
/*! exports provided: ContactoAgenteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactoAgenteService", function() { return ContactoAgenteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var ContactoAgenteService = /** @class */ (function () {
    function ContactoAgenteService(http) {
        this.http = http;
        this.endpoint = 'https://localhost:5000';
    }
    ContactoAgenteService.prototype.buscarContactoAgenteApp = function (id) {
        return this.http.get(this.endpoint + '/login/cckall/' + id);
    };
    ContactoAgenteService.prototype.buscarTodosContactoAgente = function () {
        return this.http.get(this.endpoint + '/agente');
    };
    ContactoAgenteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ContactoAgenteService);
    return ContactoAgenteService;
}());



/***/ }),

/***/ "./src/app/service/session.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/session.service.ts ***!
  \********************************************/
/*! exports provided: SessionService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SessionService", function() { return SessionService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _domain_cckall_domain__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../domain/cckall.domain */ "./src/app/domain/cckall.domain.ts");
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage.service */ "./src/app/service/storage.service.ts");




var SessionService = /** @class */ (function () {
    function SessionService(storageService) {
        this.storageService = storageService;
        this.sesion = new _domain_cckall_domain__WEBPACK_IMPORTED_MODULE_2__["SesionVideoLLamada"]();
    }
    SessionService.prototype.guardarUsuarioApp = function (contactoAgente) {
        this.usuarioApp = contactoAgente;
        this.storageService.guardarValor('usuario', this.usuarioApp);
    };
    SessionService.prototype.guardarVideollamadaId = function (videollamadaId) {
        this.sesion.videollamadaId = videollamadaId;
        this.storageService.guardarValor('videollamadaId', videollamadaId);
    };
    SessionService.prototype.guardarToken = function (token) {
        this.sesion.token = token;
        this.storageService.guardarValor('token', token);
    };
    SessionService.prototype.guardarEmisor = function (contacto) {
        this.sesion.emisor = contacto;
    };
    SessionService.prototype.guardarReceptor = function (contacto) {
        this.sesion.receptor = contacto;
    };
    SessionService.prototype.obtenerSesionVideoLLamada = function () {
        return this.sesion;
    };
    SessionService.prototype.obtenerUsuarioApp = function () {
        return this.usuarioApp;
    };
    SessionService.prototype.limpiarSesionVideoLLamada = function () {
        this.sesion = new _domain_cckall_domain__WEBPACK_IMPORTED_MODULE_2__["SesionVideoLLamada"]();
    };
    SessionService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"]])
    ], SessionService);
    return SessionService;
}());



/***/ }),

/***/ "./src/app/service/storage.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/storage.service.ts ***!
  \********************************************/
/*! exports provided: StorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StorageService", function() { return StorageService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var StorageService = /** @class */ (function () {
    function StorageService() {
        this.localStorage = localStorage;
    }
    StorageService.prototype.guardarValor = function (key, value) {
        if (key === null) {
            throw new Error('key a guardar esta en nulo!!!');
        }
        if (value === null) {
            throw new Error('valor a guardar esta en nulo!!!');
        }
        this.localStorage.setItem(key, JSON.stringify(value));
    };
    StorageService.prototype.obtenerValor = function (key) {
        var valor = this.localStorage.getItem(key);
        if (valor !== null) {
            return JSON.parse(valor);
        }
        else {
            return null;
        }
    };
    StorageService.prototype.eliminarValor = function (key) {
        this.localStorage.removeItem(key);
    };
    StorageService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], StorageService);
    return StorageService;
}());



/***/ }),

/***/ "./src/app/service/video-llamada.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/video-llamada.service.ts ***!
  \**************************************************/
/*! exports provided: VideoLlamadaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoLlamadaService", function() { return VideoLlamadaService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! openvidu-browser */ "./node_modules/openvidu-browser/lib/index.js");
/* harmony import */ var openvidu_browser__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(openvidu_browser__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var VideoLlamadaService = /** @class */ (function () {
    function VideoLlamadaService() {
        this.subscribers = []; // Remotes
    }
    VideoLlamadaService.prototype.ngOnInit = function () {
    };
    VideoLlamadaService.prototype.connectVideollamadas = function (token, username, properties) {
        var _this = this;
        this.OV = new openvidu_browser__WEBPACK_IMPORTED_MODULE_2__["OpenVidu"]();
        this.session = this.OV.initSession();
        // --- On every new Stream received... ---
        this.subjectStreamCreated$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.subjectStreamDestroyed$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.subjectConnect$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.session.on('streamCreated', function (eventStreamCreated) {
            _this.subjectStreamCreated$.next(eventStreamCreated);
        });
        // --- On every Stream destroyed... ---
        this.session.on('streamDestroyed', function (eventStreamDestroyed) {
            _this.subjectStreamDestroyed$.next(eventStreamDestroyed);
        });
        // --- CONEXION SERVICIO VIDEOLLAMADA OPENVIDU ---
        this.session.connect(token, { clientData: username })
            .then(function () {
            var publisher = _this.OV.initPublisher(undefined, properties);
            _this.session.publish(publisher);
            _this.subjectConnect$.next(publisher);
        }).catch(function (error) {
            _this.subjectConnect$.error(error);
        });
        return this.subjectConnect$.asObservable();
    };
    VideoLlamadaService.prototype.subscribeSession = function (stream, targetElement) {
        return this.session.subscribe(stream, targetElement);
    };
    VideoLlamadaService.prototype.getStreamCreated = function () {
        return this.subjectStreamCreated$.asObservable();
    };
    VideoLlamadaService.prototype.getStreamDestroyed = function () {
        return this.subjectStreamDestroyed$.asObservable();
    };
    VideoLlamadaService.prototype.disconnectVideollamadaSession = function () {
        // --- Leave the session by calling 'disconnect' method over the Session object ---
        if (this.session) {
            this.session.disconnect();
        }
        this.subjectStreamCreated$.complete();
        this.subjectStreamDestroyed$.complete();
        this.subjectConnect$.complete();
        // --- Empty all properties...---
        this.subscribers = [];
        delete this.publisher;
        delete this.session;
        delete this.OV;
    };
    VideoLlamadaService.prototype.deleteSubscriber = function (streamManager) {
        var index = this.subscribers.indexOf(streamManager, 0);
        if (index > -1) {
            this.subscribers.splice(index, 1);
        }
    };
    VideoLlamadaService.prototype.updateMainStreamManager = function (streamManager) {
        this.mainStreamManager = streamManager;
    };
    VideoLlamadaService.prototype.eventCloseWindows = function (event) {
        this.disconnectVideollamadaSession();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('windows:beforeunload', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [BeforeUnloadEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], VideoLlamadaService.prototype, "eventCloseWindows", null);
    VideoLlamadaService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoLlamadaService);
    return VideoLlamadaService;
}());



/***/ }),

/***/ "./src/app/service/websocket.service.ts":
/*!**********************************************!*\
  !*** ./src/app/service/websocket.service.ts ***!
  \**********************************************/
/*! exports provided: WebsocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WebsocketService", function() { return WebsocketService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../domain/websocket.domain */ "./src/app/domain/websocket.domain.ts");





var WebsocketService = /** @class */ (function () {
    function WebsocketService() {
        console.log('inicio servicio websocket');
    }
    WebsocketService.prototype.connect = function () {
        if (!this.subject$) {
            this.subjectConexion$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
            this.subject$ = this.create();
            console.log('WebsocketService conectado exitosamente!!!');
        }
        return this.subject$;
    };
    WebsocketService.prototype.create = function () {
        var _this = this;
        var url = 'wss://localhost:5000/chat';
        var ws = new WebSocket(url);
        ws.onopen = function (data) {
            console.log('Conexion websocket establecida...');
            _this.subjectConexion$.next('Conexion exitosa a ' + url);
            _this.subjectConexion$.complete();
        };
        var observable = rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"].create(function (obs) {
            ws.onmessage = obs.next.bind(obs);
            ws.onerror = obs.error.bind(obs);
            ws.onclose = obs.complete.bind(obs);
            return ws.close.bind(ws);
        });
        var observer = {
            next: function (data) {
                if (ws.readyState === WebSocket.OPEN) {
                    ws.send(JSON.stringify(data));
                }
                else {
                    console.log('no se entrego msg=' + JSON.stringify(data) + ' conexion aun no esta abierta');
                }
            }
        };
        return rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"].create(observer, observable);
    };
    WebsocketService.prototype.getConnection = function () {
        this.subjectMensajes$ = this.connect()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (response) {
            var data = JSON.parse(response.data);
            return data;
        }));
        return this.subjectConexion$.asObservable();
    };
    WebsocketService.prototype.getMensajes = function () {
        return this.subjectMensajes$.asObservable();
    };
    WebsocketService.prototype.enviarMensajeWebsocket = function (msg) {
        this.subjectMensajes$.next(msg);
    };
    WebsocketService.prototype.enviarMensajeWebsocket2 = function (tipoMensaje, contenido) {
        var req = new _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_4__["MensajeWebsocket"]();
        req.contenido = contenido;
        req.fecha = new Date();
        req.tipoMensaje = tipoMensaje;
        this.subjectMensajes$.next(req);
    };
    WebsocketService.prototype.enviarContenidoMensajeWebsocket = function (contenido) {
        var req = new _domain_websocket_domain__WEBPACK_IMPORTED_MODULE_4__["MensajeWebsocket"]();
        req.fecha = new Date();
        req.contenido = contenido.contenido;
        req.tipoMensaje = contenido.tipoMensaje;
        this.subjectMensajes$.next(req);
    };
    WebsocketService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], WebsocketService);
    return WebsocketService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/benjamin/Angular/videollamadas-cckall-client/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map