<template>
    <section class="px-5 py-10 md:py-20">
        <div class="max-w-5xl mx-auto">

            <h2 v-if="$slots.title" class="text-2xl md:text-3xl lg:text-4xl text-primary font-extrabold font-anaheim text-center">
                <slot name="title"></slot>
            </h2>

            <div v-if="$slots.default">
                <slot>
                    <p>Lorem ipsum dolor sit amet.</p>
                </slot>
            </div>

        </div>
    </section>
</template>