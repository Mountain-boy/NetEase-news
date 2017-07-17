
<template>
    <div>
        <constmorHead></constmorHead>
        <constmorPage 
            :data='data'
            @increment="incrementTotal"
            @Bincrement = "BincrementTotal"
            ></constmorPage>
        <constmorFoot></constmorFoot>
    </div>
</template>
<script>
    import constmorHead from '@/components/header'
    import constmorFoot from '@/components/footer'
    import constmorPage from '@/pages/Pages'
     export default{
        name: 'Home',
        components:{
            constmorHead,
            constmorFoot,
            constmorPage
        },
        data () {
            return {
                data:[]
            }
        },
        mounted(){
            this.$http.jsonp('https://m.toutiao.com/list/?tag=__all__&format=json_raw&as=A195E996A1D04E4')
            .then(res=>{
                this.data = JSON.parse(res.bodyText).data
                console.log(this.data)
            })
        },
        methods:{
             incrementTotal(val) {
                console.log(val)
                this.data = val.concat(this.data);
            },
            BincrementTotal(val){
                this.data = this.data.concat(val);
            }
        }
     }
</script>