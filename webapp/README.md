
# webapp

A web application skeleton ready to start developing with [coffee-script] and the CommonJS packager [jacker].


## Usage

The `bin/` directory contains some useful tools.

* `new` -- create a new webapp instance
* `init` -- set up development environment
* `build` -- package application
* `runserver` -- start development server
* `deploy` -- deploy application
* `setup-repo` -- configure deploy repository

### new

Used to create a new webapp instance. A new git repo is created
at the destination you specify and all the files and submodules are copied over.

### init

Loads dependencies and builds the development javascript loader.

### build

Packages the application using [jacker].   
Output is placed in `build/`

### runserver

Starts a simple node.js runserver. It serves static files from `app/`.
Useful for development since jacker's development loader uses XMLHTTPRequests.

### deploy

Sends any new commits to the deployment repo (see *setup-repo*). The scripts in `deploy/` will be run on the deployment server after changes are uploaded.

`deploy -f` forces a redeploy

### setup-repo

Setup script for the deployment repo, can also be done manually.
See [git-remote-deploy] for more info.

## Tutorial

Clone this repository to your favorite development location and:

```bash
~/dev/webapp $ ./bin/new ../myapp
~/dev/webapp $ cd ../myapp
~/dev/myapp $ ./bin/init
~/dev/myapp $ ./bin/runserver
```

Point your browser to [http://localhost:8080]()
(The development loader uses XMLHTTP requests to load required modules. You can use whatever server, just don't open the file directly since most browsers won't allow XHR's to be run in local files)

Then have a look in `app/` and edit and commit to your hearts content. The example application structure is only a suggestion, only make sure that src/main.js is your applications entry point and that app.js is loaded by your html.

When you are done:

```bash
~/dev/myapp $ ./bin/build
```

Et voila, your application is ready for deployment. All javascript is minified to one file (app.js).

Copy the contents of the build folder to your deployment server or if you want to be fancy - check out the included deployment tools.

## Dependencies

All you need is [git], [node.js] and [npm].


[jacker]: https://github.com/jnordberg/jacker
[node.js]: http://nodejs.org/
[npm]: http://npmjs.org/
[git]: http://git-scm.com/
[coffee-script]: https://github.com/jashkenas/coffee-script
[git-remote-deploy]: https://github.com/jnordberg/git-remote-deploy


