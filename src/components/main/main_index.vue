<template>
    <div class="main_container" v-bind:class="{scrollLock : isLockScroll}">
        <section1></section1>
        <section2 v-bind:section2Count="isScrollCount"></section2>
        <section3 v-if="!isLockScroll"></section3>
    </div>
</template>


<script>
import section1 from './section1.vue'
import section2 from './section2.vue'
import section3 from './section3.vue'
export default {
    components:{
        'section1' : section1,
        'section2' : section2,
        'section3' : section3,
    },
    data(){
        return{
            isLockScroll : false,
            isScrollCount : 0
        }
    },
    created () {
        window.addEventListener('scroll', this.handleScroll);
        window.addEventListener('wheel', this.handelWheel);
    },
    destroyed () {
        window.removeEventListener('scroll', this.handleScroll);
        window.removeEventListener('wheel', this.handelWheel);
    },
    methods: {
        handleScroll (event) {
        // Any code to be executed when the window is scrolled
            var section_2 = this.$el.querySelector("#main_section2");
            if(section_2.scrollHeight <= window.scrollY && this.isScrollCount < 100){
                this.isLockScroll = true;
            }
        },
        handelWheel (event) {
            if(this.isLockScroll && event.deltaY > 0){
                this.isScrollCount += 1
                console.log(this.isScrollCount)
                if(this.isScrollCount >= 100){
                    this.isLockScroll = false;
                }
            }
        }
    }
}
</script>
<style>
    .main_container.scrollLock{
        overflow: hidden;
        height: 100%;
    }
</style>
