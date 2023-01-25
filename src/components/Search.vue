<script setup>
import { ref } from 'vue'
import { useJokeStore } from '@/stores/joke'
const jokeStore = useJokeStore()

const jokeText = ref('')

// Fetch a random joke based on a search parameter from an input field
async function searchJokes() {
    const searchResponse = await fetch('https://api.chucknorris.io/jokes/search?query=' + jokeText.value)
    const foundJokes = await searchResponse.json()
    if (foundJokes.total === 0) {
        jokeStore.setJoke(foundJokes)
    } else {
        const randomJoke = foundJokes.result[Math.floor(Math.random()*foundJokes.result.length)]
        jokeStore.setJoke(randomJoke)
    }
}
</script>

<template>
    <div class="search mb-5">
        <div class="search-input flex flex-col mb-2">
            <label for="search" class="text-base font-semibold mb-2">Search for a Chuck Norris joke</label>
            <input v-model="jokeText" class="rounded py-2 px-4 text-black" type="text" name="search" id="search" placeholder="Type here" />
        </div>
        <button @click="searchJokes()" class="w-full block bg-green-400 transform hover:bg-green-300 focus:bg-green-300 text-black uppercase text-base mx-auto py-2 px-4 rounded">Search</button>
    </div>
</template>