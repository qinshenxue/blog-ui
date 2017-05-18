<template>
    <div class="v-upload">
        <vui-btn>浏览 <input type="file" ref="file"></vui-btn>
        <vui-btn @click.native="upload">上传</vui-btn>
        {{progress}}
        <ul class="v-upload-items">
           <li>

           </li>
        </ul>
    </div>
</template>
<script type="text/javascript">
    //import axios from 'axios';
    export default{
        name: 'v-upload',
        data(){
            return {
                file: null,
                progress:0
            }
        },
        methods: {
            upload(){
                //console.log(this);
                //console.log(this.$refs.file)
               // return
                //var mypic = document.getElementById('myhead').files[0];
                var fd = new FormData();
                fd.append("photos", this.$refs.file.files[0]);

                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == 4 && xhr.status == 200) {
                       // alert(xhr.responseText);
                    }
                }

                //侦查当前附件上传情况
                xhr.upload.onprogress =  (evt)=> {
                    //侦查附件上传情况
                    //通过事件对象侦查
                    //该匿名函数表达式大概0.05-0.1秒执行一次
                    //console.log(evt);
                    //console.log(evt.loaded);  //已经上传大小情况
                    //evt.total; 附件总大小
                    var loaded = evt.loaded;
                    var tot = evt.total;
                    console.log(evt);
                    this.progress = Math.floor(100 * loaded / tot);  //已经上传的百分比
                   // var son = document.getElementById('son');
                   // son.innerHTML = per + "%";
                   // son.style.width = per + "%";
                }

                xhr.open("post", "http://localhost:8082/file/upload-return-html?__tenant_id=dev&access_token=27b33f7806a67e5fd8c8fe576a3aa38f");
                xhr.send(fd);

            }
        }
    }
</script>
