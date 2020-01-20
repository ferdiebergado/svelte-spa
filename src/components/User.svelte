<script>
  import { fade } from "svelte/transition";
  import AlertError from "./AlertError.svelte";
  import { get } from "svelte/store";
  import { user } from "../store.js";
  import Transition from "../components/Transition.svelte";
</script>

<Transition>
  <p>Name: {$user.name}</p>
  <p>Role: {$user.role}</p>
</Transition>
