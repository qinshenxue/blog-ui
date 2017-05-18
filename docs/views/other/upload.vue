<template>
    <div class="doc-box">
        <div class="v-upload">
            <div class="btn">
                浏览
                <input type="file" ref="el_file" @change="fileChange">
            </div>


            <!--  <vui-btn @click.native="upload">上传</vui-btn>-->

            <ul class="v-upload-files">
                <li>
                    <div class="v-upload-file" v-for="file in chose_files"
                         :style="{backgroundImage:'url('+file.data_url+')'}">
                        {{file.progress}}
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default{
        name: 'v-upload',
        data(){
            return {
                //file: null,
                progress: 0,
                chose_files: [],
                uploaded_files: []
            }
        },
        methods: {
            fileChange(){
                Array.from(this.$refs.el_file.files).forEach(file => {
                    console.log(file);
                    var fileItem = {
                        data_url: '',
                        file_size: file.size,
                        file_name: file.name,
                        progress: 0
                    };
                    /* file_name: "39ddfce6-7d54-b4f6-9263-22d7f578cc41_logo.png",
                     file_path: "/temp/39ddfce6-7d54-b4f6-9263-22d7f578cc41_logo.png",
                     file_size: 11.19140625,
                     image_thumb_path: "/temp/39ddfce6-7d54-b4f6-9263-22d7f578cc41_logo.png",
                     img_id: "39ddfce6-7d56-8625-0fec-894d84621435"*/
                    this.chose_files.push(fileItem);
                    this.toDataUrl(file, fileItem);
                    this.upload(file, fileItem);
                });
            },
            toDataUrl(file, file_info){
                var reader = new FileReader();
                reader.onload = (e) => {
                    file_info.data_url = e.target.result;
                }
                reader.readAsDataURL(file);
            },
            upload(file, file_info){

                var formData = new FormData();
                formData.append("photos", file);

                this.$http({
                    url: 'http://localhost:8082/file/upload-return-html',
                    method: 'post',
                    progress: (evt) => {
                        var loaded = evt.loaded;
                        var tot = evt.total;
                        console.log(evt);
                        file_info.progress = Math.floor(100 * loaded / tot) + '%';
                    },
                    body: formData,
                    params: {
                        __tenant_id: 'dev',
                        access_token: '67061de267deeb6eca0bcba76ab8ddfe'
                    }
                }).then(res => res.json()).then(res => {
                    console.log(res);
                })

            }
        }
    }
</script>
