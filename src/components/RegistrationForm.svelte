<script>
  import { register } from "../services/UserService.js";
  import { link } from "svelte-spa-router";
  import AlertSuccess from "./AlertSucces.svelte";
  import AlertError from "./AlertError.svelte";
  import Transition from "./Transition.svelte";

  let data = {
    name: "",
    email: "",
    password: "",
    password_confirmation: ""
  };

  let success = false;
  let error = "";

  const handleRegistration = e => {
    if (e) e.preventDefault();
    success = false;
    error = "";
    register(data).then(res => {
      success = true;
    });
  };
</script>

<div class="register-box">
  <div class="register-logo">
    <a href="/">
      <b>MPPEIS</b>
    </a>
  </div>

  <div class="card">
    <div class="card-body register-card-body">
      <Transition>

        <p class="login-box-msg">Register for an account</p>

        <AlertSuccess
          {success}
          msg="Registration successful. Please check your email." />

        <AlertError />

        <form on:submit={handleRegistration}>
          <div class="input-group mb-3">
            <input
              type="text"
              class="form-control"
              placeholder="Full name"
              bind:value={data.name} />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-user" />
              </div>
            </div>
          </div>
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
          <div class="input-group mb-3">
            <input
              type="password"
              class="form-control"
              placeholder="Retype password"
              bind:value={data.password_confirmation} />
            <div class="input-group-append">
              <div class="input-group-text">
                <span class="fas fa-lock" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-8">
              <div class="icheck-primary">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="terms"
                  value="agree" />
                <label for="agreeTerms">
                  I agree to the
                  <a href="#">terms</a>
                </label>
              </div>
            </div>
            <!-- /.col -->
            <div class="col-4">
              <button type="submit" class="btn btn-primary btn-block">
                Register
              </button>
            </div>
            <!-- /.col -->
          </div>
        </form>

        <a href="/login" class="text-center" use:link>
          I already have an account
        </a>
      </Transition>
    </div>
    <!-- /.form-box -->
  </div>
  <!-- /.card -->
</div>
<!-- /.register-box -->
