<script>
  import { login } from "../services/UserService.js";
  import { link, push } from "svelte-spa-router";
  import AlertError from "./AlertError.svelte";
  import Transition from "./Transition.svelte";
  import { user } from "../store.js";

  let data = {
    email: "",
    password: ""
  };
  let success = false;
  let error = "";

  const handleLogin = e => {
    if (e) e.preventDefault();
    success = false;
    error = "";
    login(data).then(res => {
      user.set(res.data.user);
      success = true;
      push("/me");
    });
  };
</script>

<div class="login-box">
  <div class="login-logo">
    <a href="/">
      <b>MPPEIS</b>
    </a>
  </div>
  <!-- /.login-logo -->
  <div class="card">
    <div class="card-body login-card-body">
      <Transition>
        <p class="login-box-msg">Sign in to start your session</p>

        <AlertError />

        <form on:submit={handleLogin}>
          <div class="input-group mb-3">
            <input
              type="email"
              class="form-control"
              placeholder="Email"
              bind:value={data.email} />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-envelope" />
              </div>
            </div>
          </div>
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Password"
              bind:value={data.password} />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input type="checkbox" id="remember" />
                <label for="remember">Remember Me</label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block">
                Sign In
              </button>
            </div>
            <!-- /.col -->
          </div>
        </form>

        <p class="mb-1">
          <a href="forgot-password.html">I forgot my password</a>
        </p>
        <p class="mb-0">
          <a href="/register" class="text-center" use:link>
            Register a new membership
          </a>
        </p>
      </Transition>
    </div>
    <!-- /.login-card-body -->
  </div>
</div>
<!-- /.login-box -->
