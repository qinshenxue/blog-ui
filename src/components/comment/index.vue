<template>
    <div class="v-comment">
        <v-comment-form :placeholder="placeholder" v-if="!reply" @submit="submitComment" :enable-submit="enableSubmit">
            <template slot="form-foot">
                <slot name="form-foot"></slot>
            </template>
        </v-comment-form>
        <ul class="v-comment_list">
            <li class="v-comment_list-item" v-for="comment in data">
                <div class="v-comment_head">
                    <div class="v-comment_avatar" :style="getAvatar(comment)">{{comment.avatar?'':comment.nick_name.substr(0, 1)}}</div>
                    <div class="v-comment_author">
                        <span class="v-comment_name">{{comment.nick_name}}</span>
                        <span v-if="comment.reply_to"> 回复
                            <em class="v-comment_name">{{comment.reply_to}}</em>
                        </span>
                        <span class="v-comment_time">{{comment.reply_time}}</span>
                    </div>
                </div>
                <div class="v-comment_body" v-html="comment.content">
                </div>
                <div class="v-comment_foot">
                    <a href="javascript:;" @click="reply=comment">回复</a>
                    <v-comment-form enable-cancel v-if="reply && comment.id==reply.id" @cancel="reply=null" @submit="submitComment" :placeholder="placeholder" :enable-submit="enableSubmit">
                        <template slot="form-foot">
                            <slot name="form-foot"></slot>
                        </template>
                    </v-comment-form>
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
import vCommentForm from './form.vue';
export default {
    name: 'v-comment',
    props: {
        enableSubmit: {
            type: Boolean,
            default: true
        },
        data: Array,
        placeholder: String
    },
    data() {
        return {
            reply: null,
            colors: {}
        }
    },
    components: {
        vCommentForm
    },
    methods: {
        colorHexToRGB(color) {
            color = color.toUpperCase();
            var regexpHex = /^#[0-9a-fA-F]{3,6}$/;//Hex
            if (regexpHex.test(color)) {
                var hexArray = [];
                var count = 1;
                for (var i = 1; i <= 3; i++) {
                    if (color.length - 2 * i > 3 - i) {
                        hexArray.push(Number("0x" + color.substring(count, count + 2)));
                        count += 2;
                    } else {
                        hexArray.push(Number("0x" + color.charAt(count) + color.charAt(count)));
                        count += 1;
                    }
                }
                return "rgb(" + hexArray.join(",") + ",.5)";
            } else {
                return color;
            }
        },
        getAvatar(comment) {
            if (comment.avatar) {
                return {
                    backgroundColor: 'transparent',
                    backgroundImage: `url("${comment.avatar}")`
                }
            }
            if (!this.colors[comment.nick_name]) {
                this.colors[comment.nick_name] = this.colorHexToRGB('#' + Math.floor(Math.random() * 16777215).toString(16));
            }
            return {
                backgroundColor: this.colors[comment.nick_name]
            }
        },
        submitComment(content, commentForm) {
            var formData = { content: content };
            if (this.reply) {
                formData.reply_to = this.reply.nick_name;
            }
            this.$emit('submit', Object.assign({}, this.reply, formData), commentForm, this);
        }
    }
}
</script>
