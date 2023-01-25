<script setup>
import Joke from '../components/Joke.vue'
</script>

<template>
    <main>
        <Suspense>
            <Joke />

            <template #fallback>
                Loading...
            </template>
        </Suspense>
    </main>
</template>
