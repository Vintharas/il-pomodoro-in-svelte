<script>
  import { afterUpdate } from 'svelte';
  import {Task} from './Task.js';
  import './ArrayExtensions.js';
  let taskAddedPendingFocus = false;
  let lastInput;
  let tasks = [
    new Task("plan some fun trip with Teo"),
    new Task("buy some flowers to my wife"),
    new Task("write an article about Svelte"),
  ];
  $: allExpectedPomodoros = tasks.reduce((acc , t) => acc + t.expectedPomodoros, 0);

  function addTask(){
    tasks = tasks.concat(new Task());
    taskAddedPendingFocus = true;
  }
  function removeTask(task){
    tasks = tasks.remove(task);
  }
  function focusNewTask(){
    if (taskAddedPendingFocus && lastInput) {
      lastInput.focus();
      taskAddedPendingFocus = false;
    }
  }

  afterUpdate(focusNewTask);
</script>

<style>
  ul {
    list-style: none;
  }
  .description {
    min-width: 400px;
  }
  .pomodoros { 
    max-width: 100px;
  }
</style>

{#if tasks.length === 0}
  <p>You haven't added any tasks yet. You can do it! Add new tasks and start kicking some butt!</p>
{:else}
  <ul>
    {#each tasks as task}
      <li>
        <input class="description" type="text" bind:value={task.description} bind:this={lastInput}>
        <input class="pomodoros" type="number" bind:value={task.expectedPomodoros}>
        <button on:click={() => removeTask(task)}>X</button>
      </li>
    {/each}
  </ul>
{/if}
<button on:click={addTask}>Add a new task</button>
{#if tasks.length != 0}
  <p>
    Today you'll complete {allExpectedPomodoros} pomodoros.
  </p>
{/if}
