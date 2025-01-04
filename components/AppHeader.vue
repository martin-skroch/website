<template>
    <header class="h-screen flex items-center justify-center py-10 md:py-20 bg-primary text-secondary">
        <div class="max-w-3xl mx-auto flex flex-col gap-8 items-center justify-center">

            <img src="~/assets/img/avatar.webp" alt="Bild von Martin Skroch" class="w-36 h-36 md:w-56 md:h-56 border-4 md:border-8 rounded-full shadow-lg bg-secondary border-secondary">

            <h1 class="text-4xl md:text-6xl font-extrabold font-anaheim text-center">Martin Skroch</h1>

            <p class="text-sm md:text-xl text-center flex flex-wrap items-center justify-center gap-x-5 gap-y-1 md:gap-x-6 md:gap-y-3">
                <AppProperty>
                    <Icon name="ph:baby-duotone" /> {{ age ?? '00' }} Jahre
                </AppProperty>

                <AppProperty v-for="property in runtimeConfig.public.properties">
                    <Icon :name="property.icon" /> {{ property.title }}
                </AppProperty>
            </p>

            <ul class="flex flex-wrap justify-center gap-3 md:gap-6">
                <li>
                    <AppButton href="https://linkedin.com/in/skroch-martin" target="_blank" rel="noopener" title="Martin Skroch auf LinkedIn">
                        <Icon name="bxl:linkedin-square" /> <span class="hidden">LinkedIn</span>
                    </AppButton>
                </li>
                <li>
                    <AppButton href="https://xing.com/profile/Martin_Skroch" target="_blank" rel="noopener" title="Martin Skroch auf XING">
                        <Icon name="bxl:xing" /> <span class="hidden">XING</span>
                    </AppButton>
                </li>
                <li>
                    <AppButton href="https://github.com/martin-skroch" target="_blank" rel="noopener" title="Martin Skroch auf GitHub">
                        <Icon name="bxl:github" /> <span class="hidden">GitHub</span>
                    </AppButton>
                </li>
                <li>
                    <AppButton href="https://www.facebook.com/martin.skroch.private" target="_blank" rel="noopener" title="Martin Skroch auf Facebook">
                        <Icon name="bxl:facebook" /> <span class="hidden">Facebook</span>
                    </AppButton>
                </li>
                <li>
                    <AppButton href="https://x.com/martin_skroch" target="_blank" rel="noopener" title="Martin Skroch auf X">
                        <Icon name="tabler:brand-x" /> <span class="hidden">X</span>
                    </AppButton>
                </li>
                <li>
                    <AppButton @click.prevent="contact" title="Martin Skroch via E-Mail kontaktieren">
                        <Icon name="ph:envelope-fill" /> <span class="hidden">E-Mail</span>
                    </AppButton>
                </li>
            </ul>

        </div>
    </header>
</template>

<script setup>
const runtimeConfig = useRuntimeConfig()

let age = ref(null);
let ema = 'bWFpbHRvOk1hcnRpbiBTa3JvY2ggPG1vaW5AbWFydGluLXNrcm9jaC5kZT4';

let calculateAge = (date) => {
    let today = new Date();
    let birth = new Date(date);

    let age = today.getFullYear() - birth.getFullYear();

    const hadBirthday = today.getMonth() > birth.getMonth() || (today.getMonth() === birth.getMonth() && today.getDate() >= birth.getDate());

    if (!hadBirthday) age--;

    return age;
}

let contact = () => {
    window.location.href = atob(ema);
}

onMounted(() => {
    age.value = calculateAge('1985-09-18');
})
</script>