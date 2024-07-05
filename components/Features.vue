<script setup lang="ts">
import { MetTypography } from "@metrom-xyz/ui";

import SimpleIllustration from "./assets/SimpleIllustration.vue";
import FlexibleIllustration from "./assets/FlexibleIllustration.vue";
import OneTransactionIllustration from "./assets/OneTransactionIllustration.vue";
</script>
<template>
    <section id="features" class="features__root">
        <div class="feature__root">
            <div class="feature__image">
                <img
                    class="feature__image__bg"
                    src="~/assets/img/feature-1-bg.webp"
                />
                <SimpleIllustration class="feature__image__fg" />
            </div>
            <div class="feature__text">
                <MetTypography h1 class="feature__title">
                    {{ $t("features.flow.title") }}
                </MetTypography>
                <MetTypography lg>
                    {{ $t("features.flow.description") }}
                </MetTypography>
            </div>
        </div>
        <div class="feature__root">
            <div class="feature__image">
                <img
                    class="feature__image__bg"
                    src="~/assets/img/feature-2-bg.webp"
                />
                <FlexibleIllustration class="feature__image__fg" />
            </div>
            <div class="feature__text">
                <MetTypography h1 class="feature__title">
                    {{ $t("features.incentives.title") }}
                </MetTypography>
                <MetTypography lg>{{
                    $t("features.incentives.description")
                }}</MetTypography>
            </div>
        </div>
        <div class="feature__root">
            <div class="feature__image">
                <img
                    class="feature__image__bg"
                    src="~/assets/img/feature-3-bg.webp"
                />
                <OneTransactionIllustration class="feature__image__fg" />
            </div>
            <div class="feature__text">
                <MetTypography h1 class="feature__title">
                    {{ $t("features.campaign.title") }}
                </MetTypography>
                <MetTypography lg>{{
                    $t("features.campaign.description")
                }}</MetTypography>
            </div>
        </div>
    </section>
</template>
<style>
.features__root {
    @apply w-full
        flex
        flex-col
        gap-8
        items-center
        max-w-6xl;
}

.feature__root {
    @apply w-full
        flex
        flex-col
        sm:flex-row
        sm:even:flex-row-reverse
        gap-3
        sm:gap-24
        items-center;
}

.feature__image {
    @apply w-full
        h-[340px]
        relative
        sm:w-1/2
        rounded-[50px];
}

.feature__image__bg {
    @apply absolute
        h-[340px]
        w-full
        sm:w-full
        sm:h-full
        rounded-[50px];
}

.feature__image__fg {
    @apply absolute inset-0 m-auto top-[10%] w-[80%];
}

.feature__text {
    @apply w-full flex flex-col gap-3 sm:gap-4 sm:w-1/2;
}

.feature__title {
    @apply font-extrabold
        sm:font-bold
        leading-none
        text-[40px]
        sm:text-[60px];
}
</style>
