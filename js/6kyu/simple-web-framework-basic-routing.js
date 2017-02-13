class Router {
  routes = {};

  bind(path, method, action) {
    if (this.routes[path] === undefined) {
      this.routes[path] = {};
    }
    this.routes[path][method] = action;
  }

  runRequest(path, method) {
    const action = this.routes[path] && this.routes[path][method]
    return action && action() || 'Error 404: Not Found';
  }
}
