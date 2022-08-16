<script lang="ts">
	export let pkg: PackageProps;
</script>

<p>
	The <code>{pkg.name}</code> package is {pkg.speed} fast.
	Download version {pkg.version} from <a href="https://www.npmjs.com/package/{pkg.name}">npm</a>
	and <a href={pkg.website}>learn more here</a>
</p>