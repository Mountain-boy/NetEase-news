<template>
    <mt-loadmore  v-infinite-scroll="loadMore"
                    infinite-scroll-disabled="loading"
                    infinite-scroll-distance="10"
     :top-method="loadTop" @top-status-change="handleTopChange" ref="loadmore">
        <ul>
            <li class="clearfix" :class="{oneImg_mod:item.has_video,moreImg_mod:item.has_image}"
                :key="index" 
                v-for='(item,index) in data'>
                <div v-if="item.has_image">
                    <div class="moreImg_title">
                        <div class="oneImg_title">
                            <h3>{{item.title}}</h3>
                        </div>
                    </div>
                    <ul class="moreImg_position">
                        <li :key="item" v-for='item in item.image_list'>
                            <img v-lazy.page='item.url'/>
                        </li>
                    </ul>
                    <div class="icon_box">
                        <p class="icon_left bgc_icon">{{item.media_name}}</p>
                        <p class="icon_right bgc_icon">x</p>
                        <p class="icon_right gotoTop">评论：{{item.comment_count}}</p>

                    </div>
                </div>
                <div  v-if='item.has_video'>
                    <div class="oneImg_imgPosition">
                        <img v-lazy.page='item.large_image_url' />
                    </div>
                    <div class="oneImg_imgPosition_right">
                        <div class="oneImg_title">
                            <h3>{{item.title}}</h3>
                        </div>
                        <div class="icon_box"  @click='removeList(index)'>
                            <p class="icon_left bgc_icon">{{item.media_name}}</p>
                            <p class="icon_right bgc_icon">x</p>
                            <p class="icon_right gotoTop">评论：{{item.comment_count}}</p>

                        </div>
                    </div>
                </div>
            </li>
        </ul> 
        <div slot="top" class="mint-loadmore-top">
        <span v-show="topStatus !== 'loading'" class="load_more" :class="{ 'rotate': topStatus === 'drop' }">↓</span>
        <span v-show="topStatus === 'loading'">加载...</span>
        </div>
    </mt-loadmore>
    <!-- <div id="page">
        <div  v-if="item.has_image" class="moreImg_mod clearfix" v-for='item in data.data'>
                <div class="moreImg_title">
                     <div class="oneImg_title">
                        <h3>{{item.title}}</h3>
                    </div>
                </div>
                <ul class="moreImg_position">
                    <li v-for='item in item.image_list'>
                        <img v-lazy.page='item.url'/>
                    </li>
                </ul>
                <div class="icon_box">
                    <p class="icon_left bgc_icon">{{item.media_name}}</p>
                    <p class="icon_right bgc_icon">x</p>
                    <p class="icon_right gotoTop">评论：{{item.comment_count}}</p>

                </div>
        </div>
        <div v-if='item.has_video' class="oneImg_mod" v-for='item,index in data.data'>
            <div class="oneImg_imgPosition">
                <img v-lazy.page='item.large_image_url' />
            </div>
            <div class="oneImg_imgPosition_right">
                <div class="oneImg_title">
                    <h3>{{item.title}}</h3>
                </div>
                <div class="icon_box"  @click='removeList(index)'>
                    <p class="icon_left bgc_icon">{{item.media_name}}</p>
                    <p class="icon_right bgc_icon">x</p>
                    <p class="icon_right gotoTop">评论：{{item.comment_count}}</p>

                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
export default{
    name:'page',
    props:['data'], 
    data(){
        return {
            topStatus:'loading'
        }
    },
    mounted(){
        console.log(this.data)
    },
    methods:{
        removeList(i){
            console.log(i)
        },
        loadTop(){
            this.$http.jsonp('https://m.toutiao.com/list/?tag=__all__&format=json_raw&as=A195E996A1D04E4')
            .then(res=>{
                this.$emit('increment',JSON.parse(res.bodyText).data);
            })
            this.$refs.loadmore.onTopLoaded()
            return false;
        },
        handleTopChange(status){
            this.topStatus = status;
        },
        loadMore(){
            this.loading = true;
            this.$http.jsonp('https://m.toutiao.com/list/?tag=__all__&format=json_raw&as=A195E996A1D04E4')
            .then(res=>{
                this.$emit('Bincrement',JSON.parse(res.bodyText).data);
            })
        }
    }
}
</script>
