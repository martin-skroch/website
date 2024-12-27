<template>
    <div>
        <NuxtRouteAnnouncer />
        <NuxtLayout>
            <NuxtPage />
        </NuxtLayout>
    </div>
</template>
<script setup>
const runtimeConfig = useRuntimeConfig()

let title = 'Martin Skroch ‒ Full Stack Web Entwickler';
let decription = runtimeConfig.public.properties.map((p) => p.title).join(', ');

useSeoMeta({
    title: title,
    ogTitle: title,
    description: decription,
    ogDescription: decription,
    ogImage: 'https://martin-skroch.de/og-image.avif',
    twitterCard: 'summary_large_image',
})
</script>
