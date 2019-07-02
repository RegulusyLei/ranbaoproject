<template>
  <audio :src="src"></audio>
</template>

<script>
export default {
	props: {
		src: {
			type: String,
			default () {
				return ''
			}
    }
	}
}
</script>
