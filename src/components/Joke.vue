<script setup>
import { onMounted } from 'vue'
import { useJokeStore } from '@/stores/joke'
const jokeStore = useJokeStore()

// Fetch a random joke and save it to a variable
async function getRandomJoke() {
    const randomJokeResponse = await fetch('https://api.chucknorris.io/jokes/random')
    const randomJoke = await randomJokeResponse.json()
    jokeStore.setJoke(randomJoke)
}

onMounted(() => {
  getRandomJoke()
})


</script>

<template>
    <div class="main-content h-full">
        <div class="joke-card rounded shadow max-w-lg mx-auto p-4 text-center h-full flex flex-col justify-center content-center">
            <h1 class="mb-2">{{ jokeStore.joke.value }}</h1>
            <p v-if="jokeStore.joke.total === 0" class="mb-3">There are no jokes based on your search.</p>
            <p v-else class="mb-3">Joke category: 
                <span 
                    v-if="jokeStore.joke.categories.length >= 1" 
                    v-for="category in jokeStore.joke.categories"
                >
                    {{ category }}
                </span>
                <span v-else>No category</span>
            </p>
            <button @click="getRandomJoke" class="block mx-auto bg-green-400 transform hover:bg-green-300 focus:bg-green-300 text-black uppercase text-base mx-auto py-2 px-4 rounded">Give me a new joke</button>
        </div>
    </div>
</template>

<style>
.joke-card {
    background: #283647;
}
</style>