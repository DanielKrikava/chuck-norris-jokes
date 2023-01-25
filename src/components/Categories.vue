<script setup>
import { useJokeStore } from '@/stores/joke'
const jokeStore = useJokeStore()

// Fetch a list of categories from the API
const categoryResponse = await fetch('https://api.chucknorris.io/jokes/categories')
const categories = await categoryResponse.json()

// Fetch a random joke based on a given category
async function getJokeFromCategory(category) {
    const jokeResponse = await fetch('https://api.chucknorris.io/jokes/random?category=' + category)
    const randomJokeFromCategory = await jokeResponse.json()
    jokeStore.setJoke(randomJokeFromCategory)
}

</script>

<template>
    <div class="categories">
        <p class="mb-3 font-semibold text-base">Click on any category below to get a random joke from that category</p>
        <ul class="flex flex-wrap">
            <li v-for="category in categories" @click="getJokeFromCategory(category)" class="mb-2 mr-5 cursor-pointer hover:underline hover:text-green-400">{{ category }}</li>
        </ul>
    </div>
</template>