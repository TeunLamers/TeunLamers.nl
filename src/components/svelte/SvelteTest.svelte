<script lang="ts">
	import Info from "./Info.svelte";
	import Nested from "./Nested.svelte";

	const name = "world";
	const html = `<strong>html in string</strong>`;

	let numbers = [0];
	$: doubled = sum * 2;
	$: sum = numbers.reduce((t, n) => t + n, 0);

	$: if (numbers.length >= 10) {
		alert("count is dangerously high!");
		numbers.pop();
	}

	function incrementnumbers() {
		numbers[numbers.length] = numbers.length + 1;
	}

	const pkg: PackageProps = {
		name: "svelte",
		version: 3,
		speed: "blazing",
		website: "https://svelte.dev",
	};
</script>

<h1>Hello {name}</h1>
<Nested blah="test" />
{@html html}
<br />
<button class="btn" on:click={incrementnumbers}>
	{numbers.join(" + ")} = {sum} doubled: {doubled}
	doubled: {doubled}
</button>
<Info {pkg} />
