<template>
    <div class="h-screen flex flex-col">
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script setup>

let title = 'Martin Skroch ‒ Full Stack Web Entwickler';
// let decription = useRuntimeConfig().public.properties.map((p) => p.title).join(', ');
let decription = 'Full Stack Web Entwickler: ' + useRuntimeConfig().public.skills.map((p) => p.title).join(', ');

useSeoMeta({
    title: title,
    ogTitle: title,
    description: decription,
    ogDescription: decription,
    ogImage: 'https://martin-skroch.de/og-image.avif',
})
</script>
