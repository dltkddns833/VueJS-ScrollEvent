<template>
    <div id="main_section2" class="section2_container">
        <!-- section2 {{section2Count}}<br/> -->
        <div class="section2_1"  v-bind:class="{animation1 : section2Count > 20, animation2 : section2Count > 40}">
            <div>
                <p>화상면접 section2 {{section2Count}}</p>
                <h1>가장 고도화된 화상면접을<br/>v-cube에서 만나보세요</h1>
                <div class="animation1_1">
                    <p>지원자와 면접관이 구분된 최적의 레이아웃</p>
                </div>
                <div class="animation2_1">
                    <p>지원자와 지원서를 한 눈에 보세요</p>
                </div>
            </div>
            <div>
                <div class="section2_img_contianer">
                    <img class="img_section2_1" src="../../assets/section2_1.png"/>
                    <img class="img_section2_2" src="../../assets/section2_2.png"/>
                </div>
                <div class="animation1_2">
                    <span style="width:60%;">지원자</span>
                    <span style="width:40%;">면접관</span>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    props:['section2Count']
}
// $('#main_section2').on('scroll touchmove mousewheel', function(event) {
//   event.preventDefault();
//   event.stopPropagation();
//   return false;
// });
</script>
    
<style>
    /* html, body{
        overflow: hidden;
        height: 100%;
    } */
    .section2_container{
        height: 100vh;
        /* background-color: brown; */
    }

    .section2_container.animation1{
        /* background-color: deeppink; */
    }

    .section2_1{
        display: flex;
        align-items: center;
        width: 80%;
        height: 100%;
        margin: 0 auto;
    }
    .section2_1 > div{
        width: 50%;
    }

    /* 이미지관련 */
    .section2_img_contianer{
        position: relative;
    }
    .img_section2_1{
        width: 100%;
    }
    .img_section2_2{
        width: 40%;
        position: absolute;
        right: 0;
        opacity: 0;
    }

    /* 첫번째 애니메이션 */
    .section2_1 .animation1_1{
        opacity: 0;
    }
    .section2_1.animation1 .animation1_1{
        /* display: block; */
        opacity: 1;
        animation: tracking-in-expand-fwd-bottom 0.5s;
    }

    .section2_1 .animation1_2{
        opacity: 0;
        display: flex;
        text-align: center;
    }

    .section2_1.animation1 .animation1_2{
        opacity: 1;
        animation: fade-in-right 0.5s;
    }

    /* 두번째 애니메이션 */
    .section2_1 .animation2_1{
        opacity: 0;
    }

    .section2_1.animation2 .animation2_1{
        opacity: 1;
        animation: tracking-in-expand-fwd-bottom 0.5s;
    }
    .section2_1.animation2 .img_section2_2{
        opacity: 1;
        animation: fade-in-right 0.5s;
    }



    /* animation */
    /* 하단에서 슬라이드 인 */
    @-webkit-keyframes tracking-in-expand-fwd-bottom {
        0% {
            letter-spacing: -0.5em;
            -webkit-transform: translateZ(-700px) translateY(500px);
                    transform: translateZ(-700px) translateY(500px);
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            -webkit-transform: translateZ(0) translateY(0);
                    transform: translateZ(0) translateY(0);
            opacity: 1;
        }
    }
    @keyframes tracking-in-expand-fwd-bottom {
        0% {
            letter-spacing: -0.5em;
            -webkit-transform: translateZ(-700px) translateY(500px);
                    transform: translateZ(-700px) translateY(500px);
            opacity: 0;
        }
        40% {
            opacity: 0.6;
        }
        100% {
            -webkit-transform: translateZ(0) translateY(0);
                    transform: translateZ(0) translateY(0);
            opacity: 1;
        }
    }
    /* 오른쪽에서 슬라이드 인 */
    @-webkit-keyframes fade-in-right {
        0% {
            -webkit-transform: translateX(50px);
                    transform: translateX(50px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
            opacity: 1;
        }
    }
    @keyframes fade-in-right {
        0% {
            -webkit-transform: translateX(50px);
                    transform: translateX(50px);
            opacity: 0;
        }
        100% {
            -webkit-transform: translateX(0);
                    transform: translateX(0);
            opacity: 1;
        }
    }
</style>