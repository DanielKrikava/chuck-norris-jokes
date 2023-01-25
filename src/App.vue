<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Search from './components/Search.vue'
import Categories from './components/Categories.vue'
import Bonus from './components/icons/Bonus.vue'
</script>

<template>
    <div class="wrapper">
        <header>
            <div class="header-wrapper">
                <nav>
                    <RouterLink to="/" class="font-bold text-xl">Chuck Norris Jokes</RouterLink>
                </nav>

                <Search />

                <Suspense>
                    <Categories />

                    <template #fallback>
                        Loading...
                    </template>
                </Suspense>
            </div>
        </header>
        <RouterView />
    </div>
    <div>
        <Bonus/>
    </div>
</template>
