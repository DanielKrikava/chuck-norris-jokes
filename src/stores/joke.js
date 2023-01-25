import { defineStore } from 'pinia'

export const useJokeStore = defineStore('JokeStore', {
    state: () => {
        return {
            joke: {
                categories: [],
                created_at: '',
                icon_url: '',
                id: '',
                updated_at: '',
                url: '',
                value: '',
                total: null,
            },
        }
    },

    actions: {
        setJoke(joke) {
            this.joke = joke
        }
    }
})