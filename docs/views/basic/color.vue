<template>
    <doc-box class="doc-basic-color">
        <doc-title>主色</doc-title>
        <vui-row>
            <vui-col :xs="4">
                <div class="color-block color-theme-light">Light theme</div>
            </vui-col>
            <vui-col :xs="4">
                <div class="color-block color-theme">Theme</div>
            </vui-col>
            <vui-col :xs="4">
                <div class="color-block color-theme-dark">Dark theme</div>
            </vui-col>
        </vui-row>
        <doc-title>辅助色</doc-title>
        <vui-row>
            <vui-col :xs="4">
                <div class="color-block color-success">Success</div>
            </vui-col>
            <vui-col :xs="4">
                <div class="color-block color-warning">Warning</div>
            </vui-col>
            <vui-col :xs="4">
                <div class="color-block color-danger">Danger</div>
            </vui-col>
        </vui-row>
    </doc-box>
</template>