<script lang="ts">
  export let color = '#ff3e00';
  export let bgColor = 'rgba(255, 62, 0, 0.1)';
  export let backgroundColor = 'rgba(255, 62, 0, 0.1)';

  let count: number = 0
  const increment = () => {
    count += 1
  }

  console.log('Background color is: ', backgroundColor);
  console.log('BgColor color is: ', bgColor);

  $: cssVarStyles = `--color:${color};--bg-color:${bgColor}`;
</script>

<svelte:options tag='my-counter'></svelte:options>

<button on:click={increment} style={cssVarStyles}>
  Clicks: {count}
</button>

<style>
  button {
    font-family: inherit;
    font-size: inherit;
    padding: 1em 2em;
    color: var(--color, green);
    background-color: var(--bg-color, yellow);
    border-radius: 2em;
    border: 2px solid rgba(255, 62, 0, 0);
    outline: none;
    width: 200px;
    font-variant-numeric: tabular-nums;
    cursor: pointer;
  }

  button:focus {
    border: 2px solid #ff3e00;
  }

  button:active {
    background-color: rgba(255, 62, 0, 0.2);
  }
</style>
