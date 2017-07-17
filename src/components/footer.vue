<template>
    <footer id="foot">

        <menu class="foot_menu">
            <router-link to='home' tag='li'>
                <span class="foot_icon foot_pages"></span>
                <span class="foot_text" :class='{foot_active:rou ==="home"||rou ===""}'>首页</span>
            </router-link>
            <li>
                <span class="foot_icon foot_news"></span>
                <span class="foot_text">要闻</span>
            </li>
            <li>
                <span class="foot_icon foot_live"></span>
                <span class="foot_text">直播</span>
            </li>
            <router-link @click.native='abc' to='video' tag='li'  >
                <span class="foot_icon foot_video"></span>
                <span class="foot_text" :class='{foot_active:rou ==="video"}'>视频</span>
            </router-link>
            <li>
                <span class="foot_icon foot_my"></span>
                <span class="foot_text">我</span>
            </li>

        </menu>

    </footer>

</template>

<script>
export default {
  name: 'foot',
  data () {
    return {
      rou:this.$route.path.substring(1)
    }
  },
  methods:{
    abc(){
      console.log(this.rou)

    }
  }
}
</script>
