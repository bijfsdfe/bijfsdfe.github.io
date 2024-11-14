(function () {
  function preventDevTools() {
    if (window.devtools.open) {
      window.location.reload();
    }
  }

  window.devtools = { open: false };
  window.addEventListener("devtoolschange", preventDevTools);

  (function () {
    var devtools = window.devtools;
    var element = new Image();
    Object.defineProperty(element, "id", {
      get: function () {
        devtools.open = true;
        window.dispatchEvent(new Event("devtoolschange"));
      },
    });
    return;
  })();
})();

document.addEventListener("contextmenu", function (event) {
  event.preventDefault();
});

document.addEventListener("keydown", function (event) {
  if (event.key == "F12") {
    event.preventDefault();
  }
  if (
    (event.ctrlKey || event.metaKey) &&
    event.shiftKey &&
    event.keyCode == "I".charCodeAt(0)
  ) {
    event.preventDefault();
  }
  if (
    (event.ctrlKey || event.metaKey) &&
    event.shiftKey &&
    event.keyCode == "J".charCodeAt(0)
  ) {
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && event.keyCode == "U".charCodeAt(0)) {
    event.preventDefault();
  }
  if (
    (event.ctrlKey || event.metaKey) &&
    event.shiftKey &&
    event.keyCode == 67
  ) {
    event.preventDefault();
  }
  if ((event.ctrlKey || event.metaKey) && event.keyCode == 83) {
    event.preventDefault();
  }
});