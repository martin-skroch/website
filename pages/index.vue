<template>
    <AppSection class="text-center">

        <template v-slot:title>Fähigkeiten</template>

        <div class="text-left flex gap-3 flex-wrap justify-center">
            <span v-for="skill in skills" class="font-anaheim bg-primary text-secondary rounded-md flex items-center justify-center gap-2 py-2 px-3 text-lg md:text-xl font-bold leading-none transition-all select-none">
                <Icon class="text-2xl" :name="skill.icon" />
                <span class="text-sm font-bold uppercase">{{ skill.title }}</span>
            </span>
        </div>

    </AppSection>
</template>

<script setup>
const skills = useRuntimeConfig().public.skills;
</script>