<template>
    <doc-box class="doc-basic-color">
        <doc-title>主色</doc-title>
        <v-row>
            <v-col :md="8">
                <div class="color-block color-theme-light">Light theme</div>
            </v-col>
            <v-col :md="8">
                <div class="color-block color-theme">Theme</div>
            </v-col>
            <v-col :md="8">
                <div class="color-block color-theme-dark">Dark theme</div>
            </v-col>
        </v-row>
        <doc-title>辅助色</doc-title>
        <v-row>
            <v-col :md="8">
                <div class="color-block color-success">Success</div>
            </v-col>
            <v-col :md="8">
                <div class="color-block color-warning">Warning</div>
            </v-col>
            <v-col :md="8">
                <div class="color-block color-danger">Danger</div>
            </v-col>
        </v-row>
    </doc-box>
</template>