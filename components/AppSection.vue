<template>
    <section class="py-10 md:py-20">
        <div class="max-w-3xl mx-auto">

            <h2 v-if="$slots.title" class="text-2xl md:text-4xl text-primary font-extrabold font-anaheim text-center">
                <slot name="title"></slot>
            </h2>

            <div v-if="$slots.default" class="pt-8">
                <slot>
                    <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.</p>
                </slot>
            </div>

        </div>
    </section>
</template>