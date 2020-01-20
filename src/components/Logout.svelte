<script>
  import { push, pop } from "svelte-spa-router";
  import { user } from "../store.js";

  const logout = () => {
    user.set(undefined);
    push("/login");
  };

  if (confirm("Are you sure you want to logout?")) {
    logout();
  } else {
    pop();
  }
</script>
