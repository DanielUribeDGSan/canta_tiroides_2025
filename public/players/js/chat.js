const numRender = 50;
const memoria = 100;
var chastArr = [];

let scroll = 0;

const button = document.querySelector("#emoji");
const button2 = document.querySelector("#emoji2");

const tooltip = document.querySelector(".tooltip");
const smgV = document.getElementById("msg-escritorio");
const smgM = document.getElementById("msg-movil");

var seHizoScroll = false;
var esMiMensaje = true;

var colDocument = "azteca3";

Popper.createPopper(button, tooltip);
Popper.createPopper(button2, tooltip);

function toggle() {
  tooltip.classList.toggle("shown");
}

const screenWidth = window.screen.width;
const classScroll =
  screenWidth <= 900 ? "scrollable-area" : "scrollable-area-lg";
const scrollBottom = () => {
  const scrollClass = document.getElementsByClassName(`${classScroll}`);

  for (var i = 0; i < scrollClass.length; i++) {
    const element = document.getElementsByClassName(`${classScroll}`)[i];
    element.scrollTop = element.scrollHeight;
  }
};

const validateScroll = () => {
  let scrollTop = document.getElementsByClassName(`${classScroll}`)[0]
    .scrollTop;
  const scrollHeight = document.getElementsByClassName(`${classScroll}`)[0]
    .scrollHeight; // added
  const offsetHeight = document.getElementsByClassName(`${classScroll}`)[0]
    .offsetHeight;
  // var clientHeight = document.getElementById('box').clientHeight;
  const contentHeight = scrollHeight - offsetHeight; // added

  if (contentHeight > scrollTop + 93) {
    // modified
    seHizoScroll = true;
  } else {
    seHizoScroll = false;
  }
};

document
  .querySelector("emoji-picker")
  .addEventListener("emoji-click", (event) => {
    smgV.value = smgV.value + event.detail.unicode;
    smgM.value = smgM.value + event.detail.unicode;
  });

const enviarMensajeWeb = () => {
  const validacion = $(".tooltip").hasClass("shown");
  if (validacion) {
    toggle();
  }
  document.getElementById("msg-escritorio").value = "";
  document.getElementById("msg-movil").value = "";
};

function renderMensajes() {
  let ultimosChats = [];

  if (chastArr.length - 1 < numRender) {
    ultimosChats = chastArr;
  } else {
    ultimosChats = chastArr.slice(chastArr.length - numRender);
  }
  ultimosChats.forEach((doc) => {
    var html = "";

    if (doc.email === "nutritionforum2023host@gmail.com") {
      html = `<div class="chat-line__message" data-a-target="chat-line-message" data-test-selector="chat-line-message" tabindex="0">
                <div class="tw-relative">
                    <div class="tw-relative">
                        <div class="">
                            <div class="chat-line__no-background tw-inline">
                                <div class="tw-inline-block"><i class="fas fa-user-shield userChatAdmin" ></i>
                                    <span class="chat-line__username" role="button" tabindex="0"><span><span class="chat-author__display-name" data-a-target="chat-message-username userChatAdmin"
                                              data-a-user="danieluribedg" data-test-selector="message-username"><strong>${doc.nombre.replace(
                                                /%20/g,
                                                " "
                                              )}</strong></span></span>
                                    </span>
                                </div><span aria-hidden="true" data-test-selector="chat-message-separator">:
                                </span><span class="text-fragment"
                                  data-a-target="chat-message-text"><span class="msg userColorChatAdmin fondoChatAdmin">${
                                    doc.mensaje
                                  }</span></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
    } else {
      html = `
                  <div class="chat-line__message" data-a-target="chat-line-message" data-test-selector="chat-line-message" tabindex="0">
                      <div class="tw-relative">
                          <div class="tw-relative">
                              <div class="">
                                  <div class="chat-line__no-background tw-inline">
                                      <div class="tw-inline-block"><i class="far fa-user mr-1 userChat"></i>
                                          <span class="chat-line__username" role="button" tabindex="0"><span><span class="chat-author__display-name userChat" data-a-target="chat-message-username"
                                                    data-a-user="danieluribedg" data-test-selector="message-username">${doc.nombre.replace(
                                                      /%20/g,
                                                      " "
                                                    )}</span></span>
                                          </span>
                                      </div><span aria-hidden="true" data-test-selector="chat-message-separator">:
                                      </span><span class="text-fragment"
                                        data-a-target="chat-message-text"><span class="msg userColorChat" >${
                                          doc.mensaje
                                        }</span></span>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
      `;
    }

    $("#list-message").append(html);
    $("#list-message2").append(html);
  });

  validateScroll();

  if (seHizoScroll) {
    notification.show("Hay nuevos mensajes", "success");
  } else {
    scrollBottom();
  }
}

function mostrarChats() {
  db.collection("col-sala")
    .doc(colDocument)
    .collection("col-mensajes")
    .orderBy("id", "asc")
    .where("status", "==", "aprobado")
    .onSnapshot((querySnapshot) => {
      $("#list-message").html("");
      $("#list-message2").html("");

      chastArr = [];
      var chatTemp = [];
      querySnapshot.forEach((doc) => {
        if (doc) chatTemp.push(doc.data());
      });
      if (chatTemp.length - 1 < memoria) {
        chastArr = chatTemp;
      } else {
        chastArr = chatTemp.slice(chatTemp.length - memoria);
      }
      renderMensajes();
      const position = $(`.${classScroll}`).scrollTop();
      const posicionFinal = parseInt(position.toFixed(0)) + 281;

      const top = $(`.${classScroll}`).get(0).scrollHeight;

      if (scroll + 2400 < top || posicionFinal + 2400 < top) {
        notification.show("Hay nuevos mensajes", "success");
      }
    });
}
mostrarChats();

// registrar chats
function urlify(text) {
  var urlRegex = /(https?:\/\/[^\s]+)/g;
  return text.replace(urlRegex, function (url) {
    return (
      '<a target="_blank" href="' +
      url +
      '" style="color:#ca9e67;text-decoration: underline !important;">' +
      url +
      "</a>"
    );
  });
}

function registrarChats(name, email) {
  document.getElementById("btn-msg-web").disabled = false;
  const nameStorage = name ? name : localStorage.getItem("nameDanone");
  const emailStorage = email ? email : localStorage.getItem("emailDanone");

  var separa = nameStorage.split(" ", 2);
  var nombreUsuarioSinEspacio = separa[0] + " " + separa[1];
  var nombreValidado = nombreUsuarioSinEspacio.replace("undefined", "");

  var mensaje = document.getElementById("msg-escritorio").value;
  var chat = urlify(mensaje);
  var fecha = new Date();

  if (mensaje == "") {
    let timerInterval;
    Swal.fire({
      title: "Alerta",
      html: "No puedes mandar un mensaje vacío",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
    document.getElementById("btn-msg-web").disabled = false;
    return null;
  }
  let status = "aprobado";

  const message = {
    nombre: nameStorage,
    email: emailStorage,
    mensaje: chat,
    fecha: fecha,
    status: status,
    day: 1,
  };

  return new Promise((resolve, reject) => {
    db.collection("col-sala")
      .doc(colDocument)
      .collection("col-mensajes")
      .orderBy("id", "desc")
      .limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach((doc) => {
          db.collection("col-sala")
            .doc(colDocument)
            .collection("col-mensajes")
            .add({
              nombre: nameStorage,
              mensaje: chat,
              fecha: fecha,
              email: emailStorage,
              status: "aprobado",
              id: doc.data().id + 1,
              day: 1,
            })
            .then(function (docRef) {
              const validacion = $(".tooltip").hasClass("shown");
              if (validacion) {
                toggle();
              }
              document.getElementById("msg-escritorio").value = "";
              document.getElementById("btn-msg-web").disabled = false;
              resolve({
                nombre: nombreValidado,
                mensaje: mensaje,
                fecha: fecha,
                status: "aprobado",
                id: doc.data().id + 1,
                imagen: "",
              });
              // scrollBottom();
              esMiMensaje = true;
              return null;
            })
            .catch(function (error) {
              reject(error);
            });
        });
      });
  });
}

function registrarChatsM(name, email) {
  document.getElementById("btn-msg-movil").disabled = true;

  const nameStorage = name ? name : localStorage.getItem("nameDanone");
  const emailStorage = email ? email : localStorage.getItem("emailDanone");

  var separa = nameStorage.split(" ", 2);
  var nombreUsuarioSinEspacio = separa[0] + " " + separa[1];
  var nombreValidado = nombreUsuarioSinEspacio.replace("undefined", "");

  var mensaje = document.getElementById("msg-movil").value;
  var chat = urlify(mensaje);

  var fecha = new Date();

  if (mensaje == "") {
    let timerInterval;
    Swal.fire({
      title: "Alerta",
      html: "No puedes mandar un mensaje vacío",
      timer: 2000,
      timerProgressBar: true,
      showConfirmButton: false,
      willOpen: () => {
        Swal.showLoading();
        timerInterval = setInterval(() => {
          const content = Swal.getContent();
          if (content) {
            const b = content.querySelector("b");
            if (b) {
              b.textContent = Swal.getTimerLeft();
            }
          }
        }, 100);
      },
      onClose: () => {
        clearInterval(timerInterval);
      },
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
      }
    });
    document.getElementById("btn-msg-movil").disabled = false;

    return null;
  }

  let status = "";
  if (nameStorage == "12citvirtual") {
    status = "aprobado";
  } else {
    status = "pendiente";
  }

  const message = {
    nombre: nameStorage,
    email: emailStorage,
    mensaje: chat,
    fecha: fecha,
    status: status,
    day: 1,
  };

  return new Promise((resolve, reject) => {
    db.collection("col-sala")
      .doc(colDocument)
      .collection("col-mensajes")
      .orderBy("id", "desc")
      .limit(1)
      .get()
      .then(function (querySnapshot) {
        querySnapshot.forEach((doc) => {
          db.collection("col-sala")
            .doc(colDocument)
            .collection("col-mensajes")
            .add({
              nombre: nameStorage,
              mensaje: chat,
              fecha: fecha,
              email: emailStorage,
              status: "aprobado",
              id: doc.data().id + 1,
              day: 1,
            })
            .then(function (docRef) {
              const validacion = $(".tooltip").hasClass("shown");
              if (validacion) {
                toggle();
              }
              document.getElementById("msg-movil").value = "";
              document.getElementById("btn-msg-movil").disabled = false;

              resolve({
                nombre: nombreValidado,
                mensaje: mensaje,
                fecha: fecha,
                status: "aprobado",
                id: doc.data().id + 1,
                imagen: "",
              });
              // scrollBottom();
              esMiMensaje = true;
              return null;
            })
            .catch(function (error) {
              reject(error);
            });
        });
      });
  });
}

$(`.${classScroll}`).scroll(function (event) {
  var scrollTop = $(`.${classScroll}`).scrollTop();
  scroll = parseInt(scrollTop.toFixed(0)) + 281;
});

/* Notificaciones */
var notification = new Notif({
  topPos: 10,
  classNames: "success danger",
  autoClose: false,
  autoCloseTimeout: 3000,
});

//notification.show('Hay nuevos mensajes', 'danger');

$(`.${classScroll}`).scroll(function (event) {
  var scrollTop = $(`.${classScroll}`).scrollTop();
  scroll = parseInt(scrollTop.toFixed(0)) + 281;
});

//var l = document.getElementById("number");
function muestraReloj() {
  var fechaHora = new Date();
  var horas = fechaHora.getHours();
  var minutos = fechaHora.getMinutes();
  var segundos = fechaHora.getSeconds();

  if (horas < 10) {
    horas = "0" + horas;
  }
  if (minutos < 10) {
    minutos = "0" + minutos;
  }
  if (segundos < 10) {
    segundos = "0" + segundos;
  }
}

function Notif(option) {
  var el = this;

  el.self = $(".toast-message");
  el.close = this.self.find(".close");
  el.message = el.self.find(".message");
  el.top = option.topPos;
  el.classNames = option.classNames;
  el.autoClose =
    typeof option.autoClose === "boolean" ? option.autoClose : false;
  el.autoCloseTimeout =
    option.autoClose && typeof option.autoCloseTimeout === "number"
      ? option.autoCloseTimeout
      : 3000;

  // Methods
  el.reset = function () {
    el.message.empty();
    el.self.removeClass(el.classNames);
  };
  el.show = function (msg, type) {
    $(".toast-message").removeClass("ocultar");
    el.reset();
    el.message.text(msg);
    el.self.addClass(type);

    if (el.autoClose) {
      setTimeout(function () {
        el.hide();
      }, el.autoCloseTimeout);
    }
  };
  el.hide = function () {
    el.reset();
    $(".toast-message").addClass("ocultar");
  };

  el.close.on("click", this.hide);
}

const mostrarUltimoChat = () => {
  $(`.${classScroll}`).animate(
    {
      scrollTop: $(`.${classScroll}`).get(0).scrollHeight,
    },
    1500
  );
  $(".toast-message").addClass("ocultar");
};
const validarTab = () => {
  if (screen.width > 1024) {
    cambiarTabP(2);
  } else {
    cambiarTab(3);
  }
};

$(document).ready(function () {
  $('[data-toggle="tooltip"]').tooltip();
});
