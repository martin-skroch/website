<template>
    <header class="h-screen flex items-center justify-center p-4">

        <div class="max-w-3xl flex flex-col gap-8 items-center justify-center">

            <img src="~/assets/img/avatar.webp" alt="Bild von Martin Skroch" class="w-36 h-36 md:w-56 md:h-56 border-4 md:border-8 rounded-full shadow-lg bg-secondary border-secondary">

            <h1 class="text-4xl md:text-6xl font-extrabold font-anaheim text-center">Martin Skroch</h1>

            <p class="text-sm md:text-xl text-center flex flex-wrap items-center justify-center gap-x-5 gap-y-1 md:gap-x-10 md:gap-y-4">
                <Property>
                    <Icon name="ph:baby-duotone" /> {{ age ?? '00' }} Jahre
                </Property>

                <Property v-for="property in runtimeConfig.public.properties">
                    <Icon :name="property.icon" /> {{ property.title }}
                </Property>
            </p>

            <ul class="flex flex-wrap justify-center gap-4 md:gap-8">
                <li>
                    <Button href="https://linkedin.com/in/skroch-martin" target="_blank" rel="noopener" title="Martin Skroch auf XING">
                        <Icon name="bxl:linkedin-square" class="w-5 h-5" /> LinkedIn
                    </Button>
                </li>
                <li>
                    <Button href="https://xing.com/profile/Martin_Skroch" target="_blank" rel="noopener" title="Martin Skroch auf XING">
                        <Icon name="bxl:xing" class="w-5 h-5" /> XING
                    </Button>
                </li>
                <li>
                    <Button href="https://github.com/martin-skroch" target="_blank" rel="noopener" title="Martin Skroch auf GitHub">
                        <Icon name="bxl:github" class="w-5 h-5" /> GitHub
                    </Button>
                </li>
                <li>
                    <Button @click.prevent="contact" title="Martin Skroch via Telegram kontaktieren">
                        <Icon name="ph:envelope-fill" class="w-5 h-5" /> E-Mail
                    </Button>
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