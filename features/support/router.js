

class Router {

  open (path) {
    browser.url(path);
    browser.pause(1000);
  }

}

export default new Router();