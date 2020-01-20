<script>
  import Transition from "./Transition.svelte";
  import { error } from "../store.js";
</script>

{#if error.length > 0}
  <Transition>
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
      <button
        type="button"
        class="close"
        data-dismiss="alert"
        aria-label="Close">
        <span aria-hidden="true">&times;</span>
        <span class="sr-only">Close</span>
      </button>
      <strong>Error!</strong>
      {error}
    </div>
  </Transition>
{/if}
