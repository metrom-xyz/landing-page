<script setup lang="ts">
import { useRuntimeConfig } from "#app";
import { MetTypography } from "@metrom-xyz/ui";

const {
    public: { showDappLinks },
} = useRuntimeConfig();
</script>
<template>
    <section class="about__root">
        <MetTypography xl bold>{{ $t("about.title") }}</MetTypography>
        <div class="about__wrapper">
            <a v-if="showDappLinks" href="">
                <MetTypography medium lg>
                    {{ $t("about.audits") }}
                </MetTypography>
            </a>
            <a v-if="showDappLinks" href="">
                <MetTypography medium lg>
                    {{ $t("about.team") }}
                </MetTypography>
            </a>
            <a
                href="https://metrom.gitbook.io"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MetTypography medium lg>
                    {{ $t("about.documentation") }}
                </MetTypography>
            </a>
            <a
                href="https://metrom.gitbook.io/metrom/roadmap"
                target="_blank"
                rel="noopener noreferrer"
            >
                <MetTypography medium lg>
                    {{ $t("about.roadmap") }}
                </MetTypography>
            </a>
        </div>
    </section>
</template>
<style>
.about__root {
    @apply w-full
        flex
        flex-col
        items-center
        gap-5
        max-w-5xl;
}

.about__wrapper {
    @apply flex gap-5;
}
</style>
