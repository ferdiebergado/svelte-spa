<script>
  import "./main.scss";
  import "../node_modules/admin-lte/dist/css/adminlte.min.css";
  import "../node_modules/admin-lte/plugins/jquery/jquery.min.js";

  try {
    window.$ = window.jQuery = require("../node_modules/admin-lte/plugins/jquery/jquery.min.js");
    require("../node_modules/admin-lte/plugins/bootstrap/js/bootstrap.bundle.min.js");
    require("../node_modules/admin-lte/dist/js/adminlte.min.js");
  } catch (e) {}

  import Header from "./components/Header.svelte";
  import Sidebar from "./components/Sidebar.svelte";
  import ContentHeader from "./components/ContentHeader.svelte";
  import AlertError from "./components/AlertError.svelte";
  import AlertSuccess from "./components/AlertSucces.svelte";

  import LoginForm from "./components/LoginForm.svelte";
  import Logout from "./components/Logout.svelte";
  import RegistrationForm from "./components/RegistrationForm.svelte";
  import UserDetails from "./components/User.svelte";

  import Router from "svelte-spa-router";
  import { wrap, push, pop } from "svelte-spa-router";

  import { get } from "svelte/store";
  import { user } from "./store.js";

  const routes = {
    "/register": wrap(RegistrationForm, detail => {
      if (!$user) return true;
    }),
    "/login": wrap(LoginForm, detail => {
      if (!$user) return true;
    }),
    "/me": wrap(UserDetails, detail => {
      if ($user) return true;
    }),
    "/logout": wrap(Logout, detail => {
      if ($user) return true;
    })
  };

  // Handles the "conditionsFailed" event dispatched by the router when a component can't be loaded because one of its pre-condition failed
  const conditionsFailed = event => {
    console.error("conditionsFailed event", event.detail);

    switch (event.detail.location) {
      case "/me":
        push("/login");
        break;
      case "/login":
        pop();
        break;
      case "/register":
        pop();
        break;
      default:
        break;
    }

    // Perform any action, for example replacing the current route
    // if (event.detail.name == "Lucky") {
    //   replace("/hello/world");
    // }
  };

  // Handles the "routeLoaded" event dispatched by the router when a component was loaded
  const routeLoaded = event => {
    console.log("routeLoaded event", event.detail);
  };

  const year = new Date().getFullYear();

  if (!$user) {
    pop("/login");
  }
  // window.onerror = () => {};
</script>

<div class="wrapper">

  {#if $user}
    <Header />
    <Sidebar />
  {/if}

  <div class="content-wrapper">
    {#if $user}
      <ContentHeader />
    {/if}
    <!-- Main content -->
    <div class="content">
      <div class="container-fluid">
        <div class="row">
          <div class="col-md-12">
            <div class="card">
              <div class="card-body">
                <AlertSuccess />
                <AlertError />

                <Router
                  {routes}
                  on:conditionsFailed={conditionsFailed}
                  on:routeLoaded={routeLoaded} />
              </div>
            </div>
          </div>
        </div>
        <!-- /.row -->
      </div>
      <!-- /.container-fluid -->
    </div>
    <!-- /.content -->
  </div>
  <!-- Main Footer -->
  <footer class="main-footer">
    <!-- To the right -->
    <div class="float-right d-none d-sm-inline">Version 1.0.0</div>
    <!-- Default to the left -->
    <strong>
      Copyright {year}
      <a href="/">MPPEIS</a>
      .
    </strong>
    All rights reserved.
  </footer>
</div>
