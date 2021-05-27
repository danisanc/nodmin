function createViewRoutes(resource, server, orm) {
  console.log(resource, server, orm);

  // /photo - index
  // /photo/create - create
  // /photo/{photo} - show
  // /photo/{photo}/edit - edit
}

function createServerRoutes(resource, server, orm) {
  console.log(resource, server, orm);

  // /photo - store
  // /photo - update
  // /photo - destroy
}

function createCrud(resources, server, orm) {
  resources.forEach((element) => {
    createViewRoutes(element, server, orm);
    createServerRoutes(element, server, orm);
  });
}

export default createCrud;
