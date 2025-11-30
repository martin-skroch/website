<script setup>
const props = defineProps({
    name: String,
    info: String,
    rating: Number,
})
</script>

<template>
    <div class="flex items-center gap-4 text-primary whitespace-nowrap">
        <h3 class="flex items-center gap-2">
            {{ props.name }}

            <div v-if="props.info" class="text-xs opacity-60">
                ({{ props.info }})
            </div>
        </h3>

        <div class="grow h-0 border-b border-dotted border-current opacity-40"></div>

        <div class="flex gap-2">
            <div
                v-for="index in 6"
                class="size-3 rounded-full bg-primary"
                :class="{'opacity-50': index > props.rating}"
            ></div>
        </div>
    </div>
</template>