<template>
    <div>
        <constmorHead></constmorHead>
        <constmorVideo></constmorVideo>
        <constmorFoot></constmorFoot>
    </div>
</template>
<script>
    import constmorHead from '@/components/header'
    import constmorFoot from '@/components/footer'
    import constmorVideo from '@/components/video'
    export default {
        name:'Video',
        components:{
            constmorHead,
            constmorFoot,
            constmorVideo
        },
        data () {
            return {

            }
        }
    }
</script>