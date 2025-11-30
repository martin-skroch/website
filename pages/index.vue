<template>
    <AppSection>

        <template v-slot:title>Fähigkeiten</template>

        <div class="grid lg:grid-cols-2 gap-12">

            <div class="space-y-2">
                <h3 class="font-anaheim text-lg text-primary font-bold !mt-8">Programmier- / Auszeichnungssprachen</h3>
                <AppSkill name="PHP" rating="5" />
                <AppSkill name="JavaScript" rating="5" />
                <AppSkill name="Flutter" info="Dart" rating="5" />
                <AppSkill name="MySQL" rating="5" />
                <AppSkill name="HTML" rating="5" />
                <AppSkill name="CSS" info="PostCSS, SASS, LESS" rating="5" />

                <h3 class="font-anaheim text-lg text-primary font-bold !mt-8">Frameworks / Bibliotheken</h3>
                <AppSkill name="Laravel" rating="5" />
                <AppSkill name="Symfony" rating="5" />
                <AppSkill name="Vue.js" rating="5" />
                <AppSkill name="Nuxt" rating="5" />
                <AppSkill name="Tailwind CSS" rating="5" />
                <AppSkill name="Bootstrap" rating="5" />
                <AppSkill name="jQuery" rating="5" />

                <h3 class="font-anaheim text-lg text-primary font-bold !mt-8">Content Management Systeme / Shopsysteme</h3>
                <AppSkill name="Shopware" rating="5" />
                <AppSkill name="WordPress" rating="5" />
                <AppSkill name="Joomla" rating="5" />
                <AppSkill name="Drupal" rating="5" />
            </div>

            <div class="space-y-2">
                <h3 class="font-anaheim text-lg text-primary font-bold !mt-8">Anwendungen</h3>
                <AppSkill name="Visual Studio Code" rating="5" />
                <AppSkill name="PhpStorm" rating="5" />
                <AppSkill name="Git" rating="5" />
                <AppSkill name="Docker" rating="5" />
                <AppSkill name="Postman" rating="5" />
                <AppSkill name="Figma" rating="5" />

                <h3 class="font-anaheim text-lg text-primary font-bold !mt-8">Betriebssysteme</h3>
                <AppSkill name="Linux" rating="5" />
                <AppSkill name="macOS" rating="5" />
                <AppSkill name="Windows" rating="5" />

                <h3 class="font-anaheim text-lg text-primary font-bold !mt-8">Sonstiges</h3>
                <AppSkill name="Xdebug" rating="5" />
                <AppSkill name="PHPUnit / Pest" rating="5" />
                <AppSkill name="SEO" rating="5" />

                <h3 class="font-anaheim text-lg text-primary font-bold !mt-8">Sprachen</h3>
                <AppSkill name="Deutsch" rating="5" />
                <AppSkill name="Englisch" info="lesend" rating="5" />
                <AppSkill name="Englisch" info="sprechend" rating="5" />
            </div>

        </div>

    </AppSection>
</template>

<script setup>
const skills = useRuntimeConfig().public.skills;
</script>